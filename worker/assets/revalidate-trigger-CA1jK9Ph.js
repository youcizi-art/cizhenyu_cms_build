import { n as normalizeHostname, g as getZoneId, a as getFrontendSites } from "./worker-entry-yXZNPxBO.js";
import "node:events";
import "node:stream";
const CF_API_BASE = "https://api.cloudflare.com/client/v4";
const CF_TOKEN_HINT = "请到「系统设置 → 基础配置 → Cloudflare 账户」填写 API Token；可用「创建 API Token」（已预填 Zone → Cache Purge）。";
function tokenHint(prefix) {
  return `${prefix}${CF_TOKEN_HINT}`;
}
function toAbsoluteUrls(origin, paths) {
  const base = String(origin || "").trim().replace(/\/$/, "");
  const out = [];
  for (const raw of paths) {
    const t = String(raw || "").trim();
    if (!t) continue;
    if (/^https?:\/\//i.test(t)) {
      out.push(t);
      continue;
    }
    if (!base) continue;
    out.push(`${base}${t.startsWith("/") ? t : `/${t}`}`);
  }
  return [...new Set(out)];
}
async function postPurge(env, zoneId, body) {
  const token = String(env.CF_API_TOKEN || "").trim();
  const res = await fetch(`${CF_API_BASE}/zones/${zoneId}/purge_cache`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(12e3)
  });
  if (res.ok) {
    return { ok: true };
  }
  if (res.status === 401 || res.status === 403) {
    return {
      ok: false,
      reason: "permission-denied",
      needsCfToken: true,
      status: res.status,
      message: tokenHint("Cloudflare API Token 缺少 Cache Purge 权限或已过期。")
    };
  }
  const data = await res.json().catch(() => ({}));
  const detail = (data.errors || []).map((e) => e.message).filter(Boolean).join("; ");
  return {
    ok: false,
    reason: "api-error",
    status: res.status,
    message: `Zone 清除失败（HTTP ${res.status}${detail ? `: ${detail}` : ""}）`
  };
}
async function purgeZoneCacheByHosts(env, hostnames) {
  const token = String(env.CF_API_TOKEN || "").trim();
  if (!token) {
    return {
      ok: false,
      skipped: true,
      reason: "no-token",
      needsCfToken: true,
      message: tokenHint("未配置 Cloudflare API Token，跳过 Zone 边缘清除。")
    };
  }
  const hosts = [
    ...new Set(
      hostnames.map((h) => normalizeHostname(h)).filter((h) => h && !h.endsWith(".pages.dev"))
    )
  ];
  if (!hosts.length) {
    return { ok: false, skipped: true, reason: "no-target", message: "无可用主机名，跳过 Zone 清除" };
  }
  const notes = [];
  const byZone = /* @__PURE__ */ new Map();
  for (const host of hosts) {
    try {
      const zoneId = await getZoneId(env, host);
      const list = byZone.get(zoneId) || [];
      list.push(host);
      byZone.set(zoneId, list);
    } catch (err) {
      notes.push(
        `跳过主机 ${host}：${err instanceof Error ? err.message : "无法解析 Zone"}`
      );
    }
  }
  if (!byZone.size) {
    return {
      ok: false,
      reason: "zone-resolve-failed",
      notes,
      message: notes.join("；") || "未能解析任何 Zone"
    };
  }
  for (const [zoneId, zoneHosts] of byZone) {
    const result = await postPurge(env, zoneId, { hosts: zoneHosts });
    if (!result.ok) {
      return { ...result, notes };
    }
    notes.push(`已清除 Zone 主机缓存：${zoneHosts.join(", ")}`);
  }
  return { ok: true, notes };
}
async function purgeZoneCacheByFiles(env, origin, paths) {
  const token = String(env.CF_API_TOKEN || "").trim();
  if (!token) {
    return {
      ok: false,
      skipped: true,
      reason: "no-token",
      needsCfToken: true,
      message: tokenHint("未配置 Cloudflare API Token，跳过 Zone 边缘清除。")
    };
  }
  const files = toAbsoluteUrls(origin, paths);
  if (!files.length) {
    return { ok: false, skipped: true, reason: "no-target", message: "无有效 URL，跳过 Zone 清除" };
  }
  let zoneId;
  try {
    const host = normalizeHostname(files[0]);
    zoneId = await getZoneId(env, host);
  } catch (err) {
    return {
      ok: false,
      reason: "zone-resolve-failed",
      message: err instanceof Error ? err.message : "无法解析 Zone"
    };
  }
  const result = await postPurge(env, zoneId, { files });
  if (!result.ok) return result;
  return {
    ok: true,
    notes: [`已按 URL 清除 Zone 缓存（${files.length} 条）`]
  };
}
async function triggerFrontendSiteRevalidate(db, input) {
  const id = String(input.siteId || "").trim();
  if (!id) return { ok: false, error: "缺少站点 id" };
  const sites = await getFrontendSites(db);
  const site = sites.find((s) => s.id === id);
  if (!site) return { ok: false, error: "前端站点不存在" };
  if (!site.enabled) return { ok: false, error: "站点已禁用" };
  if (!site.revalidateUrl || !site.revalidateSecret) {
    return { ok: false, error: "站点缺少 revalidateUrl / secret" };
  }
  const paths = Array.isArray(input.paths) ? input.paths.map((p) => String(p || "").trim()).filter(Boolean) : [];
  const collections = Array.isArray(input.collections) ? input.collections.map((p) => String(p || "").trim()).filter(Boolean) : [];
  const purge = String(input.purge || "").trim();
  if (!purge && !paths.length && !collections.length) {
    return { ok: false, error: "请指定 purge、paths 或 collections" };
  }
  let worker;
  try {
    const res = await fetch(site.revalidateUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        secret: site.revalidateSecret,
        siteKey: site.siteKey,
        ...purge ? { purge } : {},
        ...paths.length ? { paths } : {},
        ...collections.length ? { collections } : {}
      }),
      signal: AbortSignal.timeout(12e3)
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      worker = {
        ok: false,
        status: res.status,
        body,
        error: String(body.msg || `HTTP ${res.status}`),
        revalidateUrl: site.revalidateUrl,
        siteKey: site.siteKey
      };
    } else {
      worker = {
        ok: true,
        status: res.status,
        body,
        revalidateUrl: site.revalidateUrl,
        siteKey: site.siteKey
      };
    }
  } catch (error) {
    worker = {
      ok: false,
      error: error instanceof Error ? error.message : "revalidate 请求失败",
      revalidateUrl: site.revalidateUrl,
      siteKey: site.siteKey
    };
  }
  if (!worker.ok) return worker;
  let zone;
  const cfEnv = input.cfEnv;
  if (cfEnv) {
    if (paths.length) {
      zone = await purgeZoneCacheByFiles(cfEnv, site.origin || "", paths);
    } else if (purge === "all") {
      const host = normalizeHostname(site.origin || "");
      zone = host ? await purgeZoneCacheByHosts(cfEnv, [host]) : { ok: false, skipped: true, reason: "no-target", message: "站点无 origin，跳过 Zone 清除" };
    }
  }
  const needsCfToken = Boolean(zone?.needsCfToken);
  const parts = ["已请求前端刷新缓存"];
  if (zone?.ok && zone.notes?.length) {
    parts.push(zone.notes.slice(0, 2).join("；"));
  } else if (zone && !zone.ok && zone.message) {
    parts.push(zone.message);
  }
  return {
    ...worker,
    zone,
    needsCfToken,
    message: parts.join("。")
  };
}
export {
  triggerFrontendSiteRevalidate
};

import { c as createDb, s as siteSettings, e as eq } from "./worker-entry-Dv9mdlyw.js";
import "node:events";
import "node:stream";
function cloneMemberDict(value) {
  return JSON.parse(JSON.stringify(value ?? {}));
}
function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
function deepMergeTranslations(target, source) {
  if (!isPlainObject(target) || !isPlainObject(source)) {
    return cloneMemberDict(source ?? target ?? {});
  }
  const result = { ...target };
  for (const [key, sourceValue] of Object.entries(source)) {
    const targetValue = result[key];
    if (isPlainObject(sourceValue) && isPlainObject(targetValue)) {
      result[key] = deepMergeTranslations(targetValue, sourceValue);
    } else {
      result[key] = cloneMemberDict(sourceValue);
    }
  }
  return result;
}
const MEMBER_FALLBACKS = {
  "zh-CN": {
    app: { loading: "加载中…", title: "会员中心", disabled: "会员功能未启用", disabledHint: "请联系站点管理员开启会员中心" },
    language: { label: "界面语言" },
    common: {
      save: "保存",
      sendCode: "发送验证码",
      logout: "退出",
      captchaRequired: "请完成人机验证",
      captchaFirst: "请先完成人机验证",
      captchaLoadFailed: "人机验证加载失败，请刷新页面或检查域名是否已加入 Turnstile 主机名",
      captchaWidgetError: "人机验证组件出错，请确认会员域名已加入 Cloudflare Turnstile 允许主机名",
      loadFailed: "加载失败",
      actions: "操作"
    },
    nav: { overview: "概览", profile: "资料", assets: "资产", tokens: "API 令牌", security: "安全" },
    login: {
      title: "登录账号",
      email: "邮箱",
      password: "密码",
      submit: "登录",
      success: "登录成功",
      failed: "登录失败",
      register: "注册",
      forgot: "找回密码",
      oauth: "或使用第三方账号"
    },
    register: {
      title: "创建账号",
      email: "邮箱",
      code: "验证码",
      nickname: "昵称",
      password: "密码",
      submit: "注册",
      success: "注册成功",
      failed: "注册失败",
      hasAccount: "已有账号？登录",
      codeSent: "验证码已发送",
      sendFailed: "发送失败"
    },
    forgot: {
      title: "找回密码",
      email: "邮箱",
      code: "验证码",
      password: "新密码",
      submit: "重置密码",
      success: "密码已重置",
      failed: "重置失败",
      codeSent: "验证码已发送",
      sendFailed: "发送失败"
    },
    dashboard: {
      hello: "你好，{name}",
      level: "等级",
      balance: "余额（元）",
      points: "积分",
      shortcuts: "快捷入口",
      editProfile: "完善资料",
      viewAssets: "查看资产流水",
      manageTokens: "管理 API 令牌",
      changePassword: "修改密码"
    },
    profile: {
      title: "个人资料",
      nickname: "昵称",
      phone: "手机",
      avatar: "头像",
      birthday: "生日",
      bio: "签名",
      saved: "已保存",
      saveFailed: "保存失败",
      upload: "上传头像",
      uploading: "处理中…",
      uploadFailed: "头像处理失败",
      cropTitle: "裁剪并压缩头像",
      cropCancel: "取消",
      cropConfirm: "确认并应用",
      clearAvatar: "清除"
    },
    assets: {
      title: "当前资产",
      balance: "余额",
      points: "积分",
      balanceLogs: "余额流水",
      pointsLogs: "积分流水",
      type: "类型",
      amount: "变动",
      amountYuan: "变动（元）",
      remark: "备注",
      time: "时间"
    },
    tokens: {
      title: "API 令牌",
      hint: "令牌可用于公开 API 的 Authorization 头（Bearer）。明文仅在创建时显示一次。",
      name: "令牌名称",
      colName: "名称",
      defaultName: "默认令牌",
      create: "创建令牌",
      created: "已创建",
      createFailed: "创建失败",
      newToken: "新令牌（请立即保存）",
      prefix: "前缀",
      status: "状态",
      revoke: "撤销",
      revoked: "已撤销",
      revokeFailed: "撤销失败"
    },
    security: {
      title: "修改密码",
      oldPassword: "原密码",
      password: "新密码",
      submit: "更新密码",
      success: "密码已更新，请重新登录",
      failed: "更新失败"
    }
  },
  "en-US": {
    app: { loading: "Loading…", title: "Member Center", disabled: "Member center is disabled", disabledHint: "Please contact the site admin to enable it" },
    language: { label: "Language" },
    common: {
      save: "Save",
      sendCode: "Send code",
      logout: "Log out",
      captchaRequired: "Please complete the captcha",
      captchaFirst: "Please complete the captcha first",
      captchaLoadFailed: "Captcha failed to load. Refresh or add this hostname in Turnstile.",
      captchaWidgetError: "Captcha widget error. Ensure the member domain is allowed in Cloudflare Turnstile.",
      loadFailed: "Failed to load",
      actions: "Actions"
    },
    nav: { overview: "Overview", profile: "Profile", assets: "Assets", tokens: "API Tokens", security: "Security" },
    login: {
      title: "Sign in",
      email: "Email",
      password: "Password",
      submit: "Sign in",
      success: "Signed in",
      failed: "Sign-in failed",
      register: "Register",
      forgot: "Forgot password",
      oauth: "Or continue with"
    },
    register: {
      title: "Create account",
      email: "Email",
      code: "Code",
      nickname: "Nickname",
      password: "Password",
      submit: "Sign up",
      success: "Registered",
      failed: "Registration failed",
      hasAccount: "Already have an account? Sign in",
      codeSent: "Code sent",
      sendFailed: "Failed to send code"
    },
    forgot: {
      title: "Reset password",
      email: "Email",
      code: "Code",
      password: "New password",
      submit: "Reset",
      success: "Password reset",
      failed: "Reset failed",
      codeSent: "Code sent",
      sendFailed: "Failed to send code"
    },
    dashboard: {
      hello: "Hello, {name}",
      level: "Level",
      balance: "Balance",
      points: "Points",
      shortcuts: "Shortcuts",
      editProfile: "Edit profile",
      viewAssets: "Asset logs",
      manageTokens: "API tokens",
      changePassword: "Change password"
    },
    profile: {
      title: "Profile",
      nickname: "Nickname",
      phone: "Phone",
      avatar: "Avatar",
      birthday: "Birthday",
      bio: "Bio",
      saved: "Saved",
      saveFailed: "Save failed",
      upload: "Upload avatar",
      uploading: "Processing…",
      uploadFailed: "Avatar processing failed",
      cropTitle: "Crop & compress avatar",
      cropCancel: "Cancel",
      cropConfirm: "Apply",
      clearAvatar: "Clear"
    },
    assets: {
      title: "Assets",
      balance: "Balance",
      points: "Points",
      balanceLogs: "Balance logs",
      pointsLogs: "Points logs",
      type: "Type",
      amount: "Change",
      amountYuan: "Change (CNY)",
      remark: "Remark",
      time: "Time"
    },
    tokens: {
      title: "API Tokens",
      hint: "Use as Authorization: Bearer. Plaintext is shown once on create.",
      name: "Token name",
      colName: "Name",
      defaultName: "Default Token",
      create: "Create",
      created: "Created",
      createFailed: "Create failed",
      newToken: "New token (save it now)",
      prefix: "Prefix",
      status: "Status",
      revoke: "Revoke",
      revoked: "Revoked",
      revokeFailed: "Revoke failed"
    },
    security: {
      title: "Change password",
      oldPassword: "Current password",
      password: "New password",
      submit: "Update",
      success: "Password updated, please sign in again",
      failed: "Update failed"
    }
  }
};
const MEMBER_TRANSLATIONS_KEY = "member_translations";
function unwrapLocalePayload(locale, raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const obj = raw;
  const nested = obj[locale];
  if (nested && typeof nested === "object" && !Array.isArray(nested) && Object.keys(obj).length === 1) {
    return cloneMemberDict(nested);
  }
  return cloneMemberDict(obj);
}
function normalizeMemberTranslationsMap(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return {};
  const next = {};
  for (const [locale, value] of Object.entries(input)) {
    const code = String(locale || "").trim();
    if (!code) continue;
    next[code] = unwrapLocalePayload(code, value);
  }
  return next;
}
function buildEditorTranslations(locales, stored) {
  const next = {};
  for (const locale of locales) {
    const fallback = MEMBER_FALLBACKS[locale] || MEMBER_FALLBACKS["zh-CN"] || {};
    const override = stored[locale] || {};
    next[locale] = deepMergeTranslations(fallback, override);
  }
  return next;
}
async function getMemberTranslationsMap(db) {
  const orm = createDb(db);
  const row = await orm.select({ value_json: siteSettings.valueJson }).from(siteSettings).where(eq(siteSettings.key, MEMBER_TRANSLATIONS_KEY)).get();
  if (!row?.value_json) return {};
  try {
    return normalizeMemberTranslationsMap(JSON.parse(row.value_json));
  } catch {
    return {};
  }
}
async function saveMemberTranslationsMap(db, input) {
  const next = normalizeMemberTranslationsMap(input);
  const ts = Date.now();
  const orm = createDb(db);
  await orm.insert(siteSettings).values({
    key: MEMBER_TRANSLATIONS_KEY,
    valueJson: JSON.stringify(next),
    updatedAt: ts
  }).onConflictDoUpdate({
    target: siteSettings.key,
    set: {
      valueJson: JSON.stringify(next),
      updatedAt: ts
    }
  }).run();
  return next;
}
async function getMemberTranslationsForLocale(db, locale) {
  const map = await getMemberTranslationsMap(db);
  const code = String(locale || "").trim() || "zh-CN";
  const variants = [
    code,
    code.replace("_", "-"),
    code.toLowerCase(),
    code.split("-")[0] || ""
  ].filter(Boolean);
  for (const variant of variants) {
    const hit = Object.entries(map).find(([key]) => key === variant || key.toLowerCase() === variant.toLowerCase() || key.toLowerCase().replace("_", "-") === variant.toLowerCase().replace("_", "-"));
    if (hit) return hit[1];
  }
  return null;
}
export {
  MEMBER_TRANSLATIONS_KEY,
  buildEditorTranslations,
  getMemberTranslationsForLocale,
  getMemberTranslationsMap,
  normalizeMemberTranslationsMap,
  saveMemberTranslationsMap,
  unwrapLocalePayload
};

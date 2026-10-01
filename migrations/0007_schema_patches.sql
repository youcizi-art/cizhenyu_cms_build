-- 增量列：补齐旧库（新库 0002 CREATE 已含这些列）
-- 仅供 wrangler d1 migrations apply（每库执行一次）
-- ensureSchema / 测试走 ensureColumn，不执行本文件

ALTER TABLE collections ADD COLUMN group_id TEXT;
ALTER TABLE entities ADD COLUMN locale TEXT NOT NULL DEFAULT 'zh-CN';
ALTER TABLE entities ADD COLUMN language_group_key TEXT;

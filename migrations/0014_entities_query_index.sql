-- 公开列表常用过滤：集合 + 语种 / 翻译组
CREATE INDEX IF NOT EXISTS idx_entities_collection_locale ON entities(collection_id, locale);
CREATE INDEX IF NOT EXISTS idx_entities_collection_group ON entities(collection_id, language_group_key);

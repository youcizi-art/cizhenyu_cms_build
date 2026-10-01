-- 模型（图纸）/ 集合（房子）/ 实体（内容行）
-- CREATE 已含 group_id / locale / language_group_key；旧库由 0007 / COLUMN_PATCHES 补齐

CREATE TABLE IF NOT EXISTS models (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL DEFAULT '',
  fields_json TEXT NOT NULL DEFAULT '[]',
  version INTEGER NOT NULL DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'enabled',
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_models_status ON models(status);

CREATE TABLE IF NOT EXISTS collections (
  id TEXT PRIMARY KEY NOT NULL,
  model_id TEXT NOT NULL,
  group_id TEXT,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL DEFAULT '',
  icon TEXT NOT NULL DEFAULT 'DatabaseOutlined',
  sort INTEGER NOT NULL DEFAULT 0,
  field_config TEXT NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'enabled',
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY (model_id) REFERENCES models(id)
);

CREATE INDEX IF NOT EXISTS idx_collections_model ON collections(model_id);
CREATE INDEX IF NOT EXISTS idx_collections_status ON collections(status);

CREATE TABLE IF NOT EXISTS entities (
  id TEXT PRIMARY KEY NOT NULL,
  collection_id TEXT NOT NULL,
  data_json TEXT NOT NULL DEFAULT '{}',
  locale TEXT NOT NULL DEFAULT 'zh-CN',
  language_group_key TEXT,
  created_by TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_entities_collection ON entities(collection_id);

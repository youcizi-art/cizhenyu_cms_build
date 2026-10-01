-- 内容前端多语言：语种字典 + 实体语种关联（对齐 cizhenyu languages / translation_group）
-- language_group_key ≡ cizhenyu 的 translation_group，用于同内容多语种互相关联

CREATE TABLE IF NOT EXISTS languages (
  code TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  is_default INTEGER NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_languages_status ON languages(status);
CREATE INDEX IF NOT EXISTS idx_languages_sort ON languages(sort_order);

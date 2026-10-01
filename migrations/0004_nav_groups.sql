-- 真实导航分组（递归树）+ 集合挂组
-- 顶层分组自然形成「站点」语义前缀；本阶段不做 API 路径派生

CREATE TABLE IF NOT EXISTS nav_groups (
  id TEXT PRIMARY KEY NOT NULL,
  parent_id TEXT,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT 'FolderOutlined',
  sort INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'enabled',
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY (parent_id) REFERENCES nav_groups(id)
);

CREATE INDEX IF NOT EXISTS idx_nav_groups_parent ON nav_groups(parent_id);
CREATE INDEX IF NOT EXISTS idx_nav_groups_status ON nav_groups(status);

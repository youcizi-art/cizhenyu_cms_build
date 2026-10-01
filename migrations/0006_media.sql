-- 独立媒体库（R2 对象元数据；文件本体在 MEDIA_BUCKET）
CREATE TABLE IF NOT EXISTS media_items (
  id TEXT PRIMARY KEY NOT NULL,
  key TEXT,
  url TEXT NOT NULL,
  filename TEXT NOT NULL,
  mime_type TEXT NOT NULL DEFAULT 'application/octet-stream',
  size INTEGER NOT NULL DEFAULT 0,
  is_remote INTEGER NOT NULL DEFAULT 0,
  created_by TEXT,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_media_items_created ON media_items(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_media_items_filename ON media_items(filename);

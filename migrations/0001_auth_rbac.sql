-- Auth + RBAC（FastAdmin / BuildAdmin 风格：管理员 / 角色 / 权限节点）
-- 全部 IF NOT EXISTS，本地与部署均可重复执行。

CREATE TABLE IF NOT EXISTS admins (
  id TEXT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL UNIQUE,
  nickname TEXT NOT NULL DEFAULT '',
  hashed_password TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'enabled',
  is_super INTEGER NOT NULL DEFAULT 0,
  last_login_at INTEGER,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS admin_sessions (
  id TEXT PRIMARY KEY NOT NULL,
  admin_id TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_admin_sessions_admin ON admin_sessions(admin_id);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_expires ON admin_sessions(expires_at);

CREATE TABLE IF NOT EXISTS auth_roles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'enabled',
  sort INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS auth_rules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  parent_id INTEGER NOT NULL DEFAULT 0,
  name TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'menu',
  path TEXT NOT NULL DEFAULT '',
  icon TEXT NOT NULL DEFAULT '',
  sort INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'enabled',
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS admin_roles (
  admin_id TEXT NOT NULL,
  role_id INTEGER NOT NULL,
  PRIMARY KEY (admin_id, role_id),
  FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES auth_roles(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS role_rules (
  role_id INTEGER NOT NULL,
  rule_id INTEGER NOT NULL,
  PRIMARY KEY (role_id, rule_id),
  FOREIGN KEY (role_id) REFERENCES auth_roles(id) ON DELETE CASCADE,
  FOREIGN KEY (rule_id) REFERENCES auth_rules(id) ON DELETE CASCADE
);

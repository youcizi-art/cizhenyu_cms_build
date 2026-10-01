CREATE TABLE IF NOT EXISTS ai_agents (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  system_prompt TEXT NOT NULL DEFAULT '',
  model_provider_id TEXT NOT NULL DEFAULT '',
  model_id TEXT NOT NULL DEFAULT '',
  master_model_key TEXT NOT NULL DEFAULT '',
  loaded_models_json TEXT NOT NULL DEFAULT '[]',
  model_temperatures_json TEXT NOT NULL DEFAULT '{}',
  system_role_id INTEGER,
  skill_slugs_json TEXT NOT NULL DEFAULT '[]',
  status TEXT NOT NULL DEFAULT 'active',
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS ai_skills (
  slug TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  executor TEXT NOT NULL DEFAULT 'server',
  kind TEXT NOT NULL DEFAULT 'http-api',
  input_schema TEXT NOT NULL DEFAULT '{}',
  server_config TEXT NOT NULL DEFAULT '{}',
  local_hints TEXT NOT NULL DEFAULT '{}',
  version TEXT NOT NULL DEFAULT '1.0.0',
  status TEXT NOT NULL DEFAULT 'active',
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS ai_runners (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL DEFAULT '',
  admin_id TEXT NOT NULL DEFAULT '',
  platform TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'offline',
  last_seen_at INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS ai_runner_capabilities (
  runner_id TEXT NOT NULL,
  skill_slug TEXT NOT NULL,
  version TEXT NOT NULL DEFAULT '',
  meta_json TEXT NOT NULL DEFAULT '{}',
  healthy INTEGER NOT NULL DEFAULT 1,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (runner_id, skill_slug)
);

CREATE TABLE IF NOT EXISTS ai_tasks (
  id TEXT PRIMARY KEY NOT NULL,
  type TEXT NOT NULL DEFAULT 'generic',
  title TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'queued',
  agent_id TEXT,
  required_skills_json TEXT NOT NULL DEFAULT '[]',
  runner_id TEXT,
  payload_json TEXT NOT NULL DEFAULT '{}',
  result_json TEXT NOT NULL DEFAULT '{}',
  artifact_ref TEXT NOT NULL DEFAULT '',
  error TEXT NOT NULL DEFAULT '',
  progress INTEGER NOT NULL DEFAULT 0,
  claimed_by TEXT NOT NULL DEFAULT '',
  claimed_at INTEGER,
  heartbeat_at INTEGER,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_ai_tasks_status ON ai_tasks(status, created_at);
CREATE INDEX IF NOT EXISTS idx_ai_runners_seen ON ai_runners(last_seen_at);

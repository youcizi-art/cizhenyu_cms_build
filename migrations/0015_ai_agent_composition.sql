-- AI 员工组成字段：可选模型微员工 / 技能微员工 / Policy / Memory / Output
-- wrangler d1 migrations apply 执行一次；ensureSchema 走 COLUMN_PATCHES

ALTER TABLE ai_agents ADD COLUMN role TEXT NOT NULL DEFAULT '';
ALTER TABLE ai_agents ADD COLUMN default_goal TEXT NOT NULL DEFAULT '';
ALTER TABLE ai_agents ADD COLUMN acceptance_criteria_json TEXT NOT NULL DEFAULT '[]';
ALTER TABLE ai_agents ADD COLUMN policy_json TEXT NOT NULL DEFAULT '{}';
ALTER TABLE ai_agents ADD COLUMN runtime_json TEXT NOT NULL DEFAULT '{}';
ALTER TABLE ai_agents ADD COLUMN output_format TEXT NOT NULL DEFAULT 'markdown';
ALTER TABLE ai_agents ADD COLUMN memory_scope TEXT NOT NULL DEFAULT 'workspace';

# Cizhenyu CMS 通用交付包

本包为脱敏构建产物，供客户通过 **cizhenyu_deploy** 一键部署。

## 包含

- worker/ — Workers 脚本
- client/ — 管理端静态资源（ASSETS）
- migrations/ — D1 SQL
- content/b2b-models.json / b2b-collections.json — B2B 模板（非客户数据）
- wrangler.delivery.example.toml — 仅占位说明

## 不含（刻意排除）

- 真实 wrangler.toml / database_id / KV id
- .env / 密钥 / ADMIN_VERIFICATION 真值
- 任意客户业务数据

部署时由 cizhenyu_deploy 创建 D1/R2/KV、写入环境变量、执行迁移并同步 Turnstile 白名单。

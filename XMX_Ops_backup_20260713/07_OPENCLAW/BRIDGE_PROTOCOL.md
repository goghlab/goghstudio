# OpenClaw Bridge Protocol

你把整個 `XMX_Ops` 資料夾同步到本機後，用 OpenClaw（或任何本機 Agent）讀呢份。

---

## Job 格式（每條任務）

```yaml
id: OC-001
title: Deploy waitlist site
status: pending   # pending | doing | done | blocked
owner: openclaw
inputs:
  - 02_WAITLIST/site/index.html
steps:
  - Create Netlify/Vercel site or copy to local static server
  - Connect custom domain if any
  - Enable form: replace form action with Formspree/Basin/Google Apps Script URL
outputs:
  - live_url
  - form_endpoint
notes: Do not charge money on this page yet (waitlist only)
```

---

## 建議 OpenClaw 系統提示（貼入本機）

```
You are OpenClaw working for brand XMX.
Read /XMX_Ops/00_SYSTEM/PROGRESS.md first every session.
Only execute jobs in 07_OPENCLAW/jobs_queue.md with status=pending.
Never invent product claims: no shipping hologram earbuds, no medical claims.
Prefer waitlist over payment until PROGRESS says G3 open.
After finishing a job: set status=done and append a line to 00_SYSTEM/PROGRESS.md log.
Human founder approves anything involving money, legal, or public promises.
```

---

## Arena vs OpenClaw 分工

| 任務類型 | 誰 |
|----------|-----|
| 寫文案、腳本、HTML 源碼、策略 | Arena |
| 開檔案、部署、轉碼、本地 API、排程 | OpenClaw |
| 發 IG、匯款、簽合同 | 人類 |

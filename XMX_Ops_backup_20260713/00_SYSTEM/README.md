# XMX Ops — 多 Agent 工作系統（Arena ↔ OpenClaw）

**目標：** 由 waitlist → branding → 製片 → 早鳥預售（約 500 名單再收錢）  
**主產品：** XMX-T1 Translate  
**你：** 創辦人（決策、匯款、開帳號、發帖、收樣）  
**Arena Agent（我）：** 戰略、文案、規格、腳本、網頁源碼、多角色產出  
**OpenClaw（你部電腦）：** 整合檔案、本地自動化、排程、接 API、剪片工具、發佈輔助  

---

## 1. 我幫到 vs 幫唔到

| 我（Arena）做到 | 要你／OpenClaw／真人廠 |
|-----------------|------------------------|
| 設立全部 Agent 角色 + SOP | 喺你電腦安裝 OpenClaw、登入 IG |
| Brand 文案、色票、bio、腳本 | 用你帳號發帖、收款 |
| Waitlist 完整 HTML 網站 | 部署到 Netlify/Vercel/你網域 |
| AI 片 prompt、分鏡、字幕稿 | 用 Runway/Pika/CapCut 出片 |
| 工廠郵件、規格包 | 你發郵件、匯款、收樣 |
| 預售 FAQ、郵件序列 | 接 Mailchimp/Brevo API（OpenClaw 可做） |
| 每週內容日曆 | 你確認後發佈 |
| ❌ 直接登入你 IG/銀行 | 你自己操作 |
| ❌ 直接改耳塞芯片固件 | ODM 廠 |
| ❌ 保證 OpenClaw 內建指令 100% 相同 | 用本系統 `bridge` 格式對接 |

---

## 2. 資料夾地圖（整包交畀 OpenClaw）

```
XMX_Ops/
├── 00_SYSTEM/          總指揮、進度、Agent 名冊
├── 01_BRAND/           Logo 規範、品牌 copy、視覺
├── 02_WAITLIST/        官網、email 序列
├── 03_CONTENT/         腳本、prompt、caption、日曆
├── 04_FACTORY/         工廠相關（可 symlink 舊 package）
├── 05_ADS/             廣告文案
├── 06_SUPPORT/         FAQ、DM 模板
├── 07_OPENCLAW/        給本機 AI 的 bridge 指令
└── 08_OUTPUTS/ready_to_post/  最終可直接用嘅檔
```

**規則：**  
- Arena 產出 → 放入對應 `outbox/` 或 `08_OUTPUTS/ready_to_post/`  
- 你／OpenClaw 做完 → 寫入 `inbox/` 或更新 `00_SYSTEM/PROGRESS.md`  
- 單一真相來源：`00_SYSTEM/PROGRESS.md` + `00_SYSTEM/DECISIONS.md`

---

## 3. 工作流（每日）

```
1. 你打開 PROGRESS.md 睇今日 3 件事
2. 向 Arena 下單：@角色 + 任務（見 AGENT_ROSTER）
3. Arena 寫檔到 outbox / ready_to_post
4. OpenClaw 讀 07_OPENCLAW/jobs_queue.md 執行本機步驟
5. 你驗收 → 勾選 PROGRESS → 必要時發帖／發信
```

---

## 4. 階段閘門（先 waitlist 後收錢）

| 閘門 | 條件 | 先做咩 |
|------|------|--------|
| G0 開張 | Brand pack + IG + Waitlist 站上線 | 而家 |
| G1 暖場 | 持續內容；名單累積 | AI 片 OK |
| G2 真機 | ODM 樣到手 + ≥3 條真機片 | 先暫停猛收錢 |
| G3 早鳥 | Waitlist **≥ ~500** 且真機滿意 | 先開訂金／早鳥 |
| G4 大貨 | 金樣 + 認證路徑清楚 | 落 MOQ |

---

## 5. 同 OpenClaw 點交接

見 `07_OPENCLAW/BRIDGE_PROTOCOL.md`  
每個 job 都係 YAML 式任務塊，OpenClaw 可逐條執行。

# Waitlist 測試清單（測 waitlist）

**日期：** 2026-07-13  
**產品：** XMX-T1 Translate Waitlist  
**Form endpoint（Arena HTML 內）：** `https://formspree.io/f/xzdnpwnj`

---

## A. 後端 Formspree（Arena 已抽測）

| 檢查 | 結果 |
|------|------|
| POST JSON 到 endpoint | ✅ `200` + `{"ok":true}` |
| GET 表單頁 | 400 正常（Formspree 要 POST，唔係瀏覽表單 UI） |

→ **Form ID 而家有效**（之前「Form not found」若仍出現在舊部署，= 網站未 redeploy 新 HTML）。

---

## B. 你要做的手動測試（5 分鐘）

### B1. 確認 LIVE_URL
- [ ] 打開 OpenClaw 寫嘅 `~/Desktop/XMX_IG_Launch/live_url.txt`  
  **或** Vercel dashboard 上嘅 production URL  
- [ ] 用手機 Safari／Chrome 打開（唔好只測電腦）

**若無 LIVE_URL：** 叫 OpenClaw redeploy  
`~/Desktop/XMX_Ops/02_WAITLIST/site/index.html`

### B2. 頁面外觀 QC
- [ ] 頂部係 **幾何 XMX logo 圖**（唔係普通字體 XMX）  
- [ ] 繁中／EN 可切換  
- [ ] 有「加入 Waitlist」表單：Email、最在意、城市  
- [ ] 深色高級風，同 brand 一致  

### B3. 提交測試（最重要）
1. Email 填 **你自己真 email**（方便收通知）  
2. 最在意：選「旅行」  
3. 城市：Hong Kong  
4. 按提交  

**成功標準（滿足大部分即可）：**
- [ ] 頁面去到 thank-you／成功狀態（Formspree 預設或自訂）  
- [ ] **無** `Form not found` / `hashid` 錯誤  
- [ ] Formspree 後台 https://formspree.io → 該 form → **Submissions** 有一筆  
- [ ] 你電郵收到 Formspree 通知（若帳戶有開 notification）

### B4. 失敗時點做

| 現象 | 處理 |
|------|------|
| Form not found | 本機 `index.html` 的 action 是否仍係 `xzdnpwnj`？Redeploy 最新 zip |
| 提交無反應 | 查瀏覽器 Console；是否 HTTPS 部署 |
| 有 submission 但無 email | Formspree → Settings → 開 email notifications |
| 舊站仍 YOUR_FORM_ID | 未覆蓋部署；用最新 `XMX_Ops/02_WAITLIST/site/index.html` |

### B5. IG 串連
- [ ] Bio 連結 = 同一個 LIVE_URL  
- [ ] 用第二部機／無痕打開 bio link，再提交一次（可用 `你的名+test@email.com`）

---

## C. 貼畀 OpenClaw（若要佢幫手）

```text
測 Waitlist：
1) 確認 ~/Desktop/XMX_Ops/02_WAITLIST/site/index.html 內 action=
   https://formspree.io/f/xzdnpwnj
2) Redeploy Vercel production
3) 把 LIVE_URL 寫入 ~/Desktop/XMX_IG_Launch/live_url.txt 並回覆我
4) 人類會用手機提交測試；你勿編造提交成功
```

---

## D. 測試記錄（你填）

| 項 | 你的結果 |
|----|----------|
| LIVE_URL | |
| 提交時間 | |
| Formspree 有 submission？ | Y / N |
| 電郵通知？ | Y / N |
| Logo 正確？ | Y / N |
| 整體 | PASS / FAIL |

**PASS 後：** 可正式推 IG traffic 入 waitlist。  
**FAIL：** 把錯誤截圖 + LIVE_URL 貼返 Arena。

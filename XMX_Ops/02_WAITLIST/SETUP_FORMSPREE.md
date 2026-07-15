# Waitlist 表單設定（Formspree）— 5 分鐘

我（Arena / OpenClaw）**唔可以替你註冊**，因為要用你自己電郵收名單。  
你做完下面步驟，把 **Form ID** 貼返畀我或 OpenClaw，就可以改檔 + 重新部署。

---

## 步驟 A — 建立 Formspree（推薦，免費夠用）

1. 打開 https://formspree.io  
2. **Sign up**（用你 Gmail / 業務電郵）  
3. 登入後按 **New Form**  
4. Form name 填：`XMX Waitlist`  
5. 建立後會見到 endpoint，類似：

```text
https://formspree.io/f/xpwkgqyz
                         ^^^^^^^^
                         呢段就係 FORM_ID
```

6. 複製成條 URL，或只複製 `f/` 後面嗰串 ID  
7. 在 Formspree 設定：  
   - **Email notifications** → 開，寄去你電郵  
   - （可選）接 Google Sheet / 匯出 CSV  

---

## 步驟 B — 把 ID 填入網站

把網站入面呢行：

```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

改成（例子）：

```html
action="https://formspree.io/f/xpwkgqyz"
```

**要改嘅檔：**

| 位置 | 檔案 |
|------|------|
| 完整專案 | `XMX_Ops/02_WAITLIST/site/index.html` |
| 單檔部署 | `XMX_WAITLIST_index.html`（Arena 根目錄都有） |
| 若已部署 | 改完要 **重新 upload / redeploy** |

---

## 步驟 C — 回覆格式（貼畀我或 OpenClaw）

任揀一種：

```text
FORMSPREE_ID=xpwkgqyz
```

或

```text
FORMSPREE_URL=https://formspree.io/f/xpwkgqyz
```

收到後我會（或 OpenClaw 會）立刻改 HTML 並叫你重新部署。

---

## 用 Getform 都可以

1. https://getform.io 註冊  
2. Create form → 複製 endpoint（例如 `https://getform.io/f/xxxxx`）  
3. 把 `action="..."` 整段換成 Getform URL  
4. 同樣 `method="POST"`  

---

## 測試清單

- [ ] 用手機打開 waitlist 頁  
- [ ] 填假 email 提交  
- [ ] 你電郵有 Formspree 通知  
- [ ] Formspree 後台 Submissions 有一筆  
- [ ] 成功頁或「Thank you」出現（Formspree 預設）  

---

## 常見問題

**Q: 免費夠嗎？**  
A: Formspree 免費 plan 有月提交上限，waitlist 初期通常夠；多咗再 upgrade。

**Q: 可不可以不顯示 Formspree 品牌？**  
A: 免費版提交後可能跳去 Formspree thank-you；付費或自訂 redirect 可改。可在 form 加：
```html
<input type="hidden" name="_next" value="https://你的網域/thanks.html" />
```

**Q: 我想用 Google 表單？**  
A: 可以，但 UI 冇咁品牌化。Formspree 較適合而家呢頁。

---

## 安全小提示

- 唔好把 Formspree 密碼畀 AI  
- 只需要公開嘅 **form endpoint ID**  
- 垃圾信多可以之後加 Formspree reCAPTCHA  

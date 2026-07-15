# 貼畀 OpenClaw — Form 已更新，請重新部署

```
FORMSPREE 已寫入：
  action="https://formspree.io/f/xzdnpwnj"

請更新本機檔案後重新部署 Vercel：

方法 A — 若你有最新 zip：
  解壓覆蓋 ~/Desktop/XMX_Ops
  確認：
    grep xzdnpwnj ~/Desktop/XMX_Ops/02_WAITLIST/site/index.html

方法 B — 直接改本機一行：
  把 YOUR_FORM_ID 或舊 action 改成：
  https://formspree.io/f/xzdnpwnj

然後：
  1) Redeploy Vercel（同一 project）
  2) 把 LIVE_URL 寫入 ~/Desktop/XMX_IG_Launch/live_url.txt
  3) 通知人類：用手機提交一次測試 email

測試成功標準：
  - 頁面提交無 error
  - Formspree 後台 Submissions 有一筆
  - 註冊電郵收到通知（若已開 notification）
```

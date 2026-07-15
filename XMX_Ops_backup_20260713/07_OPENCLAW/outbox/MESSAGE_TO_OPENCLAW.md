# 貼畀 OpenClaw 的訊息（複製全文）

```
OC-002 收到，做得好。

XMX_Ops 不在你本機預設路徑——它在 Arena 產出。
人類會下載 XMX_Ops.zip 並解壓到：

  ~/Desktop/XMX_Ops
或
  ~/XMX_Ops

解壓後請執行：

  export XMX_ROOT=~/Desktop/XMX_Ops   # 按實際路徑改
  test -f "$XMX_ROOT/02_WAITLIST/site/index.html" && echo OK_WAITLIST
  test -f "$XMX_ROOT/03_CONTENT/prompts/AI_VIDEO_PROMPTS.md" && echo OK_PROMPTS

然後：
1) OC-001：部署 $XMX_ROOT/02_WAITLIST/site/index.html
   - 先把 form action 裡 YOUR_FORM_ID 換成 Formspree/Getform
   - Netlify Drop / Cloudflare Pages / 任何靜態託管
2) 把 LIVE_URL 寫回 ~/Desktop/XMX_IG_Launch/ 一個 live_url.txt
3) OC-003：用 AI_VIDEO_PROMPTS.md 出 R01–R07（若無影片 API 就 mark blocked）

未解壓 zip 前不要說「找不到專案就重建空殼」——內容已在 zip 內。
```

# 貼畀 OpenClaw — Waitlist 對齊官方站 CSS 家族

```text
TASK: Align waitlist site to official XMX store design family (Xiaomi-style).

OFFICIAL (parent brand site):
  https://xmaxtemplate.vercel.app/zh-TW
  - White background, black geometric logo SVG
  - Fixed white header h-16
  - Black pill CTAs
  - system-ui typography
  - Ecommerce nav (智能家居 / 智能個人 / 商店 / 支援)

WAITLIST (child page) MUST MATCH that family — NOT dark cyber theme:
  https://site-lime-rho-47.vercel.app/

NEW FILES (from Arena zip XMX_Ops):
  02_WAITLIST/site/index.html          ← redesigned light theme
  02_WAITLIST/site/assets/xmx-logo-black.svg
  02_WAITLIST/site/assets/xmx-logo-white.svg
  01_BRAND/WEB_DESIGN_FAMILY.md

DEPLOY (critical):
1) Deploy the WHOLE folder site/ (html + assets/), not only index.html
2) Vercel: set root to 02_WAITLIST/site OR upload folder contents
3) Confirm logo loads: /assets/xmx-logo-black.svg
4) Confirm form still posts to https://formspree.io/f/xzdnpwnj
5) Update live_url.txt
6) Visual QC vs official homepage side-by-side:
   - white bg
   - same logo SVG style
   - black pill primary button
   - header links back to xmaxtemplate.vercel.app

DO NOT revert to dark #0e0e0f full-page waitlist skin.
```

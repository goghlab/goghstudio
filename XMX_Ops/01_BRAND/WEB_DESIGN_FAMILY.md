# XMX Web Design Family — 官網 + Waitlist 統一（小米式大品牌）

**Version:** 1.0 · 2026-07-13  
**官方站（母站）：** https://xmaxtemplate.vercel.app/zh-TW  
**Waitlist 子頁：** https://site-lime-rho-47.vercel.app/  

目標：像 **Xiaomi / 小米** 一樣——主站與子頁屬 **同一設計家族**，用戶感覺係同一個品牌，唔係兩個隨機 landing。

---

## 1. 角色分工

| 站 | 角色 | 技術 |
|----|------|------|
| `xmaxtemplate.vercel.app` | **品牌主站 / 商店**（Next.js） | 白底、黑 logo、電商導航 |
| `site-lime-rho-47.vercel.app` | **產品 Waitlist 子頁** | 同一 CSS 家族（靜態 HTML） |

長期理想（小米式）：
```
xmx.com/                    主站
xmx.com/translate           waitlist 或產品頁（同 domain）
```
短期：兩個 Vercel 專案，但 **視覺 tokens + header/footer 語言必須一致**。

---

## 2. 官方站抽取的設計 Tokens（必須共用）

| Token | 值 | 用途 |
|-------|-----|------|
| 背景 | `#FFFFFF` | 頁面底 |
| 淺底區塊 | `#F5F5F5` / `#F9FAFB` | 卡片區、表單區 |
| 主文字 | `#0A0A0A` | 標題 |
| 次文字 | `rgba(0,0,0,0.72)` | 內文 |
| 弱文字 | `rgba(0,0,0,0.48)` | 說明 |
| 線 | `#E5E5E5` | 分隔 |
| 主 CTA | 黑底白字 pill | 加入 / 購買 |
| 次 CTA | 白底 + 灰邊框 pill | 次要 |
| Header | 固定白底 `h-16` (64px) | 全站 |
| Logo | `/images/xmx-logo-black.svg`（官方 SVG） | 高 10–11px |
| 字體 | system-ui / -apple-system / Segoe UI / PingFang TC | 與主站一致 |
| 圓角 | 12–20px 卡片；pill 按鈕 | |
| 導航字 | 13–14px semibold tracking-wide | |

**禁止 Waitlist 再用：** 全頁黑底 `#0e0e0f` 作默認品牌頁（會同主站斷裂）。

---

## 3. 共用組件語言

1. **Header**：左 logo → 中 nav → 右 語言 / CTA  
2. **Hero**：置中大標 + lead + pill CTAs（似小米產品首屏簡潔版）  
3. **卡片網格**：淺灰底 + 白/淺卡片  
4. **表單**：白卡 + 黑提交鈕  
5. **Footer**：黑底、多欄連結回主站  

Waitlist 必須連回：
- 官網首頁  
- 商店 / 智能個人  
- 支援 / FAQ  

---

## 4. Logo 源

**網頁統一用官方 SVG：**
```
01_BRAND/logo/master/xmx-logo-black.svg
02_WAITLIST/site/assets/xmx-logo-black.svg
```
來源：`https://xmaxtemplate.vercel.app/images/xmx-logo-black.svg`  
（對稱 X 交叉 + 幾何 M，與官網 100% 相同）

---

## 5. 部署注意

Waitlist 必須部署 **整個資料夾**：
```
02_WAITLIST/site/
  index.html
  assets/xmx-logo-black.svg
  assets/xmx-logo-white.svg
```
只丟 `index.html` 會令 logo 404。

---

## 6. OpenClaw / 開發者規則

- 新子頁先抄本 tokens，再寫內容  
- 改色先改 tokens，唔好每頁各自 `#1a1a1a`  
- QC-Visual：與官網並排截圖，header/logo/按鈕家族要「一眼同一間公司」  

# XMX CANONICAL LOGO — 唯一正確標誌（強制）

**生效日期：** 2026-07-13  
**狀態：** 所有設計／網頁／IG／工廠絲印 **必須** 使用本檔指定資產。  
**禁止：** 用 Inter／系統字打出「XMX」當 logo；禁止舊海報裡圓角/字距不同嘅假字標。

---

## 1. 官方母檔（Master files）

| 檔案 | 用途 |
|------|------|
| `master/xmx-logo-black.png` | 原檔：黑標誌／淺底 |
| `master/xmx-logo-white.png` | 原檔：白標誌／深底 |
| `master/xmx_logo_black_transparent.png` | 透明底黑標（疊圖用） |
| `master/xmx_logo_white_transparent.png` | 透明底白標（疊圖用） |
| `master/xmx_avatar_dark.png` | IG／App 頭像（深底）**首選** |
| `master/xmx_avatar_light.png` | 淺底頭像 |
| `master/xmx_logo_header_white.png` | 網站 nav（深色站） |
| `master/xmx_logo_header_black.png` | 淺色物料 header |
| `master/favicon-32.png` / `apple-touch-icon.png` | 網站 icon |
| `master/xmx_og_waitlist.png` | 分享 OG 圖 |

**Ready-to-copy 副本：**  
`08_OUTPUTS/ready_to_post/brand_assets/`（同上檔名）

人類原始上傳 = 法律／設計真理來源：
- `xmx-logo-black.png`
- `xmx-logo-white.png`

---

## 2. 標誌結構（認呢個，唔好改）

水平三組幾何形，**同一套尖角系統**：

```
[ 尖角 X ]   [ 幾何 M ]   [ 尖角 X ]
   ><            M            ><
```

- **X：** 由兩組尖角組成，似 `>` + `<` 相交，**尖、硬、對稱**  
- **M：** 方正外框感 + 中間 V 形尖底（**唔係**圓潤 sans「M」）  
- **字距：** 三組之間有明確空隙，整體扁長橫式  
- **線條：** 粗實色塊幾何，**唔係**幼線 Inter 字重 300 嘅文字  

若某物料上嘅 logo 睇落似「普通英文字 XMX」→ **錯，立即換母檔**。

---

## 3. 使用規則

| 場景 | 用邊個檔 |
|------|----------|
| 深色背景（網站、海報黑底） | **白標** `xmx_logo_white_*` |
| 淺色背景 | **黑標** `xmx_logo_black_*` |
| IG 頭像 | `xmx_avatar_dark.png` |
| 產品絲印／鐳射 | 按殼色：深殼用淺標／同色暗紋；以母檔矢量化後再出廠（可請廠描） |
| 最小高度 | 螢幕 ≥ 16px 高；印刷 logo 高 ≥ 5 mm |
| 保護空間 | 四邊 ≥ logo 高度的 0.5× |
| 變形 | **禁止** 拉闊、改色漸變、加陰影、改尖角圓角 |

### 允許顏色
- 純黑 `#000000` / 近黑 `#1A1A1A`  
- 純白 `#FFFFFF`  
- 單色壓印可跟殼色（香檳／銀）**但外形必須同母檔**

### 禁止
- 藍色／漸變 logo  
- 自己用字體重打 XMX  
- 舊渲染圖入面唔同比例嘅「XMX」字  

---

## 4. 已修正／必須同步

| 物料 | 狀態 |
|------|------|
| Waitlist `index.html` nav | ✅ 已嵌入官方白標 PNG（data URI） |
| Favicon | ✅ 官方幾何標衍生 |
| Brand pack 文字描述 | 見 `BRAND_PACK` 更新 |
| OpenClaw / 本機 | 必須重新解壓最新 `XMX_Ops.zip` 或複製 `brand_assets/` |
| 產品渲染圖（hero 海報） | 若字標唔同母檔 → 再出圖時 **合成正確 logo**，唔好用圖內假字 |

---

## 5. 給 OpenClaw / 任何 Agent 的硬規則

```
CANONICAL_LOGO = XMX_Ops/01_BRAND/logo/master/
Never typeset "XMX" in Inter/Arial as the logo.
Always paste from master PNG (black or white version).
IG avatar = xmx_avatar_dark.png
Waitlist header = white transparent/header logo on dark.
If unsure, open xmx-logo-black.png and match exactly.
```

---

## 6. 工廠絲印一句

> 請按提供之 XMX 幾何圖標（黑白 PNG）進行鐳射／絲印，圖標為左右尖角 X + 中間幾何 M 橫向組合，禁止使用普通字體代替。

---

## 7. 檢查清單（每次發佈前）

- [ ] 用嘅係 master PNG，唔係自己打字  
- [ ] 深底白標／淺底黑標  
- [ ] 無拉伸  
- [ ] IG 頭像 = `xmx_avatar_dark.png`  
- [ ] 網站 logo 同 IG 同一套幾何  

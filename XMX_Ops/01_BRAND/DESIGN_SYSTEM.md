## 0. 絕對規則（任何 Agent / 人類 / 工廠）

| # | 規則 |
|---|------|
| R1 | **只有 GOLDEN 檔** 可以代表 XMX logo。禁止用字體打「XMX」。 |
| R2 | **禁止重新發明** X 或 M 幾何（唔好再用程式「估」尖角）。新尺寸 = **只准 scale / 改底色 / 改黑白**。 |
| R3 | 任何輸出（IG、網站、海報、包裝、工廠絲印）發佈前必須過 **QC Agent**。 |
| R4 | QC 唔過 = **唔准 deploy、唔准 post、唔准交廠**。 |
| R5 | 改 logo 外形 = **要人類書面批准** + 更新 GOLDEN + 新 version number。 |

---

## 1. Logo 結構（認呢個）

橫向三組，中間有間距：

```
  [ > < ]     [  M  ]     [ > < ]
   左 X         字母 M       右 X
```

### 1.1 X（左右各一）
- 形態為 **`>` + `<`** 成對，組成一個 X 單元  
- **上臂同下臂必須對稱**（水平中線鏡像）  
- 左右兩半開合角度、線粗、高度 **完全跟 GOLDEN**  
- 唔好變成「×」交叉粗斜槓（除非日後人類批准新 GOLDEN）

### 1.2 M
- 幾何 M：左右直柱 + 中間 V 形連接  
- 比例、粗幼、尖角 **只跟 GOLDEN**  
- 禁止改成圓角 M 或普通字體 M  

### 1.3 整體
- 扁長橫式 wordmark  
- 三組之間 **固定相對間距**（隨整體 scale，唔好手動亂移）  
- 顏色只允許：
  - 黑 `#000000` on 淺底  
  - 白 `#FFFFFF` on 深底  
  - 或同色暗紋壓印（外形仍 = GOLDEN）

---

## 2. 檔案層級（Source of truth）

```
01_BRAND/logo/
  GOLDEN/                          ← 不可亂改
    GOLDEN_logo_black_transparent.png
    GOLDEN_logo_white_transparent.png
    GOLDEN_META.json               ← sha256 指紋
    GOLDEN_REFERENCE_BOARD.png     ← 一眼對照板
  master/                          ← 由 GOLDEN 衍生（可覆蓋重產）
  CANONICAL_LOGO_SPEC.md
DESIGN_SYSTEM.md                   ← 本檔
qc/
  QC_CHECKLIST.md
  QC_AGENT_SOP.md
  run_logo_qc.py                   ← 自動檢查腳本
```

**發佈副本（永遠同 master 同步）：**  
`08_OUTPUTS/ready_to_post/brand_assets/`

---

## 3. 衍生規則（准做 / 唔准做）

### ✅ 准
- 按比例放大縮小（LANCZOS）  
- 黑標 ↔ 白標（反相 alpha，形狀不變）  
- 放上固定底色：`#121212` / `#1A1A1A` / `#F5F5F3` / `#FFFFFF`  
- 製成 avatar 1024、header 480、OG 1200×630 等 **固定尺寸表**  

### ❌ 不准
- 手繪 / AI 重畫 logo  
- 改變 X 上下比例、「拉高」上半  
- 改變 M 寬高比  
- 加陰影、漸變、描邊、3D  
- 用 Inter / Arial / Helvetica 寫 XMX  
- 用舊海報入面唔同款字標  
- 隨意 crop 切走 X 一半  

---

## 4. 固定尺寸表（Brand Kit）

| 資產 | 尺寸 | 底 | Logo 寬佔比 | 檔名 |
|------|------|-----|-------------|------|
| IG / App 頭像深 | 1024² | `#121212` | 68% | `xmx_avatar_dark.png` |
| IG 頭像淺 | 1024² | `#F5F5F3` | 68% | `xmx_avatar_light.png` |
| Icon | 512² | `#121212` | 68% | `xmx_icon_512.png` |
| Wordmark 黑 | 寬 600 | 白 | — | `xmx-logo-black.png` |
| Wordmark 白 | 寬 600 | 黑 | — | `xmx-logo-white.png` |
| Header 黑 | 寬 480 | 透明 | — | `xmx_logo_header_black.png` |
| Header 白 | 寬 480 | 透明 | — | `xmx_logo_header_white.png` |
| OG | 1200×630 | `#0E0E0F` | 48% | `xmx_og_waitlist.png` |
| Favicon | 32² | `#121212` | 78% | `favicon-32.png` |

**垂直置中：** logo 喺畫布必須光學垂直置中（QC 量 bbox 中心 ≈ 畫布中心 ±2%）。

---

## 5. 顏色系統

| Token | Hex | 用途 |
|-------|-----|------|
| `bg.dark` | `#0E0E0F` / `#121212` | 網站、深海報 |
| `bg.card` | `#161617` | 卡片 |
| `bg.light` | `#F5F5F3` | 淺底、淺頭像 |
| `text.primary` | `#F3F3F3` | 深底字 |
| `text.muted` | `#9A9A9A` | 次要 |
| `champagne` | `#C4B5A0` | 點綴（**唔用喺 logo**） |
| `signal` | `#2B6CFF` | UI 波形（**唔用喺 logo**） |
| `logo.black` | `#000000` | 標誌 |
| `logo.white` | `#FFFFFF` | 標誌 |

---

## 6. 字體（只用於內文，唔係 logo）

| 用途 | 字體 | 字重 |
|------|------|------|
| UI / 網頁 | Inter, system-ui | 400–600 |
| 大標 | Inter | 600 |
| 小字 / eyebrow | Inter | 500 + letter-spacing |

**Logo 永遠係 PNG/SVG 圖標，唔係字體排版。**

---

## 7. 語氣同文案（簡）

- 冷靜、高級、短句  
- 產品：XMX Translate / T1  
- 禁止：空氣全息已量產、醫療宣稱、假出貨  

完整 copy 見 `01_BRAND/copy/BRAND_PACK.md`。

---

## 8. 產品視覺

- 產品渲染可繼續用黑／香檳／銀機  
- **機上 logo 絲印** 必須同 GOLDEN 外形一致（工廠用 vector 描母檔）  
- 海報角落 brand mark = `header_white` 或 `header_black`  

---

## 9. Versioning

| 版本 | 變更 |
|------|------|
| 1.x | 實驗／字體／錯誤重畫（作廢） |
| **2.0.0** | 鎖定用戶批准 avatar 幾何為 GOLDEN；只准衍生 |

改 GOLDEN → version **2.1.0+** 並更新 `GOLDEN_META.json` sha256。

---

## 10. 相關 Agent

| Agent | 職責 |
|-------|------|
| **Brand** | 跟本系統出物料 |
| **QC-Logo** | 形狀／檔案／對稱／一致 |
| **QC-Visual** | 版面、對比、安全距 |
| **QC-Copy** | 文案同產品宣稱 |
| **Orchestrator** | QC 全過先准發佈 |

詳見 `qc/QC_AGENT_SOP.md`。


## 11. GOLDEN v3 — X height rule (CRITICAL)

The **upper half of every X must be the same height as the lower half**.
Construction: each X is `>` + `<` chevrons whose arms are **exact mirrors** across the global horizontal midline.
If any export looks top-heavy or bottom-heavy → **FAIL QC** → rebuild from `GOLDEN/GOLDEN_logo_black_transparent.png` only (scale/composite), never freehand.

**OpenClaw / Arena / human:** Waitlist, IG, ads, packaging must all use files from:
- `01_BRAND/logo/GOLDEN/`
- `01_BRAND/logo/master/`
- `08_OUTPUTS/ready_to_post/brand_assets/`

Do not use any older logo zip from before v3.

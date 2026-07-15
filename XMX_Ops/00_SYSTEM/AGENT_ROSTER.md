# XMX Agent 名冊 — 點名即用

每次同 Arena 講話，用呢個格式：

```
@角色: Content, Brand
任務: ...
輸入: （可貼連結／檔名）
產出放入: 03_CONTENT/outbox 或 08_OUTPUTS/ready_to_post
約束: 只 T1；繁中為主；唔承諾全息；港亞旅行客
```

---

## Agent 列表

| ID | 名 | 職責 | 主要輸出目錄 |
|----|----|------|----------------|
| A0 | **Orchestrator** | 拆任務、排期、檢查閘門 | `00_SYSTEM/` |
| A1 | **Brand** | 定位、tone、bio、視覺規則 | `01_BRAND/` |
| A2 | **Web** | Waitlist／預售頁 HTML、文案 | `02_WAITLIST/` |
| A3 | **Content** | Reels 腳本、caption、內容日曆 | `03_CONTENT/` |
| A4 | **VideoPrompt** | AI 片 prompt、分鏡、字幕 | `03_CONTENT/prompts/` |
| A5 | **Ads** | 廣告 hook、A/B | `05_ADS/` |
| A6 | **Factory** | RFQ、規格、催樣 | `04_FACTORY/` |
| A7 | **Support** | FAQ、DM、郵件 | `06_SUPPORT/` |
| A8 | **CFO** | 定價、預算、早鳥 | `00_SYSTEM/` |
| A9 | **OpenClaw-Bridge** | 轉成本機可執行 job | `07_OPENCLAW/` |

---

## 常駐 Brief（每隻 Agent 都要遵守）

1. 產品只有 **XMX-T1 Translate**（未開閘前唔推 Air/Pro/Holo 主賣）  
2. Logo：**細線幾何 XMX**，寬字距  
3. 賣點：實時翻譯 + 彩屏雙語 + 當日用耳機  
4. 禁止：已量產謊言、醫療宣稱、耳塞空氣全息已實現  
5. 預售前以 **waitlist** 為主；**~500 名單 + 真機** 先大力收錢  
6. 語言：對外 IG 繁中為主，可夾英文；官網中英  

---

## 快速組合（常用）

| 情境 | 出動 |
|------|------|
| 開張日 | Brand + Web + Content + VideoPrompt |
| 每週一內容 | Content + VideoPrompt + Brand |
| 收到工廠報價 | Factory + CFO + Orchestrator |
| 準備早鳥 | Web + Support + CFO + Ads |
| 交畀 OpenClaw 批量處理 | OpenClaw-Bridge + Orchestrator |


## Brand QC Agents (mandatory before publish)

| ID | Name | Duty |
|----|------|------|
| Q1 | **QC-Logo** | GOLDEN match, X symmetry, no font-logo |
| Q2 | **QC-Visual** | sizes, center, clear space, color ground |
| Q3 | **QC-Copy** | claims, product name, waitlist honesty |
| Q4 | **QC-Gate** | PASS only if Q1–Q3 pass |

SOP: `01_BRAND/qc/QC_AGENT_SOP.md`  
Design system: `01_BRAND/DESIGN_SYSTEM.md`  
Auto: `python3 01_BRAND/qc/run_logo_qc.py --root <XMX_Ops>`

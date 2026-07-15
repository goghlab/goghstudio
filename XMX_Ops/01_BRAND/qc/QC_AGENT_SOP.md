# QC AGENTS — SOP（每次出料必跑）

## 多 Agent 編制（Brand QC 線）

```
你 / Orchestrator
       │
       ├─ Brand Agent          產出（只用 GOLDEN 衍生）
       │
       ├─ QC-Logo Agent        標誌形狀、檔案、對稱、指紋
       ├─ QC-Visual Agent      版面、安全距、對比、尺寸表
       ├─ QC-Copy Agent        文案、宣稱、語言
       └─ QC-Gate Agent        彙總 PASS/FAIL，決定可唔可以 ship
```

---

## 何時必須跑 QC

- 新 IG 圖 / 頭像 / 9 格  
- Waitlist 或官網改版  
- 海報、廣告、包裝  
- 交工廠絲印檔  
- OpenClaw 部署前  
- Arena 批量產圖後  

**一句：未見 `QC_GATE: PASS` 就唔好公開。**

---

## Agent 1 — QC-Logo（最高優先）

### 任務
確認所有 logo 使用同 **GOLDEN** 一致。

### 必檢
1. 檔案是否來自 `GOLDEN/` 或 `master/` 最新衍生？  
2. 有無「字體版 XMX」？  
3. X 是否 `>` + `<` 結構？  
4. **X 上半同下半是否均勻**（目視 + 腳本）？  
5. M 是否同 reference board？  
6. 黑白有無反錯底？  
7. `run_logo_qc.py` 是否 PASS？  

### 輸出格式
```
QC-Logo: PASS | FAIL
Fails:
- ...
Evidence: (檔名 / 截圖說明)
```

### FAIL 時
- 阻止 deploy  
- 退回 Brand：只用 `rebuild_from_golden` 流程，禁止手繪  

---

## Agent 2 — QC-Visual

### 必檢
1. 尺寸是否符合 DESIGN_SYSTEM 尺寸表？  
2. Logo 垂直水平置中（±2%）？  
3. 保護空間 ≥ 0.5× logo 高度？  
4. 深底用白標、淺底用黑標？  
5. 有無亂加陰影／漸變 logo？  
6. 同屏有無兩款唔同 logo？  

### 輸出
```
QC-Visual: PASS | FAIL
```

---

## Agent 3 — QC-Copy

### 必檢
1. 產品名 XMX Translate / T1 一致  
2. 無空氣全息量產宣稱  
3. Waitlist 階段無假「現貨發售」  
4. 中英日韓語言描述唔誇大  

### 輸出
```
QC-Copy: PASS | FAIL
```

---

## Agent 4 — QC-Gate（放行）

```
QC_GATE: PASS
only if QC-Logo=PASS AND QC-Visual=PASS AND QC-Copy=PASS

else QC_GATE: FAIL — list blockers
```

Orchestrator / OpenClaw：
- PASS → 可 post / deploy  
- FAIL → 只准改到過為止  

---

## 每次產料標準對話（貼 Arena）

```
@角色: Brand
任務: 出 [物料]
約束: DESIGN_SYSTEM v2；只用 GOLDEN 衍生

@角色: QC-Logo, QC-Visual, QC-Copy, QC-Gate
任務: 審核上述產出
輸入: 檔案路徑 + GOLDEN_REFERENCE_BOARD.png
產出: PASS/FAIL 報告寫入 01_BRAND/qc/reports/
```

---

## OpenClaw 部署前檢查

```bash
python3 ~/Desktop/XMX_Ops/01_BRAND/qc/run_logo_qc.py \
  --root ~/Desktop/XMX_Ops
# 必須 exit code 0
```

---

## 人類快速目視（10 秒）

打開 `GOLDEN_REFERENCE_BOARD.png`，同新圖並排：
- X 尖角方向一唔一樣？  
- M 中間 V 一唔一樣？  
- 會唔會一邊 X 上下唔對稱？  

有懷疑 = FAIL = 重出。

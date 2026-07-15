# 給 OpenClaw：XMX_Ops 同步說明

## 真相來源

`XMX_Ops` **係由 Arena Agent 建立**，位置在 **Arena workspace**：

```
/home/user/XMX_Ops/
```

**唔係** 預設已經喺你本機 Desktop。  
**亦未** 自動有 Git remote（除非人類另外 push）。

---

## OpenClaw 應揀邊個選項？

| 選項 | 答案 |
|------|------|
| A 本機路徑 | 人類下載 zip 後，例如 `~/Desktop/XMX_Ops` 或 `~/XMX_Ops` |
| B Git | 除非人類提供 URL，否則 **暫時無** |
| C Arena 創建 | **✅ 就係呢個** — 檔案已在 Arena；要 **下載 zip 同步** |
| D 未創建 | 否，已創建 |

---

## 人類／OpenClaw 同步步驟

1. 從 Arena 下載 **`XMX_Ops.zip`**（與本說明同批產出）  
2. 解壓到本機固定路徑，建議：

```text
~/XMX_Ops
```

或

```text
~/Desktop/XMX_Ops
```

3. OpenClaw 之後 **只認呢個路徑**，例如：

```text
ROOT=~/XMX_Ops
```

4. 驗證：

```bash
ls $ROOT/02_WAITLIST/site/index.html
ls $ROOT/03_CONTENT/prompts/AI_VIDEO_PROMPTS.md
ls $ROOT/08_OUTPUTS/ready_to_post/
ls $ROOT/07_OPENCLAW/jobs_queue.md
```

5. 再跑 jobs：OC-001（deploy）、OC-002（整理 IG）、OC-003（出片）…

---

## 若 OpenClaw 堅持要 Git

人類可在本機：

```bash
cd ~/XMX_Ops
git init
git add .
git commit -m "XMX_Ops G0 from Arena"
# 可選：gh repo create + push，再把 URL 貼返 Arena / OpenClaw
```

---

## Job 依賴

| Job | 需要本機已有 |
|-----|----------------|
| OC-001 | `02_WAITLIST/site/index.html` |
| OC-002 | `08_OUTPUTS/ready_to_post/`（可先建空再copy） |
| OC-003 | `03_CONTENT/prompts/AI_VIDEO_PROMPTS.md` |
| OC-004 | `02_WAITLIST/email/sequence.md` |

**未同步 zip 前：** 只可做「建立空資料夾」；**唔好** 當內容已齊。

---

## 回覆人類一句模板（OpenClaw 可用）

```
已理解：XMX_Ops 由 Arena 產出。請下載 XMX_Ops.zip 解壓到 ~/XMX_Ops。
解壓完成後回覆「synced」，我再執行 OC-001～OC-003。
```

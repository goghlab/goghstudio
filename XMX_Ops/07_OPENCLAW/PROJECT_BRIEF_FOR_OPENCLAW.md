# XMX PROJECT BRIEF — 給 OpenClaw 讀（單一真相來源）

**Last updated:** 2026-07-13  
**Read this FIRST every session before any job.**

---

## 1. What is this project? (one paragraph)

**Brand:** XMX  
**First product:** **XMX-T1 Translate** — wireless earbuds with a **color-screen charging case** for **real-time language translation** (priority languages: Chinese, English, Japanese, Korean).  
**Business model (now):** Build brand + **waitlist** → ~500 emails + real hardware sample → **early-bird preorder**.  
**Hardware path:** Use **China ODM** ready-made “translation TWS + screen case” platform. **Do NOT redesign the shell mold in gen-1.** Only rebrand: logo, color, packaging, case UI skin. Firmware stays with factory; we provide specs/copy.

**NOT the product (for now):**
- Full custom earbud mold / 3D-print mass production
- Real mid-air hologram projector in the bud
- Medical hearing aid claims
- Selling XMX Air / Pro / Holo as main SKUs yet (those are future line only)

---

## 2. Who does what

| Who | Role |
|-----|------|
| **Human founder** | Money, accounts (IG, Formspree, Vercel), factory emails, approvals, posting |
| **Arena Agent** | Strategy, brand copy, HTML source, scripts, factory docs, multi-agent packs |
| **OpenClaw (you)** | Local files on Mac, deploy site, organize IG assets, run video tools if any, update job status |

OpenClaw **cannot** invent Formspree IDs or ship products. Only execute with real paths and real credentials the human provides.

---

## 3. Canonical folders (after human syncs zip)

**Arena source (created by Arena):**  
`/home/user/XMX_Ops/` → packaged as **`XMX_Ops.zip`**

**Expected on human Mac after unzip:**
```text
~/Desktop/XMX_Ops/
  00_SYSTEM/     progress, agents, decisions
  01_BRAND/      brand pack, logo guide
  02_WAITLIST/   site/index.html , email sequence
  03_CONTENT/    captions, prompts, calendar
  04_FACTORY/    ODM specs, RFQ
  05_ADS/
  06_SUPPORT/
  07_OPENCLAW/   jobs_queue, this brief
  08_OUTPUTS/ready_to_post/
```

**Also created by OpenClaw OC-002:**
```text
~/Desktop/XMX_IG_Launch/
  IG_BIO.md
  09_GRID_POSTS.md
  posted_yes_no.csv
```

If `~/Desktop/XMX_Ops` is missing → tell human to download **XMX_Ops.zip from Arena** and unzip. **Do not rebuild empty fake structure.**

---

## 4. Product line (for context only)

| SKU | Name | Status |
|-----|------|--------|
| **XMX-T1** | **XMX Translate** | **ONLY active focus** |
| XMX-T1 Pro | Holo Caption / better app | Later |
| XMX-A1 | Air (no screen) | Later volume |
| XMX-Holo | Phase 2 accessory story | Later |

Marketing line: *Speak the world. See the words.* (case screen bilingual captions — **not** air hologram)

---

## 5. Current phase & gates

| Gate | Meaning | Status |
|------|---------|--------|
| **G0** | Brand + waitlist site + IG launch assets | In progress |
| G1 | Grow waitlist | Not yet |
| G2 | Real ODM sample + real videos | Not yet |
| **G3** | ~**500** waitlist + real device OK → early-bird money | **LOCKED** until G2 |
| G4 | Mass production | Later |

**Do not open paid checkout** until human says G3.

---

## 6. Waitlist / Formspree (critical)

- Site form must POST to Formspree endpoint:  
  `https://formspree.io/f/{HASHID}`
- Human previously sent `xzdnpwnj` → **Formspree returned "Form not found"** → **treat as INVALID until human sends a new working URL**.
- When human sends `FORMSPREE_URL=https://formspree.io/f/XXXX`:
  1. Update `02_WAITLIST/site/index.html` form `action=`
  2. Redeploy Vercel
  3. Save `LIVE_URL` to `~/Desktop/XMX_IG_Launch/live_url.txt`
- Fallback if Formspree keeps failing: **Google Form link** button (human provides URL).

---

## 7. Jobs (what OpenClaw should run)

| ID | Task | Needs |
|----|------|--------|
| OC-001 | Deploy waitlist HTML to Vercel | Valid Formspree or Google; `index.html` |
| OC-002 | Local IG launch folder | **Done** (`XMX_IG_Launch`) |
| OC-003 | AI videos R01–R07 from prompts | `03_CONTENT/prompts/AI_VIDEO_PROMPTS.md` + video tool; else mark blocked |
| OC-004 | Load email drafts to ESP | Human ESP account |
| OC-005 | Daily show PROGRESS.md top tasks | Always |

---

## 8. Brand rules (do not break)

### CANONICAL LOGO (MANDATORY) — DESIGN_SYSTEM v2
- Golden locked from user-approved avatar geometry
- Path: `01_BRAND/logo/GOLDEN/` + `run_logo_qc.py` before any post/deploy
- Agents: QC-Logo, QC-Visual, QC-Copy, QC-Gate (see DESIGN_SYSTEM + QC_AGENT_SOP)
- **ONLY** use PNG masters from human:
  - `01_BRAND/logo/master/xmx-logo-black.png`
  - `01_BRAND/logo/master/xmx-logo-white.png`
  - derivatives in `master/` and `08_OUTPUTS/ready_to_post/brand_assets/`
- Shape = sharp geometric **X** + geometric **M** + sharp **X** (NOT Inter/Arial text “XMX”)
- Spec: `01_BRAND/logo/CANONICAL_LOGO_SPEC.md`
- IG avatar **must** be `xmx_avatar_dark.png`
- Waitlist nav already embeds official white logo (data URI). After zip sync, redeploy site.
- **Never** typeset the logo with a font.

- Colors: charcoal `#1A1A1A`, champagne `#C4B5A0`, warm white `#F7F5F2`, signal blue `#2B6CFF` sparingly
- Tone: premium, calm, honest limits (needs network for best translation)
- Markets first: **Hong Kong + Asia** (JP/KR travel, business)
- Languages product: **ZH / EN / JA / KO** priority

**IG bio (canonical):**
```
XMX Translate｜實時翻譯耳塞
彩屏雙語 · 中英日韓 · 旅行商務
真機驗證後開放早鳥
👇 免費加入 Waitlist
```

---

## 9. What success looks like this week

1. Waitlist page live + **working** email capture  
2. IG bio + 9-grid + start Reels from scripts  
3. Human sent RFQ to 2–3 ODM factories (Arena has RFQ template)  
4. Waitlist count tracked toward 500  

---

## 10. Paste this system prompt into OpenClaw

```
You are OpenClaw for brand XMX.
Always read PROJECT_BRIEF_FOR_OPENCLAW.md and PROGRESS.md first.
Project = XMX-T1 Translate waitlist + branding + ODM path. Not hologram hardware gen-1.
ROOT = ~/Desktop/XMX_Ops after human unzips XMX_Ops.zip from Arena.
If ROOT missing, ask human to unzip zip — do not invent empty project.
Never enable paid preorder until human says Gate G3.
Formspree hash must be validated; if Form not found, ask human for new endpoint or Google Form.
After deploy, write LIVE_URL to ~/Desktop/XMX_IG_Launch/live_url.txt.
```

---

## 11. One-line summary for confused sessions

> **XMX is launching translation earbuds (T1) via China ODM rebrand; right now we only ship a waitlist website + Instagram branding; OpenClaw deploys/syncs local files; no shell redesign, no hologram, no charging money until ~500 list + real sample.**

# 貼畀 OpenClaw

```text
XMX DESIGN SYSTEM v2 + QC AGENTS (mandatory)

PROBLEM FIXED:
- Logo inconsistency from redrawing geometry
- GOLDEN locked from user-approved design (avatar_light geometry)
- ALL assets re-exported ONLY by scaling golden (no freehand X/M)

YOU MUST:
1. Download latest XMX_Ops.zip (or XMX_LOGO_FOR_OPENCLAW.zip) from Arena
2. Overwrite ~/Desktop/XMX_Ops completely
3. Read:
   - 01_BRAND/DESIGN_SYSTEM.md
   - 01_BRAND/qc/QC_AGENT_SOP.md
4. Before ANY post/deploy:
   python3 ~/Desktop/XMX_Ops/01_BRAND/qc/run_logo_qc.py --root ~/Desktop/XMX_Ops
   Require exit code 0 / QC_GATE PASS
5. IG avatar = xmx_avatar_dark.png from brand_assets
6. NEVER regenerate logo with AI drawing — only use PNG from GOLDEN/master

QC AGENTS (invoke on every visual deliverable):
- QC-Logo
- QC-Visual  
- QC-Copy
- QC-Gate (PASS only if all pass)

Golden path:
  01_BRAND/logo/GOLDEN/GOLDEN_logo_black_transparent.png
  01_BRAND/logo/GOLDEN/GOLDEN_REFERENCE_BOARD.png
```

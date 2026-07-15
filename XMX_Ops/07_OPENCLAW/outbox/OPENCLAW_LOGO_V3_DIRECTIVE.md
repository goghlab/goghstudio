# OPENCLAW DIRECTIVE — LOGO v3 (MANDATORY)

## Problem
Previous branding used inconsistent / uneven X marks (upper part of X not same height as lower part).

## Fix (Arena 2026-07-13)
GOLDEN logo **v3** rebuilt with **vector-perfect vertical symmetry**:
- Each X = `>` + `<`
- Upper arm height **equals** lower arm height (mirror about horizontal center)
- All brand assets re-exported ONLY from this golden

## You MUST do now

1. **Delete or archive** any old logo copies on Desktop that are not from the new zip.
2. Download from Arena and overwrite:
   - `XMX_Ops.zip`  OR  `XMX_LOGO_FOR_OPENCLAW.zip`
3. Force paths:

```bash
# After unzip to ~/Desktop/XMX_Ops
export XMX=~/Desktop/XMX_Ops
test -f $XMX/01_BRAND/logo/GOLDEN/GOLDEN_logo_black_transparent.png && echo GOLDEN_OK
test -f $XMX/08_OUTPUTS/ready_to_post/brand_assets/xmx_avatar_dark.png && echo AVATAR_OK

# Sync everywhere OpenClaw uses assets
mkdir -p ~/Desktop/XMX_IG_Launch/brand_assets
cp -f $XMX/08_OUTPUTS/ready_to_post/brand_assets/*.png ~/Desktop/XMX_IG_Launch/brand_assets/
cp -f $XMX/01_BRAND/logo/GOLDEN/*.png ~/Desktop/XMX_IG_Launch/brand_assets/ 2>/dev/null || true

# QC
python3 $XMX/01_BRAND/qc/run_logo_qc.py --root $XMX
```

4. **Waitlist (critical for consistency)**
   - Redeploy **only** `$XMX/02_WAITLIST/site/index.html` from this new zip
   - Confirm page header shows **image logo** (not text "XMX")
   - Form action stays `https://formspree.io/f/xzdnpwnj` unless human changes it
   - Write LIVE_URL to `~/Desktop/XMX_IG_Launch/live_url.txt`

5. **IG**
   - Profile photo = `xmx_avatar_dark.png` from **new** brand_assets only

6. **Never**
   - AI-draw a new XMX logo
   - Typeset XMX in Inter/Arial as the mark
   - Mix old and new logo files

## QC rule for every deliverable
```
@QC-Logo @QC-Gate
Upper X height must equal lower X height.
Only GOLDEN v3 derivatives allowed.
QC_GATE PASS required before deploy/post.
```

## One line
Use GOLDEN v3 PNGs for waitlist + all branding; X top height = X bottom height; redeploy waitlist after sync.

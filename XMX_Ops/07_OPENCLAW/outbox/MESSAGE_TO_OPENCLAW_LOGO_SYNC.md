# 整段貼畀 OpenClaw

```text
LOGO FILES ARE NOT MISSING IN THE PROJECT — YOUR LOCAL XMX_Ops IS STALE.

Arena already has the canonical logos. Human will download one of:
  - XMX_LOGO_FOR_OPENCLAW.zip  (smallest, logos only)
  - XMX_BRAND_ASSETS.zip
  - XMX_Ops.zip (full project, recommended overwrite)

After human puts the zip on Desktop, YOU run:

cd ~/Desktop
# if they downloaded XMX_Ops.zip:
unzip -o XMX_Ops.zip -d ~/Desktop
# ensures:
#   ~/Desktop/XMX_Ops/01_BRAND/logo/master/xmx-logo-black.png
#   ~/Desktop/XMX_Ops/01_BRAND/logo/master/xmx-logo-white.png
#   ~/Desktop/XMX_Ops/01_BRAND/logo/master/xmx_avatar_dark.png
#   ~/Desktop/XMX_Ops/08_OUTPUTS/ready_to_post/brand_assets/

# OR if only logo zip:
mkdir -p ~/Desktop/XMX_Ops/01_BRAND/logo/master
mkdir -p ~/Desktop/XMX_Ops/08_OUTPUTS/ready_to_post/brand_assets
mkdir -p ~/Desktop/XMX_IG_Launch/brand_assets
unzip -o ~/Desktop/XMX_LOGO_FOR_OPENCLAW.zip -d ~/Desktop
cp -f ~/Desktop/XMX_LOGO_FOR_OPENCLAW/*.png ~/Desktop/XMX_Ops/01_BRAND/logo/master/
cp -f ~/Desktop/XMX_LOGO_FOR_OPENCLAW/*.png ~/Desktop/XMX_Ops/08_OUTPUTS/ready_to_post/brand_assets/
cp -f ~/Desktop/XMX_LOGO_FOR_OPENCLAW/*.png ~/Desktop/XMX_IG_Launch/brand_assets/

VERIFY then continue:
test -f ~/Desktop/XMX_Ops/01_BRAND/logo/master/xmx_avatar_dark.png && echo LOGO_OK

Do NOT tell human logos "do not exist" until after fresh unzip.
Do NOT recreate fake text logos.

Then:
- Set IG avatar path reminder to xmx_avatar_dark.png
- Redeploy waitlist if needed (HTML already embeds logo data-URI in latest zip)
```

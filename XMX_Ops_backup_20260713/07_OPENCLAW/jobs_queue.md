# OpenClaw Jobs Queue

## OC-001 Deploy waitlist
```yaml
id: OC-001
title: Deploy XMX waitlist landing page
status: pending
owner: openclaw
inputs:
  - 02_WAITLIST/site/index.html
steps:
  - Host index.html as static site (Netlify drop / Vercel / Cloudflare Pages / local nginx)
  - Wire form to email capture (Formspree / Getform / Google Form embed)
  - Test submit on mobile
outputs:
  - LIVE_URL
  - FORM_PROVIDER
```

## OC-002 IG asset folder
```yaml
id: OC-002
title: Organize IG launch assets for posting
status: pending
owner: openclaw
inputs:
  - 08_OUTPUTS/ready_to_post/
steps:
  - Create local folder Desktop/XMX_IG_Launch
  - Copy captions + scripts
  - Create checklist posted_yes_no.csv
outputs:
  - local_folder_path
```

## OC-003 AI video batch
```yaml
id: OC-003
title: Generate AI videos from prompts
status: pending
owner: openclaw
inputs:
  - 03_CONTENT/prompts/AI_VIDEO_PROMPTS.md
steps:
  - For each prompt, generate clip in your video tool (Runway/Pika/etc if available)
  - Export 9:16 H.264
  - Name R01.mp4 … R07.mp4 into 08_OUTPUTS/ready_to_post/video/
  - Optional: auto-caption in CapCut
outputs:
  - video files
notes: If no video API, mark blocked and human runs prompts manually
```

## OC-004 Email tool
```yaml
id: OC-004
title: Load waitlist email sequence
status: pending
owner: openclaw
inputs:
  - 02_WAITLIST/email/sequence.md
steps:
  - Create audience XMX-Waitlist in ESP (Brevo/Mailchimp)
  - Paste email 1–3 as drafts (do not auto-send until human OK)
outputs:
  - draft campaign links
```

## OC-005 Progress sync
```yaml
id: OC-005
title: Daily progress reminder
status: pending
owner: openclaw
steps:
  - Every morning show 00_SYSTEM/PROGRESS.md top 3 tasks
  - If waitlist count known, update number in PROGRESS.md
```

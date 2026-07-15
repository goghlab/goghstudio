#!/usr/bin/env python3
"""XMX Logo QC — automated checks against GOLDEN master.
Exit 0 = PASS, 1 = FAIL
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

from PIL import Image


def load_gray_mask(path: Path, dark_is_ink: bool = True, thr: int = 128):
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    pixels = im.load()
    mask = Image.new("L", (w, h), 0)
    mp = mask.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a < 20:
                continue
            lum = (r + g + b) / 3
            if dark_is_ink:
                if lum < thr:
                    mp[x, y] = 255
            else:
                if lum > thr:
                    mp[x, y] = 255
    return im, mask


def ink_top_bottom_ratio(mask: Image.Image):
    w, h = mask.size
    mp = mask.load()
    # bbox
    bbox = mask.getbbox()
    if not bbox:
        return None
    x0, y0, x1, y1 = bbox
    mid = (y0 + y1) / 2
    top = bot = 0
    for y in range(y0, y1):
        for x in range(x0, x1):
            if mp[x, y] > 128:
                if y < mid:
                    top += 1
                else:
                    bot += 1
    if bot == 0:
        return None
    return top / bot, top, bot, bbox


def left_third_ratio(mask: Image.Image):
    """Approx left X region = left 30% of ink bbox"""
    bbox = mask.getbbox()
    if not bbox:
        return None
    x0, y0, x1, y1 = bbox
    w = x1 - x0
    # left X roughly first 28% of wordmark
    cut = x0 + int(w * 0.28)
    mp = mask.load()
    mid = (y0 + y1) / 2
    top = bot = 0
    for y in range(y0, y1):
        for x in range(x0, cut):
            if mp[x, y] > 128:
                if y < mid:
                    top += 1
                else:
                    bot += 1
    if bot == 0:
        return None
    return top / bot, top, bot


def center_offset_ratio(mask: Image.Image, canvas_size):
    bbox = mask.getbbox()
    if not bbox:
        return None
    x0, y0, x1, y1 = bbox
    cx = (x0 + x1) / 2
    cy = (y0 + y1) / 2
    W, H = canvas_size
    return abs(cx - W / 2) / W, abs(cy - H / 2) / H


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[2])
    args = ap.parse_args()
    root = args.root
    golden_dir = root / "01_BRAND" / "logo" / "GOLDEN"
    master = root / "01_BRAND" / "logo" / "master"
    meta_path = golden_dir / "GOLDEN_META.json"

    fails = []
    passes = []

    if not meta_path.exists():
        fails.append(f"Missing GOLDEN_META.json at {meta_path}")
    else:
        meta = json.loads(meta_path.read_text())
        passes.append(f"GOLDEN meta loaded sha={meta.get('sha256_black_transparent', '')[:12]}...")

    golden_black = golden_dir / "GOLDEN_logo_black_transparent.png"
    if not golden_black.exists():
        fails.append(f"Missing golden black: {golden_black}")
    else:
        passes.append("Golden black transparent exists")
        _, mask = load_gray_mask(golden_black, True)
        r = left_third_ratio(mask)
        if r is None:
            fails.append("Cannot measure golden left-X symmetry")
        else:
            ratio, top, bot = r
            if abs(ratio - 1.0) > 0.12:
                fails.append(f"GOLDEN left-X top/bottom imbalance ratio={ratio:.3f} (top={top}, bot={bot})")
            else:
                passes.append(f"GOLDEN left-X symmetry OK ratio={ratio:.3f}")

    required = [
        "xmx_avatar_dark.png",
        "xmx_avatar_light.png",
        "xmx-logo-black.png",
        "xmx-logo-white.png",
        "xmx_logo_header_black.png",
        "xmx_logo_header_white.png",
        "xmx_og_waitlist.png",
    ]
    for name in required:
        p = master / name
        if not p.exists():
            fails.append(f"Missing master asset: {name}")
            continue
        passes.append(f"Found {name}")
        im = Image.open(p)
        # avatar center check
        if "avatar" in name:
            if im.size != (1024, 1024):
                fails.append(f"{name} size {im.size} != 1024x1024")
            # mask ink
            dark = "dark" in name
            _, mask = load_gray_mask(p, dark_is_ink=not dark, thr=128 if not dark else 128)
            # for dark avatar ink is white
            if dark:
                # white ink on dark
                im_rgba = im.convert("RGBA")
                w, h = im_rgba.size
                mask = Image.new("L", (w, h), 0)
                mp = mask.load()
                px = im_rgba.load()
                for y in range(h):
                    for x in range(w):
                        r, g, b, a = px[x, y]
                        if (r + g + b) / 3 > 180:
                            mp[x, y] = 255
            off = center_offset_ratio(mask, im.size)
            if off:
                ox, oy = off
                if oy > 0.04:
                    fails.append(f"{name} vertical center offset {oy:.3f} > 0.04")
                else:
                    passes.append(f"{name} centering OK (oy={oy:.3f})")
            r = left_third_ratio(mask)
            if r:
                ratio, top, bot = r
                if abs(ratio - 1.0) > 0.15:
                    fails.append(f"{name} left-X imbalance ratio={ratio:.3f}")
                else:
                    passes.append(f"{name} left-X symmetry OK ratio={ratio:.3f}")

    # brand_assets sync: same names exist
    ready = root / "08_OUTPUTS" / "ready_to_post" / "brand_assets"
    if ready.exists():
        for name in required:
            if not (ready / name).exists():
                fails.append(f"brand_assets missing {name}")
        if not fails:
            passes.append("brand_assets has required files")
    else:
        fails.append("brand_assets directory missing")

    print("=== XMX LOGO QC REPORT ===")
    print(f"Root: {root}")
    for p in passes:
        print(f"  PASS: {p}")
    for f in fails:
        print(f"  FAIL: {f}")
    print("==========================")
    if fails:
        print("QC-Logo: FAIL")
        print("QC_GATE: FAIL")
        return 1
    print("QC-Logo: PASS")
    print("QC_GATE: PASS (logo automated subset)")
    return 0


if __name__ == "__main__":
    sys.exit(main())

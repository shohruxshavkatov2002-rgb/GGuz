#!/usr/bin/env python3
"""Asl BITU logotipini saqlab, tepasiga akademik shapka (ta'lim ramzi) qo'shadi.
Shesternalar, ilon, tayoq, BITU yozuvi - hammasi originaldan, o'zgarmaydi."""
import cairosvg, io
from PIL import Image

DARK = "#2b2a29"
DARK2 = "#3a3937"
RED = "#c02222"

# --- graduation cap on its own transparent canvas ---
CW, CH = 460, 440
cap_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {CW} {CH}" width="{CW}" height="{CH}">
  <!-- mortarboard (flat square board in perspective) -->
  <path d="M230,70 L420,150 L230,230 L40,150 Z" fill="{DARK}"/>
  <path d="M230,80 L398,150 L230,220 L62,150 Z" fill="{DARK2}"/>
  <!-- button -->
  <circle cx="230" cy="150" r="14" fill="{RED}"/>
  <!-- tassel cord -->
  <path d="M230,150 C330,152 402,160 404,184 L404,318"
        stroke="{RED}" stroke-width="9" fill="none" stroke-linecap="round"/>
  <!-- tassel tuft -->
  <rect x="391" y="314" width="26" height="56" rx="12" fill="{RED}"/>
  <circle cx="404" cy="312" r="11" fill="{RED}"/>
</svg>'''

cap_png = cairosvg.svg2png(bytestring=cap_svg.encode(), output_width=CW, output_height=CH)
cap = Image.open(io.BytesIO(cap_png)).convert("RGBA")

# --- original logo ---
orig = Image.open("/home/user/GGuz/assets/bitu-logo.png").convert("RGBA")
OW, OH = orig.size                       # 1340 x 1080

PAD_TOP = 150
canvas = Image.new("RGBA", (OW, OH + PAD_TOP), (0, 0, 0, 0))
canvas.paste(orig, (0, PAD_TOP), orig)

# place cap: head bulb center-x = 668 in original -> + PAD_TOP shift in y
HEAD_CX = 668
cap_cx = 230                              # board center x within cap canvas
ox = HEAD_CX - cap_cx
oy = 2                                    # near very top
canvas.alpha_composite(cap, (ox, oy))

# trim fully transparent borders
bbox = canvas.getbbox()
canvas = canvas.crop(bbox)
canvas.save("/home/user/GGuz/assets/logo/bitu-logo.png")
canvas.resize((canvas.width*2, canvas.height*2), Image.LANCZOS).save(
    "/home/user/GGuz/assets/logo/bitu-logo@2x.png")
print("done", canvas.size)

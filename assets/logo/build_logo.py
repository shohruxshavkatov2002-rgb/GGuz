#!/usr/bin/env python3
"""
BITU logo generator.
Tibbiyot (Asklepiy tayog'i + ilon) + Ta'lim (akademik shapka) ni birlashtiradi.
Ikki chetdagi shesternalar (tishli g'ildiraklar) o'zgarmaydi -> chap va o'ng yarim.
"""
import math

W, H = 1000, 820
CX = 500.0
CY = 400.0           # gear vertical center

RED = "#c0202a"
DARK = "#1d1d1b"

# ----------------------------------------------------------------------------
# One gear half = a toothed arc band between two radial caps.
# We build the LEFT and RIGHT halves, leaving gaps at top and bottom.
# ----------------------------------------------------------------------------
def r_at(angle, step, r_tip, r_root):
    """Trapezoidal tooth profile as a function of angle."""
    phase = (angle % step) / step
    if phase < 0.30:                       # root land
        return r_root
    elif phase < 0.42:                     # rising flank
        t = (phase - 0.30) / 0.12
        return r_root + (r_tip - r_root) * t
    elif phase < 0.58:                     # tip land
        return r_tip
    elif phase < 0.70:                     # falling flank
        t = (phase - 0.58) / 0.12
        return r_tip - (r_tip - r_root) * t
    else:                                  # root land
        return r_root

def seg_path(cx, cy, z, r_tip, r_root, r_hole, a0, a1):
    step = 2 * math.pi / z
    d = ""
    # inner start
    x = cx + r_hole * math.cos(a0); y = cy + r_hole * math.sin(a0)
    d += f"M{x:.2f},{y:.2f} "
    # radial cap up to root
    x = cx + r_root * math.cos(a0); y = cy + r_root * math.sin(a0)
    d += f"L{x:.2f},{y:.2f} "
    # outer toothed boundary
    steps = int((a1 - a0) / math.radians(0.5))
    for k in range(steps + 1):
        ang = a0 + (a1 - a0) * k / steps
        r = r_at(ang, step, r_tip, r_root)
        x = cx + r * math.cos(ang); y = cy + r * math.sin(ang)
        d += f"L{x:.2f},{y:.2f} "
    # radial cap down to inner
    x = cx + r_hole * math.cos(a1); y = cy + r_hole * math.sin(a1)
    d += f"L{x:.2f},{y:.2f} "
    # inner arc back
    for k in range(steps + 1):
        ang = a1 - (a1 - a0) * k / steps
        x = cx + r_hole * math.cos(ang); y = cy + r_hole * math.sin(ang)
        d += f"L{x:.2f},{y:.2f} "
    d += "Z"
    return d

Z = 15
RTIP, RROOT, RHOLE = 470, 405, 300
GAP_TOP = math.radians(38)      # half-gap at top
GAP_BOT = math.radians(44)      # half-gap at bottom

# right half: from just below top gap, through 3 o'clock, to just above bottom gap
RIGHT = seg_path(CX, CY, Z, RTIP, RROOT, RHOLE,
                 -math.pi/2 + GAP_TOP, math.pi/2 - GAP_BOT)
# left half: from just below bottom gap, through 9 o'clock, to just above top gap
LEFT = seg_path(CX, CY, Z, RTIP, RROOT, RHOLE,
                math.pi/2 + GAP_BOT, 3*math.pi/2 - GAP_TOP)

# ----------------------------------------------------------------------------
svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">

  <!-- ================= GEARS (unchanged) : two halves ================= -->
  <path d="{RIGHT}" fill="{RED}"/>
  <path d="{LEFT}"  fill="{RED}"/>

  <!-- white face -->
  <circle cx="{CX}" cy="{CY}" r="300" fill="#ffffff"/>

  <!-- ================= MEDICINE: rod of Asclepius ================= -->
  <path d="M489,176 L511,176 L511,698 L500,750 L489,698 Z" fill="{DARK}"/>

  <!-- ================= EDUCATION: graduation cap (mortarboard) ========= -->
  <path d="M454,158 Q500,202 546,158 L546,146 Q500,176 454,146 Z" fill="{DARK}"/>
  <path d="M500,80 L652,136 L500,192 L348,136 Z" fill="{DARK}"/>
  <path d="M500,88 L634,136 L500,184 L366,136 Z" fill="#2b2b29"/>
  <circle cx="500" cy="136" r="11" fill="{RED}"/>
  <!-- tassel -->
  <path d="M500,136 C566,156 618,158 624,180 L624,232" stroke="{RED}" stroke-width="7"
        fill="none" stroke-linecap="round"/>
  <rect x="613" y="230" width="22" height="40" rx="9" fill="{RED}"/>
  <circle cx="624" cy="228" r="9" fill="{RED}"/>

  <!-- ================= MEDICINE: snake coiling the rod ================= -->
  <path d="M500,732
           C470,698 470,664 500,636
           C534,606 534,568 500,540
           C466,514 466,478 500,452
           C536,426 536,386 500,360
           C470,338 472,308 506,294"
        stroke="{RED}" stroke-width="30" fill="none"
        stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M506,294 C470,280 470,240 512,234 C556,228 588,244 600,264
           C608,280 596,300 574,302 C548,304 528,304 506,294 Z"
        fill="{RED}"/>
  <circle cx="560" cy="260" r="9" fill="#ffffff"/>

  <!-- ================= TEXT: BITU ================= -->
  <g font-family="Arial, Helvetica, 'DejaVu Sans', sans-serif"
     font-weight="900" font-size="170" text-anchor="middle">
    <text x="330" y="478" fill="{DARK}">BI</text>
    <text x="642" y="478"><tspan fill="{RED}">T</tspan><tspan fill="{DARK}">U</tspan></text>
  </g>
</svg>
'''

with open("/home/user/GGuz/assets/logo/bitu-logo.svg", "w") as fh:
    fh.write(svg)
print("SVG written")

import cairosvg
cairosvg.svg2png(url="/home/user/GGuz/assets/logo/bitu-logo.svg",
                 write_to="/home/user/GGuz/assets/logo/bitu-logo.png",
                 output_width=1000, output_height=820)
print("PNG written")

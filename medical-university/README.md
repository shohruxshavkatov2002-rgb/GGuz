# Meridian Medical University — 3D Immersive Website

A modern, 3D-driven medical university website built with **React + Vite +
TypeScript**, **Framer Motion** (scroll animations) and **react-three-fiber /
Three.js** (real WebGL 3D). Page and section structure follows
`Generic-Medical-University-Project.csv`.

Design language (palette, type, motion rules) was sourced via the
**UI-UX-Pro-Max** skill installed in this repo:

- **Palette:** medical teal `#0891B2` → cyan `#22D3EE`, green CTA `#22C55E`, ink `#134E4A`, deep navy `#001F3F` for 3D sections
- **Type:** Crimson Pro (scholarly headings) + Figtree (body)
- **Motion:** scroll-reveal, parallax, 200–400 ms easing, `prefers-reduced-motion` respected

## Pages & sections (from the CSV)

| Page | Sections |
| --- | --- |
| **Home** (`/`) | Navbar · 3D Hero (DNA helix) · Features · About · Services · Timeline · Team · Reviews · CTA · Newsletter · FAQ · Footer |
| **About Us** (`/about`) | Header · About · Stats · 3D Molecule strip · Timeline · Team · Awards & Partners · CTA · Footer |
| **Academics** (`/academics`) | Header · Features · Student Support · Research Projects · Pricing/Tuition · FAQ · CTA · Footer |
| **Blog** (`/blog`) | Featured header · Blog grid · Newsletter · FAQ · Footer |
| **Blog Post** (`/blog/:slug`) | Post header · Body · Reader reviews · CTA · Newsletter · Footer |

## 3D & scroll animation

- **WebGL 3D** (`src/components/three/`): an auto-rotating **DNA double helix**
  hero with pointer parallax and a drifting particle field, plus a **molecule**
  scene on the About page. All geometry is generated in-code (no asset
  downloads).
- **Scroll animations** (`src/components/Reveal.tsx`): every section reveals on
  scroll; the hero canvas parallaxes and fades as you scroll down.
- The Three.js scene and every route are **code-split** (`React.lazy`) so the
  initial bundle stays light.

## Run locally

```bash
cd medical-university
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

> Requires Node 18+. Built and verified with Vite 5.

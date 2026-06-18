# BITU — Buxoro Innovatsion Taʼlim va Tibbiyot Universiteti

3D animatsiyali, scroll'da jonlanadigan zamonaviy universitet sayti.
**React + Vite + TypeScript**, **Framer Motion** (scroll animatsiyalar) va
**react-three-fiber / Three.js** (haqiqiy WebGL 3D).

Butun kontent **haqiqiy BITU ma'lumotlaridan** olingan (`src/data/bitu.json` —
`bitu.uz` asosida): 19 ta yo'nalish, narxlar, kampus imkoniyatlari, yangiliklar,
FAQ va ariza formasi. Sayt **3 tilda**: 🇺🇿 Oʻzbekcha · 🇷🇺 Русский · 🇬🇧 English.

## Sahifalar (pagelar)

| Yo'l | Sahifa |
| --- | --- |
| `/` | Bosh sahifa — Hero (3D DNA), Tezkor faktlar, Universitet haqida, Yo'nalishlar, Kampus, Xalqaro, Yangiliklar, Muhim bo'limlar, Mobil ilova, FAQ, Ariza |
| `/universitet` | Universitet haqida (3D molekula, ma'lumotlar, yangiliklar) |
| `/yonalishlar` | Barcha yo'nalishlar — bosqich tablari + dropdown + qidiruv |
| `/imkoniyatlar` | Kampus va imkoniyatlar |
| `/xalqaro` | Xalqaro talabalar + ariza |
| `/ariza` | To'liq onlayn ariza formasi |

## Dropdown / interaktiv knopkalar

- **Til almashtirgich** (topbar) — UZ / RU / EN, tanlov `localStorage`'da saqlanadi
- **Yoʻnalishlar dropdown** (navbarda) — Bakalavriat / Magistratura / Klinik ordinatura
- **Yo'nalishlar sahifasi** — bosqich tablari, yo'nalish tanlash dropdown'i, jonli qidiruv
- **Ariza formasi** — Mahalliy/Xorijiy rejim, Bosqich → Yo'nalish (bog'liq dropdown), Davlat/Viloyat tanlash, validatsiya

## 3D va animatsiya

- Hero'da aylanadigan **DNA qo'sh spirali** + zarrachalar + sichqoncha parallaxi
- Universitet sahifasida 3D **molekula**
- Har bir bo'lim scroll'da ochiladi; hero scroll'da parallax bilan suriladi
- `prefers-reduced-motion` hurmat qilinadi; Three.js sahnasi va sahifalar lazy-load

## Ishga tushirish

```bash
cd medical-university
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ ga production build
npm run preview
```

> Node 18+ kerak. Vite 5 bilan qurilgan va tekshirilgan.

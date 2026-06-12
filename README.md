# BITU Modern Website

Bu papkada Buxoro Innovatsion Taʼlim va Tibbiyot Universiteti uchun tayyorlangan zamonaviy, responsive landing-page bor.

## Fayllar
- `index.html` — sayt sahifasi
- `styles.css` — dizayn, responsive va animatsiyalar
- `script.js` — mobil menyu, tablar, qidiruv, forma validatsiyasi va animatsiyalar

## Ishlatish
1. `index.html` faylini brauzerda oching.
2. Saytni hostingga joylash uchun uchala faylni bitta papkaga yuklang.
3. Ariza formasini haqiqiy ishlatish uchun backend/CRM yoki Telegram bot API bilan ulash kerak.

## Maʼlumot manbasi
Kontent BITU rasmiy saytidagi ochiq maʼlumotlar asosida qayta tuzildi: https://bitu.uz/uz/


## Yangilanish
- Qizil gradient premium dizayn tizimi qoʻshildi.
- Hero, tugmalar, kartalar, menyu, kampus vizuali va forma bo‘limlariga animatsiyalar qoʻshildi.
- Scroll reveal, stagger animatsiya, hover tilt, floating badge, animated gradient, cursor glow va parallax effektlari qoʻshildi.

## Hero video background
Hero blokidagi qizil gradient fon endi `assets/hero-medical-bg.mp4` video bilan ishlaydi. O‘zingizning videongizni ishlatmoqchi bo‘lsangiz, fayl nomini shu nomga almashtiring yoki `index.html` ichidagi `<source src="assets/hero-medical-bg.mp4">` yo‘lini o‘zgartiring. Video ovozsiz, loop va autoplay holatda sozlangan.


## Video fon ishlashi
Hero qismidagi video HTML ichiga ham kiritilgan, shuning uchun `index.html` alohida ochilganda ham video chiqishi kerak. Baribir to‘liq ishlashi uchun ZIP faylni avval papkaga extract qilib, keyin `index.html`ni ochish tavsiya qilinadi.


Yangi narsa:
- foydalanuvchi yuborgan video hero foniga joylandi;
- oldingi gradient overlay kamaytirildi;
- B harfli logo o'rniga yuklangan BITU logotipi qo'yildi;
- animatsiyalar yumshatilib, hover effektlar yaxshilandi.


Agar eski B logosi ko'rinsa:
- brauzerda admin.html va index.html ni yopib qayta oching;
- kerak bo'lsa Ctrl+F5 qiling;
- local preview uchun admin panelda "Yangilash" ni bosing.


YANGI FUNKSIYALAR:
- admin paneldan logo rasm yuklash yoki yo'l bilan almashtirish
- hero video almashtirish (yo'l yoki fayl orqali)
- hero poster/fon rasm almashtirish
- yangiliklar bo'limiga rasm qo'shib joylash
- foto galereya bo'limi
- muhim bloklar sarlavhasini o'zgartirish ("Admin paneldan qo'shilgan..." matni olib tashlangan)

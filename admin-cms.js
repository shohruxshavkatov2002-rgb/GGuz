
const STORAGE_SITE = "bitu_local_site_data";
const STORAGE_LEADS = "bitu_local_leads";
const DEMO_PASSWORD = "12345678";
const DEFAULT_DATA = {"common": {"logoImage": "assets/bitu-logo.png", "phone": "+998 65 220 55 45", "phone2": "+998 55 305 99 99", "email": "info@biti.uz", "telegram": "https://t.me/", "instagram": "https://www.instagram.com/", "youtube": "https://www.youtube.com/", "heroVideo": "assets/hero-medical-bg.mp4", "heroPoster": "assets/hero-medical-poster.jpg"}, "i18n": {"uz": {"landing": {"kicker": "BITU universiteti", "title": "Filialni tanlang", "text": "Kerakli filialni tanlang. Knopka bosilgandan keyin shu filial sahifasiga o‘tasiz.", "buxoroBtn": "Buxoro filiali", "buxoroSmall": "Asosiy saytga kirish", "tashkentBtn": "Toshkent filiali", "tashkentSmall": "Tez orada", "languageTitle": "Tilni tanlang"}, "soon": {"badge": "Toshkent filiali", "title": "Tez orada ishga tushadi", "text": "BITU Toshkent filiali uchun alohida sahifa tayyorlanmoqda. Hozircha Buxoro filiali kontenti bilan aralashtirilmagan.", "back": "Filial tanlashga qaytish", "buxoro": "Buxoro filialiga kirish"}, "brand": {"name": "BITU", "subtitle": "Buxoro Innovatsion Taʼlim va Tibbiyot Universiteti", "address": "Oʻzbekiston, Buxoro viloyati, Buxoro shahri, Namozgoh koʻchasi, QC23+QWM"}, "topbar": {"hotline": "Ishonch telefoni:", "language": "Oʻzbekcha", "address": "Manzil", "apply": "Ariza"}, "nav": {"about": "Universitet", "programs": "Yoʻnalishlar", "campus": "Imkoniyatlar", "international": "Xalqaro", "faq": "FAQ", "apply": "Ariza qoldirish"}, "hero": {"eyebrow": "Qabul jarayoni davom etmoqda", "title": "Buxoro Innovatsion Taʼlim va Tibbiyot Universiteti", "lead": "Kelajagingizni biz bilan birga quring. Milliy va xalqaro andozalarga mos taʼlim, zamonaviy laboratoriyalar, xalqaro muhit va amaliyotga yoʻnaltirilgan dasturlar.", "primaryButton": "Hujjat topshirish", "secondaryButton": "Yoʻnalishlarni koʻrish", "trust": ["Davlat litsenziyasi", "Xalqaro dasturlar", "Onlayn qabul"]}, "quick": [["Bakalavriat", "5 ta kunduzgi yoʻnalish"], ["Magistratura", "2–3 yillik dasturlar"], ["Klinik ordinatura", "Tibbiy ixtisosliklar"], ["Xorijiy talabalar", "MBBS, BDS va biznes"]], "about": {"kicker": "Universitet haqida", "title": "Zamonaviy va yuqori standartlarga asoslangan taʼlim — bosh maqsad.", "text": "BITU milliy va xalqaro andozalarga javob beradigan ilgʻor oʻquv dasturlarini taklif qiladi. Tajribali pedagogik jamoa talabalar isteʼdodini roʻyobga chiqarish, ularni yetuk va raqobatbardosh mutaxassis sifatida shakllantirishga xizmat qiladi.", "features": ["Tibbiyot, taʼlim, iqtisodiyot, psixologiya va filologiya yoʻnalishlari", "Amaliyotga yoʻnaltirilgan darslar va zamonaviy texnik baza", "Oʻzbek, rus va ingliz tillarida taʼlim muhiti"], "infoTitle": "Qabul uchun kerakli asosiy maʼlumotlar", "info": ["Hujjatlar: pasport yoki ID-karta, maktab/texnikum diplomi yoki shahodatnoma.", "Qabul: onlayn ariza yoki shaxsan murojaat qilish mumkin.", "Grant: mutaxassislik fanlaridan test; yuqori ball grant imkoniyatini oshiradi.", "Toʻlov: 4 yoki 5 qismga boʻlib toʻlash va taʼlim krediti imkoniyati bor."]}, "programSection": {"kicker": "Taʼlim yoʻnalishlari", "title": "Abituriyentlar uchun barcha asosiy dasturlar", "text": "Bakalavr, magistratura va klinik ordinatura yoʻnalishlari qulay kartalar shaklida jamlandi. Narxlar yillik kontrakt miqdori sifatida koʻrsatilgan.", "labels": {"bachelor": "Bakalavriat", "master": "Magistratura", "residency": "Klinik ordinatura"}, "search": "Qidiruv", "searchPlaceholder": "Yoʻnalish nomini yozing...", "applyLink": "Hujjat topshirish", "programSelectEmpty": "Avval bosqichni tanlang", "programPlaceholder": "Yoʻnalishni tanlang"}, "programs": [{"stage": "bachelor", "code": "60910200", "name": "Davolash ishi", "duration": "6 yil • Kunduzgi", "price": "32 340 000 soʻm"}, {"stage": "bachelor", "code": "60910100", "name": "Stomatologiya", "duration": "5 yil • Kunduzgi", "price": "32 340 000 soʻm"}, {"stage": "bachelor", "code": "60410100", "name": "Iqtisodiyot", "duration": "4 yil • Kunduzgi", "price": "14 900 000 soʻm"}, {"stage": "bachelor", "code": "60310300", "name": "Psixologiya", "duration": "4 yil • Kunduzgi", "price": "14 900 000 soʻm"}, {"stage": "bachelor", "code": "60110400", "name": "Boshlangʻich taʼlim", "duration": "4 yil • Kunduzgi", "price": "14 900 000 soʻm"}, {"stage": "bachelor", "code": "60230100", "name": "Filologiya va tillarni oʻqitish", "duration": "4 yil • Kunduzgi", "price": "14 900 000 soʻm"}, {"stage": "master", "code": "Magistratura", "name": "Oʻzbek tili va adabiyoti", "duration": "2 yil • Kunduzgi", "price": "21 400 000 soʻm"}, {"stage": "master", "code": "Magistratura", "name": "Terapevtik stomatologiya", "duration": "3 yil • Kunduzgi", "price": "32 340 000 soʻm"}, {"stage": "master", "code": "Magistratura", "name": "Neyroxirurgiya", "duration": "3 yil • Kunduzgi", "price": "32 340 000 soʻm"}, {"stage": "master", "code": "Magistratura", "name": "Akusherlik va ginekologiya", "duration": "3 yil • Kunduzgi", "price": "32 340 000 soʻm"}, {"stage": "master", "code": "Magistratura", "name": "Travmatologiya va ortopediya", "duration": "3 yil • Kunduzgi", "price": "32 340 000 soʻm"}, {"stage": "master", "code": "Magistratura", "name": "Ortopedik stomatologiya", "duration": "3 yil • Kunduzgi", "price": "32 340 000 soʻm"}, {"stage": "residency", "code": "Ordinatura", "name": "Kardiologiya", "duration": "2 yil", "price": "21 000 000 soʻm"}, {"stage": "residency", "code": "Ordinatura", "name": "Nevrologiya", "duration": "2 yil", "price": "21 000 000 soʻm"}, {"stage": "residency", "code": "Ordinatura", "name": "Pediatriya", "duration": "2 yil", "price": "21 000 000 soʻm"}, {"stage": "residency", "code": "Ordinatura", "name": "Xirurgiya", "duration": "1 yil", "price": "21 000 000 soʻm"}, {"stage": "residency", "code": "Ordinatura", "name": "Onkologiya", "duration": "2 yil", "price": "21 000 000 soʻm"}, {"stage": "residency", "code": "Ordinatura", "name": "Endokrinologiya", "duration": "2 yil", "price": "21 000 000 soʻm"}, {"stage": "residency", "code": "Ordinatura", "name": "Neonatologiya", "duration": "2 yil", "price": "21 000 000 soʻm"}], "campus": {"kicker": "Kampus va imkoniyatlar", "title": "Talaba uchun bilim, amaliyot va rivojlanish muhiti", "text": "Universitetda virtual laboratoriyalar, elektron kutubxona, zamonaviy tibbiy uskunalar, katta zallar va sport klublari mavjud.", "cards": [["VR", "Virtual haqiqat", "VR ko‘zoynaklari orqali jarrohlik muolajalarini o‘rganish va murakkab jarayonlarni tushunarli ko‘rish imkoniyati."], ["50K+", "Kutubxona", "50 000 dan ortiq badiiy va ilmiy adabiyot, 20 000 dan ortiq elektron adabiyotlar bazasi."], ["1000", "Faollar zali", "Buxoro shahridagi katta sig‘imli yopiq faollar zali."], ["MED", "Tibbiyot uskunalari", "Laboratoriyalarda zamonaviy tibbiyot uskunalari bilan amaliy darslar tashkil etiladi."], ["86”", "Interaktiv doskalar", "Katta elektron doskalar orqali darslar va jarayonlar ko‘rsatiladi."], ["SPORT", "Klublar", "Futbol, voleybol, basketbol, tennis, shaxmat va boshqa klublar."]]}, "international": {"kicker": "Xalqaro talabalar", "title": "Global hamjamiyatga xush kelibsiz.", "text": "BITU xorijiy talabalarni akademik yoʻlda qoʻllab-quvvatlaydi. Xalqaro talabalar tibbiyot, stomatologiya, iqtisodiyot va xorijiy tillar yoʻnalishlarida tahsil olishi mumkin.", "button": "Xorijiy ariza yuborish", "cardTitle": "International Programs", "list": ["MBBS — General Medicine", "BDS — Dentistry", "Business of Economics", "Foreign Languages: English, Russian, German"]}, "news": {"kicker": "Soʻnggi yangiliklar", "title": "Universitet hayotidan lavhalar", "items": [{"date": "10.06.2026", "title": "Hudud Kubogi!", "text": "Talabalar sport tadbirlarida faol ishtirok etmoqda.", "image": ""}, {"date": "09.06.2026", "title": "Stomatologiya 1-bosqich talabalari", "text": "Yakuniy imtihon va amaliy tayyorgarlik.", "image": ""}]}, "faq": {"kicker": "Koʻp beriladigan savollar", "title": "Qabul, diplom, kontrakt va kampus boʻyicha tez javoblar", "text": "Quyidagi savollar abituriyentlar eng koʻp soʻraydigan mavzular asosida tayyorlandi.", "items": [{"question": "Davolash ishi va stomatologiya qancha muddat oʻqiladi?", "answer": "Davolash ishi 6 yil, stomatologiya 5 yil kunduzgi shaklda oʻqiladi."}, {"question": "Hujjatlarni onlayn topshirish mumkinmi?", "answer": "Ha, hujjat topshirish uchun onlayn qabul tizimi yo‘lga qo‘yilgan."}, {"question": "Toʻlovni boʻlib toʻlash mumkinmi?", "answer": "Ha, kontraktni 4 yoki 5 qismga boʻlib toʻlash mumkin."}]}, "app": {"kicker": "BITU Platformasi", "title": "Mobil ilovani yuklab oling", "text": "Universitet platformasi orqali qoʻshimcha imkoniyatlardan foydalaning."}, "apply": {"kicker": "Tezkor ariza", "title": "Hujjatlarni onlayn topshiring", "text": "Quyidagi forma demo rejimida arizani admin panelga saqlaydi. Qabul bo‘limi siz bilan bog‘lanadi.", "modeLocal": "Mahalliy", "modeForeign": "Xorijiy", "nameLabel": "F.I.O. *", "namePlaceholder": "Ism familiyangiz", "emailLabel": "Email *", "countryLabel": "Davlat *", "countryPlaceholder": "Davlatni tanlang", "countries": ["Qozogʻiston", "Qirgʻiziston", "Tojikiston", "Hindiston", "Pokiston", "Rossiya", "Boshqa"], "regionLabel": "Viloyat *", "regionPlaceholder": "Viloyatni tanlang", "regions": ["Toshkent shahri", "Qoraqalpogʻiston Respublikasi", "Andijon viloyati", "Buxoro viloyati", "Fargʻona viloyati", "Jizzax viloyati", "Namangan viloyati", "Navoiy viloyati", "Qashqadaryo viloyati", "Samarqand viloyati", "Sirdaryo viloyati", "Surxondaryo viloyati", "Toshkent viloyati", "Xorazm viloyati"], "phoneLabel": "Telefon *", "phonePlaceholder": "+998 __ ___ __ __", "levelLabel": "Bosqich *", "levelPlaceholder": "Bosqichni tanlang", "programLabel": "Yoʻnalish *", "messageLabel": "Izoh", "messagePlaceholder": "Savolingiz yoki qoʻshimcha izoh", "consent": "Shaxsiy maʼlumotlarimdan foydalanilishiga roziman.", "submit": "Ariza qoldirish", "requiredError": "Iltimos, ism va telefon raqamni kiriting.", "success": "Demo rejim: ariza admin panelga saqlandi. Admin paneldagi “Arizalar” bo‘limidan ko‘ring.", "invalid": "Iltimos, majburiy maydonlarni toʻldiring.", "sending": "Ariza yuborilmoqda...", "sent": "Ariza muvaffaqiyatli yuborildi. Tez orada siz bilan bogʻlanamiz.", "failed": "Ariza yuborilmadi. Keyinroq urinib koʻring."}, "customBlocks": {"kicker": "Muhim bo‘limlar", "title": "Universitetning muhim imkoniyatlari", "items": [{"title": "Zamonaviy laboratoriyalar", "text": "Talabalar amaliy ko‘nikmalarni zamonaviy laboratoriyalarda rivojlantiradi.", "image": ""}, {"title": "Xalqaro muhit", "text": "Taʼlim jarayonida xalqaro standartlar va ko‘p tilli muhit qo‘llanadi.", "image": ""}]}, "footer": {"contacts": "Kontaktlar", "useful": "Foydali havolalar", "social": "Ijtimoiy tarmoqlar", "gov": "Davlat test markazi", "id": "Yagona identifikatsiya tizimi", "mygov": "Yagona interaktiv davlat xizmatlari", "copyright": "© 2026 Buxoro innovatsion taʼlim va tibbiyot universiteti", "top": "Yuqoriga qaytish ↑"}}, "ru": {"landing": {"kicker": "Университет BITU", "title": "Выберите филиал", "text": "Выберите нужный филиал. После нажатия кнопки вы перейдёте на страницу выбранного филиала.", "buxoroBtn": "Бухарский филиал", "buxoroSmall": "Перейти на основной сайт", "tashkentBtn": "Ташкентский филиал", "tashkentSmall": "Скоро", "languageTitle": "Выберите язык"}, "soon": {"badge": "Ташкентский филиал", "title": "Скоро откроется", "text": "Отдельная страница Ташкентского филиала BITU готовится. Пока она не смешана с контентом Бухарского филиала.", "back": "Вернуться к выбору филиала", "buxoro": "Перейти в Бухарский филиал"}, "brand": {"name": "BITU", "subtitle": "Бухарский инновационный университет образования и медицины", "address": "Узбекистан, Бухарская область, город Бухара, улица Намозгох, QC23+QWM"}, "topbar": {"hotline": "Телефон доверия:", "language": "Русский", "address": "Адрес", "apply": "Заявка"}, "nav": {"about": "Университет", "programs": "Направления", "campus": "Возможности", "international": "Международный отдел", "faq": "FAQ", "apply": "Подать заявку"}, "hero": {"eyebrow": "Приём продолжается", "title": "Бухарский инновационный университет образования и медицины", "lead": "Стройте своё будущее вместе с нами. Образование по национальным и международным стандартам, современные лаборатории и практико-ориентированные программы.", "primaryButton": "Подать документы", "secondaryButton": "Посмотреть направления", "trust": ["Государственная лицензия", "Международные программы", "Онлайн-приём"]}, "quick": [["Бакалавриат", "5 очных направлений"], ["Магистратура", "Программы 2–3 года"], ["Клиническая ординатура", "Медицинские специальности"], ["Иностранные студенты", "MBBS, BDS и бизнес"]], "about": {"kicker": "Об университете", "title": "Современное образование на высоких стандартах — наша главная цель.", "text": "BITU предлагает передовые учебные программы, соответствующие национальным и международным стандартам. Опытная команда помогает студентам раскрыть талант и стать конкурентоспособными специалистами.", "features": ["Направления медицины, образования, экономики, психологии и филологии", "Практико-ориентированные занятия и современная техническая база", "Образовательная среда на узбекском, русском и английском языках"], "infoTitle": "Основная информация для поступления", "info": ["Документы: паспорт или ID-карта, диплом школы/техникума или аттестат.", "Приём: можно подать онлайн-заявку или обратиться лично.", "Грант: тесты по профильным предметам; высокий балл повышает шансы на грант.", "Оплата: возможна оплата в 4 или 5 частей."]}, "programSection": {"kicker": "Образовательные направления", "title": "Основные программы для абитуриентов", "text": "Бакалавриат, магистратура и клиническая ординатура собраны в удобных карточках.", "labels": {"bachelor": "Бакалавриат", "master": "Магистратура", "residency": "Клиническая ординатура"}, "search": "Поиск", "searchPlaceholder": "Введите название направления...", "applyLink": "Подать документы", "programSelectEmpty": "Сначала выберите уровень", "programPlaceholder": "Выберите направление"}, "programs": [{"stage": "bachelor", "code": "60910200", "name": "Лечебное дело", "duration": "6 года • очно", "price": "32 340 000 сум"}, {"stage": "bachelor", "code": "60910100", "name": "Стоматология", "duration": "5 года • очно", "price": "32 340 000 сум"}, {"stage": "bachelor", "code": "60410100", "name": "Экономика", "duration": "4 года • очно", "price": "14 900 000 сум"}, {"stage": "bachelor", "code": "60310300", "name": "Психология", "duration": "4 года • очно", "price": "14 900 000 сум"}, {"stage": "bachelor", "code": "60110400", "name": "Начальное образование", "duration": "4 года • очно", "price": "14 900 000 сум"}, {"stage": "bachelor", "code": "60230100", "name": "Филология и преподавание языков", "duration": "4 года • очно", "price": "14 900 000 сум"}, {"stage": "master", "code": "Magistratura", "name": "Узбекский язык и литература", "duration": "2 года • очно", "price": "21 400 000 сум"}, {"stage": "master", "code": "Magistratura", "name": "Терапевтическая стоматология", "duration": "3 года • очно", "price": "32 340 000 сум"}, {"stage": "master", "code": "Magistratura", "name": "Нейрохирургия", "duration": "3 года • очно", "price": "32 340 000 сум"}, {"stage": "master", "code": "Magistratura", "name": "Акушерство и гинекология", "duration": "3 года • очно", "price": "32 340 000 сум"}, {"stage": "master", "code": "Magistratura", "name": "Травматология и ортопедия", "duration": "3 года • очно", "price": "32 340 000 сум"}, {"stage": "master", "code": "Magistratura", "name": "Ортопедическая стоматология", "duration": "3 года • очно", "price": "32 340 000 сум"}, {"stage": "residency", "code": "Ordinatura", "name": "Кардиология", "duration": "2 года", "price": "21 000 000 сум"}, {"stage": "residency", "code": "Ordinatura", "name": "Неврология", "duration": "2 года", "price": "21 000 000 сум"}, {"stage": "residency", "code": "Ordinatura", "name": "Педиатрия", "duration": "2 года", "price": "21 000 000 сум"}, {"stage": "residency", "code": "Ordinatura", "name": "Хирургия", "duration": "1 года", "price": "21 000 000 сум"}, {"stage": "residency", "code": "Ordinatura", "name": "Онкология", "duration": "2 года", "price": "21 000 000 сум"}, {"stage": "residency", "code": "Ordinatura", "name": "Эндокринология", "duration": "2 года", "price": "21 000 000 сум"}, {"stage": "residency", "code": "Ordinatura", "name": "Неонатология", "duration": "2 года", "price": "21 000 000 сум"}], "campus": {"kicker": "Кампус и возможности", "title": "Среда для знаний, практики и развития", "text": "В университете есть виртуальные лаборатории, электронная библиотека, современное медицинское оборудование и спортивные клубы.", "cards": [["VR", "Виртуальная реальность", "VR-очки помогают изучать хирургические процедуры."], ["50K+", "Библиотека", "Более 50 000 книг и более 20 000 электронных ресурсов."], ["1000", "Актовый зал", "Большой зал подходит для мероприятий и церемоний."], ["MED", "Медицинское оборудование", "Практические занятия проводятся на современном оборудовании."], ["86”", "Интерактивные доски", "Большие электронные доски для занятий и трансляций."], ["SPORT", "Клубы", "Футбол, волейбол, баскетбол, теннис и шахматы."]]}, "international": {"kicker": "Иностранные студенты", "title": "Добро пожаловать в глобальное сообщество.", "text": "BITU поддерживает иностранных студентов и ценит уникальные способности, которые они привносят в кампус.", "button": "Подать международную заявку", "cardTitle": "Международные программы", "list": ["MBBS — общая медицина", "BDS — стоматология", "Экономика бизнеса", "Иностранные языки: английский, русский, немецкий"]}, "news": {"kicker": "Последние новости", "title": "Новости из жизни университета", "items": [{"date": "10.06.2026", "title": "Кубок территорий!", "text": "Студенты активно участвуют в спортивных мероприятиях.", "image": ""}, {"date": "09.06.2026", "title": "Студенты 1 курса стоматологии", "text": "Итоговые экзамены и практическая подготовка.", "image": ""}]}, "faq": {"kicker": "Частые вопросы", "title": "Быстрые ответы о приёме, дипломе, контракте и кампусе", "text": "Вопросы ниже подготовлены на основе самых частых тем абитуриентов.", "items": [{"question": "Сколько лет учатся на лечебном деле и стоматологии?", "answer": "Лечебное дело — 6 лет, стоматология — 5 лет."}, {"question": "Можно ли подать документы онлайн?", "answer": "Да, доступна онлайн-система приёма."}, {"question": "Можно ли оплатить контракт частями?", "answer": "Да, контракт можно оплатить в 4 или 5 частей."}]}, "app": {"kicker": "Платформа BITU", "title": "Скачайте мобильное приложение", "text": "Используйте дополнительные возможности через платформу университета."}, "apply": {"kicker": "Быстрая заявка", "title": "Подайте документы онлайн", "text": "В демо-режиме форма сохраняет заявку в админ-панель. Приёмный отдел свяжется с вами.", "modeLocal": "Местный", "modeForeign": "Иностранный", "nameLabel": "Ф.И.О. *", "namePlaceholder": "Ваше имя и фамилия", "emailLabel": "Email *", "countryLabel": "Страна *", "countryPlaceholder": "Выберите страну", "countries": ["Qozogʻiston", "Qirgʻiziston", "Tojikiston", "Hindiston", "Pokiston", "Rossiya", "Boshqa"], "regionLabel": "Регион *", "regionPlaceholder": "Выберите регион", "regions": ["Toshkent shahri", "Qoraqalpogʻiston Respublikasi", "Andijon viloyati", "Buxoro viloyati", "Fargʻona viloyati", "Jizzax viloyati", "Namangan viloyati", "Navoiy viloyati", "Qashqadaryo viloyati", "Samarqand viloyati", "Sirdaryo viloyati", "Surxondaryo viloyati", "Toshkent viloyati", "Xorazm viloyati"], "phoneLabel": "Телефон *", "phonePlaceholder": "+998 __ ___ __ __", "levelLabel": "Уровень *", "levelPlaceholder": "Выберите уровень", "programLabel": "Направление *", "messageLabel": "Комментарий", "messagePlaceholder": "Ваш вопрос или комментарий", "consent": "Я согласен(а) на использование моих персональных данных.", "submit": "Подать заявку", "requiredError": "Пожалуйста, введите имя и номер телефона.", "success": "Демо-режим: заявка сохранена в админ-панели.", "invalid": "Пожалуйста, заполните обязательные поля.", "sending": "Заявка отправляется...", "sent": "Заявка успешно отправлена.", "failed": "Заявка не отправлена. Попробуйте позже."}, "customBlocks": {"kicker": "Важные разделы", "title": "Ключевые возможности университета", "items": [{"title": "Современные лаборатории", "text": "Студенты развивают практические навыки в современных лабораториях.", "image": ""}, {"title": "Международная среда", "text": "В обучении применяются международные стандарты.", "image": ""}]}, "footer": {"contacts": "Контакты", "useful": "Полезные ссылки", "social": "Социальные сети", "gov": "Государственный тестовый центр", "id": "Единая система идентификации", "mygov": "Единые интерактивные государственные услуги", "copyright": "© 2026 Бухарский инновационный университет образования и медицины", "top": "Наверх ↑"}}, "en": {"landing": {"kicker": "BITU University", "title": "Choose a branch", "text": "Select the branch you need. After clicking the button, you will enter the selected branch page.", "buxoroBtn": "Bukhara branch", "buxoroSmall": "Enter the main website", "tashkentBtn": "Tashkent branch", "tashkentSmall": "Coming soon", "languageTitle": "Choose language"}, "soon": {"badge": "Tashkent branch", "title": "Coming soon", "text": "A separate page for the BITU Tashkent branch is being prepared. For now, it is not mixed with the Bukhara branch content.", "back": "Back to branch selection", "buxoro": "Enter Bukhara branch"}, "brand": {"name": "BITU", "subtitle": "Bukhara Innovative Education and Medical University", "address": "Uzbekistan, Bukhara region, Bukhara city, Namozgoh street, QC23+QWM"}, "topbar": {"hotline": "Hotline:", "language": "English", "address": "Address", "apply": "Apply"}, "nav": {"about": "University", "programs": "Programs", "campus": "Facilities", "international": "International", "faq": "FAQ", "apply": "Apply now"}, "hero": {"eyebrow": "Admission is open", "title": "Bukhara Innovative Education and Medical University", "lead": "Build your future with us. Education based on national and international standards, modern laboratories, and practice-oriented programs.", "primaryButton": "Submit documents", "secondaryButton": "View programs", "trust": ["State license", "International programs", "Online admission"]}, "quick": [["Bachelor’s degree", "5 full-time programs"], ["Master’s degree", "2–3 year programs"], ["Clinical residency", "Medical specialties"], ["International students", "MBBS, BDS and business"]], "about": {"kicker": "About the university", "title": "Modern education based on high standards is our main goal.", "text": "BITU offers advanced educational programs that meet national and international standards. An experienced academic team helps students become competitive specialists.", "features": ["Medicine, education, economics, psychology, and philology programs", "Practice-oriented classes and a modern technical base", "Learning environment in Uzbek, Russian, and English"], "infoTitle": "Key admission information", "info": ["Documents: passport or ID card, school/college diploma or certificate.", "Admission: applicants may apply online or in person.", "Grant: subject tests; a high score increases grant opportunities.", "Payment: tuition may be paid in 4 or 5 installments."]}, "programSection": {"kicker": "Study programs", "title": "Main programs for applicants", "text": "Bachelor’s, master’s, and clinical residency programs are presented in convenient cards.", "labels": {"bachelor": "Bachelor’s", "master": "Master’s", "residency": "Clinical residency"}, "search": "Search", "searchPlaceholder": "Type a program name...", "applyLink": "Submit documents", "programSelectEmpty": "Select a level first", "programPlaceholder": "Select a program"}, "programs": [{"stage": "bachelor", "code": "60910200", "name": "General Medicine", "duration": "6 years • full-time", "price": "32 340 000 UZS"}, {"stage": "bachelor", "code": "60910100", "name": "Dentistry", "duration": "5 years • full-time", "price": "32 340 000 UZS"}, {"stage": "bachelor", "code": "60410100", "name": "Economics", "duration": "4 years • full-time", "price": "14 900 000 UZS"}, {"stage": "bachelor", "code": "60310300", "name": "Psychology", "duration": "4 years • full-time", "price": "14 900 000 UZS"}, {"stage": "bachelor", "code": "60110400", "name": "Primary Education", "duration": "4 years • full-time", "price": "14 900 000 UZS"}, {"stage": "bachelor", "code": "60230100", "name": "Philology and Language Teaching", "duration": "4 years • full-time", "price": "14 900 000 UZS"}, {"stage": "master", "code": "Magistratura", "name": "Uzbek Language and Literature", "duration": "2 years • full-time", "price": "21 400 000 UZS"}, {"stage": "master", "code": "Magistratura", "name": "Therapeutic Dentistry", "duration": "3 years • full-time", "price": "32 340 000 UZS"}, {"stage": "master", "code": "Magistratura", "name": "Neurosurgery", "duration": "3 years • full-time", "price": "32 340 000 UZS"}, {"stage": "master", "code": "Magistratura", "name": "Obstetrics and Gynecology", "duration": "3 years • full-time", "price": "32 340 000 UZS"}, {"stage": "master", "code": "Magistratura", "name": "Traumatology and Orthopedics", "duration": "3 years • full-time", "price": "32 340 000 UZS"}, {"stage": "master", "code": "Magistratura", "name": "Orthopedic Dentistry", "duration": "3 years • full-time", "price": "32 340 000 UZS"}, {"stage": "residency", "code": "Ordinatura", "name": "Cardiology", "duration": "2 years", "price": "21 000 000 UZS"}, {"stage": "residency", "code": "Ordinatura", "name": "Neurology", "duration": "2 years", "price": "21 000 000 UZS"}, {"stage": "residency", "code": "Ordinatura", "name": "Pediatrics", "duration": "2 years", "price": "21 000 000 UZS"}, {"stage": "residency", "code": "Ordinatura", "name": "Surgery", "duration": "1 years", "price": "21 000 000 UZS"}, {"stage": "residency", "code": "Ordinatura", "name": "Oncology", "duration": "2 years", "price": "21 000 000 UZS"}, {"stage": "residency", "code": "Ordinatura", "name": "Endocrinology", "duration": "2 years", "price": "21 000 000 UZS"}, {"stage": "residency", "code": "Ordinatura", "name": "Neonatology", "duration": "2 years", "price": "21 000 000 UZS"}], "campus": {"kicker": "Campus and facilities", "title": "An environment for learning, practice, and growth", "text": "The university offers virtual laboratories, an electronic library, modern medical equipment, and sports clubs.", "cards": [["VR", "Virtual reality", "VR headsets help students study surgical procedures."], ["50K+", "Library", "More than 50,000 books and 20,000 electronic resources."], ["1000", "Assembly hall", "A large hall for events and ceremonies."], ["MED", "Medical equipment", "Practical classes use modern medical equipment."], ["86”", "Interactive boards", "Large electronic boards for lessons and broadcasts."], ["SPORT", "Clubs", "Football, volleyball, basketball, tennis, and chess."]]}, "international": {"kicker": "International students", "title": "Welcome to a global community.", "text": "BITU supports international students and values the unique skills they bring to campus.", "button": "Submit international application", "cardTitle": "International Programs", "list": ["MBBS — General Medicine", "BDS — Dentistry", "Business of Economics", "Foreign Languages: English, Russian, German"]}, "news": {"kicker": "Latest news", "title": "Highlights from university life", "items": [{"date": "10.06.2026", "title": "Regional Cup!", "text": "Students are actively participating in sports events.", "image": ""}, {"date": "09.06.2026", "title": "First-year dentistry students", "text": "Final exams and practical preparation.", "image": ""}]}, "faq": {"kicker": "Frequently asked questions", "title": "Quick answers about admission, diploma, tuition, and campus", "text": "The questions below are based on the topics most frequently asked by applicants.", "items": [{"question": "How long are General Medicine and Dentistry programs?", "answer": "General Medicine is 6 years, and Dentistry is 5 years."}, {"question": "Can documents be submitted online?", "answer": "Yes, an online admission system is available."}, {"question": "Can tuition be paid in installments?", "answer": "Yes, tuition can be paid in 4 or 5 installments."}]}, "app": {"kicker": "BITU Platform", "title": "Download the mobile app", "text": "Use additional opportunities through the university platform."}, "apply": {"kicker": "Quick application", "title": "Submit your documents online", "text": "In demo mode, the form saves the application to the admin panel. The admission office will contact you.", "modeLocal": "Local", "modeForeign": "International", "nameLabel": "Full name *", "namePlaceholder": "Your full name", "emailLabel": "Email *", "countryLabel": "Country *", "countryPlaceholder": "Select a country", "countries": ["Qozogʻiston", "Qirgʻiziston", "Tojikiston", "Hindiston", "Pokiston", "Rossiya", "Boshqa"], "regionLabel": "Region *", "regionPlaceholder": "Select a region", "regions": ["Toshkent shahri", "Qoraqalpogʻiston Respublikasi", "Andijon viloyati", "Buxoro viloyati", "Fargʻona viloyati", "Jizzax viloyati", "Namangan viloyati", "Navoiy viloyati", "Qashqadaryo viloyati", "Samarqand viloyati", "Sirdaryo viloyati", "Surxondaryo viloyati", "Toshkent viloyati", "Xorazm viloyati"], "phoneLabel": "Phone *", "phonePlaceholder": "+998 __ ___ __ __", "levelLabel": "Level *", "levelPlaceholder": "Select a level", "programLabel": "Program *", "messageLabel": "Comment", "messagePlaceholder": "Your question or comment", "consent": "I agree to the use of my personal data.", "submit": "Apply now", "requiredError": "Please enter your name and phone number.", "success": "Demo mode: the application was saved to the admin panel.", "invalid": "Please fill in all required fields.", "sending": "Sending application...", "sent": "Your application has been sent successfully.", "failed": "The application was not sent. Please try again later."}, "customBlocks": {"kicker": "Important sections", "title": "Key university opportunities", "items": [{"title": "Modern laboratories", "text": "Students develop practical skills in modern laboratories.", "image": ""}, {"title": "International environment", "text": "International standards are used in the learning process.", "image": ""}]}, "footer": {"contacts": "Contacts", "useful": "Useful links", "social": "Social media", "gov": "State Testing Center", "id": "Unified identification system", "mygov": "Unified interactive public services", "copyright": "© 2026 Bukhara Innovative Education and Medical University", "top": "Back to top ↑"}}}};
const LANGS = ["uz","ru","en"];

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const clone = (v) => JSON.parse(JSON.stringify(v));

let activeLang = "uz";
let adminPassword = sessionStorage.getItem("bitu_admin_password") || "";
let siteData = loadSiteData();
let leads = loadLeads();

function deepMerge(target, source) {
  if (!source || typeof source !== "object" || Array.isArray(source)) return target;
  Object.keys(source).forEach(key => {
    const value = source[key];
    if (Array.isArray(value)) target[key] = clone(value);
    else if (value && typeof value === "object") {
      target[key] = deepMerge(target[key] && typeof target[key] === "object" && !Array.isArray(target[key]) ? target[key] : {}, value);
    } else target[key] = value;
  });
  return target;
}

function normalize(raw) {
  const base = clone(DEFAULT_DATA);
  if (!raw) return base;
  if (raw.common || raw.i18n) {
    deepMerge(base, raw);
    LANGS.forEach(lang => {
      base.i18n[lang] = deepMerge(clone(DEFAULT_DATA.i18n[lang]), base.i18n[lang] || {});
    });
    base.common = deepMerge(clone(DEFAULT_DATA.common), base.common || {});
  }
  return base;
}

function loadSiteData() {
  try { return normalize(JSON.parse(localStorage.getItem(STORAGE_SITE)) || DEFAULT_DATA); }
  catch(e) { return clone(DEFAULT_DATA); }
}

function loadLeads() {
  try { return JSON.parse(localStorage.getItem(STORAGE_LEADS) || "[]"); }
  catch(e) { return []; }
}

async function apiCheckPassword(password) {
  try {
    const res = await fetch("/.netlify/functions/check-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    return res.ok;
  } catch (error) {
    return password === DEMO_PASSWORD;
  }
}

async function apiLoadSiteData() {
  try {
    const res = await fetch("/.netlify/functions/site-data", { cache: "no-store" });
    if (!res.ok) throw new Error("Site data API error");
    siteData = normalize(await res.json());
    localStorage.setItem(STORAGE_SITE, JSON.stringify(siteData));
  } catch (error) {
    siteData = loadSiteData();
  }
}

async function apiSaveSiteData() {
  const res = await fetch("/.netlify/functions/site-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-admin-password": adminPassword
    },
    body: JSON.stringify(siteData)
  });
  if (!res.ok) throw new Error("Saqlashda xatolik");
  localStorage.setItem(STORAGE_SITE, JSON.stringify(siteData));
}

async function apiLoadLeads() {
  try {
    const res = await fetch("/.netlify/functions/leads", {
      headers: { "x-admin-password": adminPassword },
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Lead API error");
    leads = await res.json();
    localStorage.setItem(STORAGE_LEADS, JSON.stringify(leads));
  } catch (error) {
    leads = loadLeads();
  }
}

async function apiUploadFile(file) {
  const dataUrl = await fileToDataUrl(file);
  try {
    const res = await fetch("/.netlify/functions/media", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": adminPassword
      },
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type,
        dataUrl
      })
    });
    if (!res.ok) throw new Error("Media API error");
    const result = await res.json();
    return result.url || dataUrl;
  } catch (error) {
    return dataUrl;
  }
}


function saveSiteData() {
  localStorage.setItem(STORAGE_SITE, JSON.stringify(siteData));
}

function langData() { return siteData.i18n[activeLang]; }

function get(obj, path) {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function set(obj, path, value) {
  const parts = path.split(".");
  let cur = obj;
  parts.slice(0, -1).forEach(key => {
    if (cur[key] === undefined || cur[key] === null) cur[key] = {};
    cur = cur[key];
  });
  cur[parts[parts.length - 1]] = value;
}

function esc(v) {
  return String(v ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

function attr(v) {
  return String(v ?? "").replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;");
}

function fileToDataUrl(file){
  return new Promise((resolve,reject)=>{
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function syncMediaPreviews(){
  const logo = $("#logoPreview");
  if(logo) logo.src = siteData.common.logoImage || "assets/bitu-logo.png";
  const poster = $("#heroPosterPreview");
  if(poster) poster.src = siteData.common.heroPoster || "";
  const video = $("#heroVideoPreview");
  if(video) video.src = siteData.common.heroVideo || "";
}

function bindCommonUpload(inputId, key, message){
  const input = $("#" + inputId);
  if(!input) return;
  input.addEventListener("change", async e => {
    const file = e.target.files && e.target.files[0];
    if(!file) return;
    try{
      siteData.common[key] = await apiUploadFile(file);
      fillFields();
      syncMediaPreviews();
      showNotice(message || "Fayl yuklandi. Saqlashni bosing.");
    }catch(err){
      console.error(err);
      showNotice("Fayl yuklanmadi. Fayl hajmi katta bo‘lishi mumkin.", "err");
    }
  });
}

function uploadNewsImage(item){
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = async () => {
    const file = input.files && input.files[0];
    if(!file) return;
    try{
      item.image = await apiUploadFile(file);
      renderNews();
      showNotice("Rasm yuklandi. Saqlashni bosing.");
    }catch(err){
      console.error(err);
      showNotice("Rasm yuklanmadi. Fayl hajmi katta bo‘lishi mumkin.", "err");
    }
  };
  input.click();
}


function showNotice(text, type="ok") {
  const box = $("#mainNotice");
  if (!box) return;
  box.textContent = text;
  box.className = "notice " + (type === "ok" ? "ok" : "err");
}

function collectFields() {
  $$("[data-bind]").forEach(input => set(langData(), input.dataset.bind, input.value));
  $$("[data-common-bind]").forEach(input => set(siteData.common, input.dataset.commonBind, input.value));
}

function fillFields() {
  $$("[data-bind]").forEach(input => input.value = get(langData(), input.dataset.bind) ?? "");
  $$("[data-common-bind]").forEach(input => input.value = get(siteData.common, input.dataset.commonBind) ?? "");
  $$(".admin-lang").forEach(btn => btn.classList.toggle("is-active", btn.dataset.lang === activeLang));
}

function renderFeatures() {
  const box = $("#featuresEditor");
  if (!box) return;
  box.innerHTML = "";
  const list = langData().about.features || (langData().about.features = []);
  list.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "repeat-item";
    div.innerHTML = `<div class="repeat-head"><b>Afzallik ${index + 1}</b><button class="danger" type="button">O‘chirish</button></div><input value="${attr(item)}" />`;
    div.querySelector("input").oninput = e => list[index] = e.target.value;
    div.querySelector("button").onclick = () => { list.splice(index, 1); renderFeatures(); };
    box.appendChild(div);
  });
}

function renderPrograms() {
  const box = $("#programsEditor");
  if (!box) return;
  box.innerHTML = "";
  const list = langData().programs || (langData().programs = []);
  list.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "repeat-item";
    div.innerHTML = `
      <div class="repeat-head"><b>${esc(p.name || "Yo‘nalish")} #${index + 1}</b><button class="danger" type="button">O‘chirish</button></div>
      <div class="mini-grid">
        <label>Bosqich<select data-k="stage"><option value="bachelor">Bakalavr</option><option value="master">Magistratura</option><option value="residency">Ordinatura</option></select></label>
        <label>Kod<input data-k="code" value="${attr(p.code)}" /></label>
        <label class="wide">Nomi<input data-k="name" value="${attr(p.name)}" /></label>
        <label>Davomiyligi<input data-k="duration" value="${attr(p.duration)}" /></label>
        <label>Narxi<input data-k="price" value="${attr(p.price)}" /></label>
      </div>`;
    div.querySelector('[data-k="stage"]').value = p.stage || "bachelor";
    div.querySelectorAll("[data-k]").forEach(el => {
      el.oninput = el.onchange = e => p[e.target.dataset.k] = e.target.value;
    });
    div.querySelector("button").onclick = () => { list.splice(index, 1); renderPrograms(); };
    box.appendChild(div);
  });
}

function renderFaq() {
  const box = $("#faqEditor");
  if (!box) return;
  box.innerHTML = "";
  const list = langData().faq.items || (langData().faq.items = []);
  list.forEach((f, index) => {
    const div = document.createElement("div");
    div.className = "repeat-item";
    div.innerHTML = `<div class="repeat-head"><b>FAQ #${index + 1}</b><button class="danger" type="button">O‘chirish</button></div>
      <div class="form-grid">
        <label>Savol<input data-k="question" value="${attr(f.question)}" /></label>
        <label class="full">Javob<textarea data-k="answer">${esc(f.answer)}</textarea></label>
      </div>`;
    div.querySelectorAll("[data-k]").forEach(el => el.oninput = e => f[e.target.dataset.k] = e.target.value);
    div.querySelector("button").onclick = () => { list.splice(index, 1); renderFaq(); };
    box.appendChild(div);
  });
}

function renderNews() {
  const box = $("#newsEditor");
  if (!box) return;
  box.innerHTML = "";
  const list = langData().news.items || (langData().news.items = []);
  list.forEach((n, index) => {
    const div = document.createElement("div");
    div.className = "repeat-item";
    div.innerHTML = `<div class="repeat-head"><b>Yangilik ${index + 1}</b><button class="danger" type="button">O‘chirish</button></div>
      <div class="form-grid">
        <label>Sana<input data-k="date" value="${attr(n.date)}" /></label>
        <label class="full">Sarlavha<input data-k="title" value="${attr(n.title)}" /></label>
        <label class="full">Matn<textarea data-k="text">${esc(n.text)}</textarea></label>
        <label class="full">Rasm yo‘li<input data-k="image" value="${attr(n.image)}" /></label>
        <div class="media-preview full compact">${n.image ? `<img src="${attr(n.image)}" alt="Yangilik rasmi">` : `<div class="placeholder">Rasm yo‘q</div>`}</div>
      </div>
      <button class="soft upload-news-image" type="button">Rasm yuklash</button>`;
    div.querySelectorAll("[data-k]").forEach(el => el.oninput = e => n[e.target.dataset.k] = e.target.value);
    const deleteBtn = div.querySelector(".repeat-head .danger");
    if(deleteBtn) deleteBtn.onclick = () => { list.splice(index, 1); renderNews(); };
    const uploadBtn = div.querySelector(".upload-news-image");
    if(uploadBtn) uploadBtn.onclick = () => uploadNewsImage(n);
    box.appendChild(div);
  });
}

function renderLeads() {
  const query = ($("#leadSearch")?.value || "").toLowerCase();
  const filtered = leads.filter(l => [l.name,l.phone,l.stage,l.program,l.message].join(" ").toLowerCase().includes(query));
  if ($("#leadTotal")) $("#leadTotal").textContent = leads.length;
  if ($("#leadToday")) $("#leadToday").textContent = leads.filter(l => new Date(l.createdAt).toDateString() === new Date().toDateString()).length;
  if ($("#leadLast")) $("#leadLast").textContent = leads[0] ? new Date(leads[0].createdAt).toLocaleString("uz-UZ") : "—";
  if ($("#leadsTable")) {
    $("#leadsTable").innerHTML = filtered.length ? filtered.map(l => `<tr><td>${new Date(l.createdAt).toLocaleString("uz-UZ")}</td><td>${esc(l.name)}</td><td>${esc(l.phone)}</td><td>${esc(l.stage)}</td><td>${esc(l.program)}</td><td>${esc(l.message)}</td></tr>`).join("") : `<tr><td colspan="6">Ariza topilmadi</td></tr>`;
  }
}

function renderAll() {
  fillFields();
  syncMediaPreviews();
  renderFeatures();
  renderPrograms();
  renderFaq();
  renderNews();
  renderLeads();
}

function switchLang(lang) {
  collectFields();
  activeLang = lang;
  renderAll();
  showNotice("Tahrirlash tili: " + lang);
}

function downloadLeads() {
  const rows = [["Vaqt","Ism","Telefon","Bosqich","Yo‘nalish","Izoh"], ...leads.map(l => [l.createdAt,l.name,l.phone,l.stage,l.program,l.message])];
  const csv = rows.map(r => r.map(c => `"${String(c || "").replaceAll('"','""')}"`).join(",")).join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob(["\uFEFF" + csv], {type:"text/csv;charset=utf-8"}));
  a.download = "bitu-arizalar.csv";
  a.click();
  URL.revokeObjectURL(a.href);
}

document.addEventListener("DOMContentLoaded", async () => {
  bindCommonUpload("logoUpload", "logoImage", "Logo yuklandi. Saqlashni bosing.");
  bindCommonUpload("heroVideoUpload", "heroVideo", "Video yuklandi. Saqlashni bosing.");
  bindCommonUpload("heroPosterUpload", "heroPoster", "Poster rasm yuklandi. Saqlashni bosing.");
  $$("[data-common-bind]").forEach(input => input.addEventListener("input", syncMediaPreviews));

  $("#loginForm")?.addEventListener("submit", async e => {
    e.preventDefault();
    const password = new FormData(e.target).get("password");
    const ok = await apiCheckPassword(password);
    if (ok) {
      adminPassword = String(password);
      sessionStorage.setItem("bitu_admin_password", adminPassword);
      sessionStorage.setItem("bitu_demo_admin", "1");
      $("#loginCard").hidden = true;
      $("#dashboard").hidden = false;
      await apiLoadSiteData();
      await apiLoadLeads();
      renderAll();
      showNotice("Admin panel ochildi. Online baza ulangan.");
    } else {
      const n = $("#loginNotice");
      n.textContent = "Parol noto‘g‘ri.";
      n.className = "notice err";
    }
  });

  $("#logoutBtn")?.addEventListener("click", () => {
    sessionStorage.removeItem("bitu_demo_admin");
    sessionStorage.removeItem("bitu_admin_password");
    location.reload();
  });

  $("#saveBtn")?.addEventListener("click", async () => {
    collectFields();
    try {
      await apiSaveSiteData();
      localStorage.setItem("bitu_selected_language", activeLang);
      showNotice("Saqlandi. Endi hamma odamda bir xil ko‘rinadi.");
    } catch (error) {
      console.error(error);
      showNotice("Saqlanmadi. Parol yoki internetni tekshiring.", "err");
    }
  });

  $("#refreshBtn")?.addEventListener("click", async () => {
    await apiLoadSiteData();
    await apiLoadLeads();
    renderAll();
    showNotice("Online bazadan yangilandi.");
  });

  $("#resetBtn")?.addEventListener("click", () => {
    if (confirm("Barcha CMS o‘zgarishlari default holatga qaytsinmi?")) {
      localStorage.removeItem(STORAGE_SITE);
      siteData = clone(DEFAULT_DATA);
      renderAll();
      showNotice("Default holat tiklandi. Endi Saqlashni bosing.");
    }
  });

  $$(".admin-lang").forEach(btn => btn.addEventListener("click", () => switchLang(btn.dataset.lang)));

  $("#addFeatureBtn")?.addEventListener("click", () => {
    langData().about.features.push("Yangi afzallik");
    renderFeatures();
  });

  $("#addProgramBtn")?.addEventListener("click", () => {
    langData().programs.push({stage:"bachelor", code:"", name:"Yangi yo‘nalish", duration:"", price:""});
    renderPrograms();
  });

  $("#addFaqBtn")?.addEventListener("click", () => {
    langData().faq.items.push({question:"Yangi savol", answer:"Javob"});
    renderFaq();
  });

  $("#addNewsBtn")?.addEventListener("click", () => {
    langData().news.items.push({date:new Date().toLocaleDateString("uz-UZ"), title:"Yangi yangilik", text:"Matn", image:""});
    renderNews();
  });

  $("#leadSearch")?.addEventListener("input", renderLeads);
  $("#downloadLeadsBtn")?.addEventListener("click", downloadLeads);

  $$(".nav-item").forEach(btn => btn.addEventListener("click", () => {
    $$(".nav-item").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    $$(".tab-panel").forEach(p => p.classList.remove("is-active"));
    document.querySelector(`[data-panel="${btn.dataset.tab}"]`)?.classList.add("is-active");
  }));

  if (sessionStorage.getItem("bitu_demo_admin") === "1" && adminPassword) {
    $("#loginCard").hidden = true;
    $("#dashboard").hidden = false;
    await apiLoadSiteData();
    await apiLoadLeads();
    renderAll();
  }
});

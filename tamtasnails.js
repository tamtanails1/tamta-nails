/* ==============================
   საერთო: მოძრაობის პარამეტრი და დამხმარე ფუნქციები
   ============================== */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

// JS ჩაიტვირთა — CSS-ს ვატყობინებთ, რომ გამოჩენის ანიმაციები ჩართოს
document.documentElement.classList.add("js");

/* ==============================
   თარგმანები: ქართული, ინგლისური, რუსული
   ============================== */
const translations = {
    ka: {
        skip: "მთავარ შინაარსზე გადასვლა",
        navWorks: "ნამუშევრები",
        navServices: "სერვისები",
        navContact: "კონტაქტი",
        ctaBook: "ჩაწერა",
        ctaBookLong: "ჩაეწერე ვიზიტზე",
        ctaPrices: "ფასები",
        heroEyebrow: "მანიკურის სალონი · ბათუმი",
        heroTitle: "სილამაზე დეტალებშია",
        heroSlogan: "აღმოაჩინე შენი სილამაზის სივრცე — სადაც სისუფთავე, ხარისხი, გამორჩეული დიზაინები და მშვიდი გარემო ერთმანეთს ერწყმის.",
        heroAlt: "რძისფერი ნუშის ფორმის ფრჩხილები მარგალიტებით",
        heroBadge: "ყოველდღე",
        worksEyebrow: "ნამუშევრები",
        metaStyle: "სტილი",
        metaShape: "ფორმა",
        metaService: "სერვისი",
        railHint: "გადაათრიე ან გამოიყენე ისრები",
        railLabel: "ნამუშევრების გალერეა — გამოიყენე ისრები",
        valuesTitle: "თავდაჯერებულობა — მოვლილ ხელებში",
        val1Title: "სისუფთავე",
        val1Text: "ინსტრუმენტების სტერილიზაცია და ერთჯერადი მასალები ყოველი ვიზიტისთვის.",
        val2Title: "ხარისხი",
        val2Text: "გამძლე საფარი და ფრთხილი მუშაობა, რომ ფრჩხილები ჯანსაღი დარჩეს.",
        val3Title: "შენი დიზაინი",
        val3Text: "მინიმალისტური ფრენჩიდან დეტალურ ხელნაკეთ დიზაინამდე — შენს სტილზე მორგებით.",
        teaserEyebrow: "პოპულარული",
        teaserTitle: "ფასები",
        teaserAll: "ყველა სერვისი",
        contactTitle: "დაგვიკავშირდით",
        contactLocationTitle: "სამუშაო საათები და ლოკაცია",
        lblAddress: "მისამართი",
        lblHours: "საათები",
        address: "ქ. ბათუმი, პუშკინის ქუჩა 158ა",
        hours: "ყოველდღე 10:00–20:00",
        phoneText: "ტელეფონი",
        socialTitle: "გამოგვყევით",
        socialText: "მოგვწერეთ ან ნახეთ ახალი ნამუშევრები:",
        footerText: "ყველა უფლება დაცულია.",
        homeLabel: "Tamta Nails — მთავარი",
        menuLabel: "მენიუ",
        languageLabel: "ენის არჩევა",
        previousWork: "წინა ნამუშევარი",
        nextWork: "შემდეგი ნამუშევარი",
        pricesLabel: "ფასები",
        videoLabel: "სალონის ნამუშევრის ვიდეო",

        // სერვისების გვერდი
        servEyebrow: "სერვისები · ფასები",
        servLead: "ყველა პროცედურა სრულდება სტერილური ინსტრუმენტებით და ხარისხიანი მასალებით. დიზაინის ფასი დამოკიდებულია სირთულეზე.",
        services_title: "ჩვენი სერვისები",
        grpMani: "მანიკური და დიზაინი",
        grpExt: "დაგრძელება",
        grpRemove: "მოხსნა",
        serv_shellac_base: "შილაკი გამაგრებით და ერთფერში",
        serv_shellac_design: "გამაგრებით და მარტივი დიზაინით",
        serv_clean: "მხოლოდ მოწესრიგება",
        serv_design: "დიზაინი",
        serv_ext: "დაგრძელება (1, 2, 3 ზომა)",
        serv_ext_corr: "დაგრძელების კორექცია",
        serv_model: "ფრჩხილის მოდელირება",
        serv_rem_other: "სხვისი გაკეთებულის მოხსნა",
        serv_rem_ext: "დაგრძელების მოხსნა",
        serv_rem_pedi: "პედიკურის მოხსნა",
        pageTitleHome: "Tamta Nails — მანიკურის სალონი ბათუმში",
        pageTitleServices: "სერვისები და ფასები — Tamta Nails"
    },
    en: {
        skip: "Skip to main content",
        navWorks: "Works",
        navServices: "Services",
        navContact: "Contact",
        ctaBook: "Book",
        ctaBookLong: "Book a visit",
        ctaPrices: "Prices",
        heroEyebrow: "Nail studio · Batumi",
        heroTitle: "Beauty is in the details",
        heroSlogan: "Discover your beauty space — where cleanliness, quality, unique designs and a calm atmosphere come together.",
        heroAlt: "Milky almond-shaped nails with pearls",
        heroBadge: "Every day",
        worksEyebrow: "Our works",
        metaStyle: "Style",
        metaShape: "Shape",
        metaService: "Service",
        railHint: "Drag or use the arrows",
        railLabel: "Works gallery — use arrow keys",
        valuesTitle: "Confidence lives in well-groomed hands",
        val1Title: "Cleanliness",
        val1Text: "Sterilised tools and single-use materials for every visit.",
        val2Title: "Quality",
        val2Text: "Long-lasting coating and gentle work that keeps your nails healthy.",
        val3Title: "Your design",
        val3Text: "From a minimalist French to detailed hand-painted art — tailored to your style.",
        teaserEyebrow: "Popular",
        teaserTitle: "Prices",
        teaserAll: "All services",
        contactTitle: "Contact us",
        contactLocationTitle: "Hours & location",
        lblAddress: "Address",
        lblHours: "Hours",
        address: "158A Pushkin Street, Batumi",
        hours: "Every day 10:00–20:00",
        phoneText: "Phone",
        socialTitle: "Follow us",
        socialText: "Write to us or see our latest works:",
        footerText: "All rights reserved.",
        homeLabel: "Tamta Nails — home",
        menuLabel: "Menu",
        languageLabel: "Choose language",
        previousWork: "Previous work",
        nextWork: "Next work",
        pricesLabel: "Prices",
        videoLabel: "Video of the salon's nail art",

        servEyebrow: "Services · Prices",
        servLead: "Every procedure is done with sterilised tools and quality materials. Design price depends on complexity.",
        services_title: "Our services",
        grpMani: "Manicure & design",
        grpExt: "Extensions",
        grpRemove: "Removal",
        serv_shellac_base: "Shellac with strengthening (one colour)",
        serv_shellac_design: "Strengthening with simple design",
        serv_clean: "Cleaning only",
        serv_design: "Nail design",
        serv_ext: "Extensions (size 1, 2, 3)",
        serv_ext_corr: "Extension correction",
        serv_model: "Nail modelling",
        serv_rem_other: "Removal of another master's work",
        serv_rem_ext: "Extension removal",
        serv_rem_pedi: "Pedicure removal",
        pageTitleHome: "Tamta Nails — nail studio in Batumi",
        pageTitleServices: "Services & prices — Tamta Nails"
    },
    ru: {
        skip: "Перейти к содержанию",
        navWorks: "Работы",
        navServices: "Услуги",
        navContact: "Контакты",
        ctaBook: "Запись",
        ctaBookLong: "Записаться",
        ctaPrices: "Цены",
        heroEyebrow: "Ногтевая студия · Батуми",
        heroTitle: "Красота в деталях",
        heroSlogan: "Откройте своё пространство красоты — где чистота, качество, уникальный дизайн и спокойная атмосфера сливаются воедино.",
        heroAlt: "Молочные ногти миндалевидной формы с жемчугом",
        heroBadge: "Ежедневно",
        worksEyebrow: "Наши работы",
        metaStyle: "Стиль",
        metaShape: "Форма",
        metaService: "Услуга",
        railHint: "Перетащите или используйте стрелки",
        railLabel: "Галерея работ — используйте стрелки",
        valuesTitle: "Уверенность — в ухоженных руках",
        val1Title: "Чистота",
        val1Text: "Стерилизация инструментов и одноразовые материалы для каждого визита.",
        val2Title: "Качество",
        val2Text: "Стойкое покрытие и бережная работа, чтобы ногти оставались здоровыми.",
        val3Title: "Ваш дизайн",
        val3Text: "От минималистичного френча до детальной ручной росписи — под ваш стиль.",
        teaserEyebrow: "Популярное",
        teaserTitle: "Цены",
        teaserAll: "Все услуги",
        contactTitle: "Свяжитесь с нами",
        contactLocationTitle: "Часы работы и адрес",
        lblAddress: "Адрес",
        lblHours: "Часы",
        address: "г. Батуми, улица Пушкина, 158а",
        hours: "Ежедневно 10:00–20:00",
        phoneText: "Телефон",
        socialTitle: "Подписывайтесь",
        socialText: "Напишите нам или посмотрите новые работы:",
        footerText: "Все права защищены.",
        homeLabel: "Tamta Nails — главная",
        menuLabel: "Меню",
        languageLabel: "Выбрать язык",
        previousWork: "Предыдущая работа",
        nextWork: "Следующая работа",
        pricesLabel: "Цены",
        videoLabel: "Видео работ ногтевой студии",

        servEyebrow: "Услуги · Цены",
        servLead: "Все процедуры выполняются стерильными инструментами и качественными материалами. Цена дизайна зависит от сложности.",
        services_title: "Наши услуги",
        grpMani: "Маникюр и дизайн",
        grpExt: "Наращивание",
        grpRemove: "Снятие",
        serv_shellac_base: "Шеллак с укреплением (однотонный)",
        serv_shellac_design: "Укрепление и простой дизайн",
        serv_clean: "Только обработка",
        serv_design: "Дизайн ногтей",
        serv_ext: "Наращивание (размер 1, 2, 3)",
        serv_ext_corr: "Коррекция наращивания",
        serv_model: "Моделирование ногтей",
        serv_rem_other: "Снятие чужой работы",
        serv_rem_ext: "Снятие наращивания",
        serv_rem_pedi: "Снятие педикюра",
        pageTitleHome: "Tamta Nails — ногтевая студия в Батуми",
        pageTitleServices: "Услуги и цены — Tamta Nails"
    }
};

/* ==============================
   ნამუშევრების მონაცემები კარუსელისთვის (თანმიმდევრობა = data-id)
   ============================== */
const works = [
    { ka: ["ოქროს აქცენტები", "ნუდი + ოქრო", "ნუში", "დაგრძელება"],
      en: ["Golden accents", "Nude + gold", "Almond", "Extensions"],
      ru: ["Золотые акценты", "Нюд + золото", "Миндаль", "Наращивание"] },
    { ka: ["ოქროსფერი ფრენჩი", "ფრენჩი, დეკორი", "კვადრატი", "გამაგრება + დიზაინი"],
      en: ["Golden French", "French, décor", "Square", "Strengthening + design"],
      ru: ["Золотой френч", "Френч, декор", "Квадрат", "Укрепление + дизайн"] },
    { ka: ["წერტილები და ოქრო", "მიქსი, დეკორი", "კვადრატი", "დიზაინი"],
      en: ["Dots & gold", "Mix, décor", "Square", "Nail design"],
      ru: ["Точки и золото", "Микс, декор", "Квадрат", "Дизайн"] },
    { ka: ["წითელი ყვავილი", "ხელით მოხატვა", "ნუში", "დიზაინი"],
      en: ["Red blossom", "Hand-painted", "Almond", "Nail design"],
      ru: ["Красный цветок", "Ручная роспись", "Миндаль", "Дизайн"] },
    { ka: ["ნაზი წერტილები", "მინიმალიზმი", "კვადრატი", "დაგრძელება"],
      en: ["Soft dots", "Minimalism", "Square", "Extensions"],
      ru: ["Нежные точки", "Минимализм", "Квадрат", "Наращивание"] },
    { ka: ["ბორდოს ქრომი", "ქრომი, ხაზები", "სტილეტო", "მოდელირება"],
      en: ["Burgundy chrome", "Chrome, lines", "Stiletto", "Nail modelling"],
      ru: ["Бордовый хром", "Хром, линии", "Стилет", "Моделирование"] },
    { ka: ["ვარდისფერი ყვავილები", "ფრენჩი, მოხატვა", "სტილეტო", "დაგრძელება"],
      en: ["Pink blossoms", "French, hand-painted", "Stiletto", "Extensions"],
      ru: ["Розовые цветы", "Френч, роспись", "Стилет", "Наращивание"] }
];

/* ==============================
   ენის შენახვა/წაკითხვა (localStorage შეიძლება დაბლოკილი იყოს — try/catch)
   ============================== */
function getSavedLang() {
    try { return localStorage.getItem("tamtas-lang"); } catch (e) { return null; }
}
function saveLang(lang) {
    try { localStorage.setItem("tamtas-lang", lang); } catch (e) { /* უბრალოდ არ ვინახავთ */ }
}

const isSupportedLang = lang => Object.prototype.hasOwnProperty.call(translations, lang);
const savedLang = getSavedLang();
let currentLang = isSupportedLang(savedLang) ? savedLang : "ka";
let onLangChange = () => {}; // კარუსელი აქ ჩაწერს საკუთარ განახლებას

/* ==============================
   ენის გამოყენება: ტექსტები, alt/aria ატრიბუტები, გვერდის სათაური
   ============================== */
function applyLanguage(lang) {
    lang = isSupportedLang(lang) ? lang : "ka";
    const dict = translations[lang];
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
        const key = el.dataset.i18nAlt;
        if (dict[key]) el.alt = dict[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
        const key = el.dataset.i18nAria;
        if (dict[key]) el.setAttribute("aria-label", dict[key]);
    });

    // გვერდის სათაური ბრაუზერის ჩანართში
    const isServices = document.body.querySelector(".hero-services");
    document.title = dict[isServices ? "pageTitleServices" : "pageTitleHome"];

    const sel = document.getElementById("lang-switch");
    if (sel) sel.value = lang;
    onLangChange();
}

/* ==============================
   ჰედერი: ფონი სქროლისას + მობილური მენიუ
   ============================== */
function initHeader() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("site-nav");
    if (!header || !toggle || !nav) return;
    const desktop = matchMedia("(min-width: 961px)");
    const background = [...document.querySelectorAll("main, .site-footer, .skip-link")];
    const previousInert = new Map();
    let isOpen = false;

    // ფონის ჩართვა, როცა გვერდი ჩამოსქროლილია
    const onScroll = () => header.classList.toggle("scrolled", scrollY > 20);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // მენიუს გახსნა/დახურვა
    const focusableItems = () => [toggle, ...nav.querySelectorAll("a[href], button, select, [tabindex]")]
        .filter(el => !el.disabled && el.tabIndex >= 0 && el.getClientRects().length && getComputedStyle(el).visibility !== "hidden");
    const setOpen = (open, restoreFocus = true) => {
        open = Boolean(open && !desktop.matches);
        if (open === isOpen) return;
        isOpen = open;
        toggle.setAttribute("aria-expanded", String(open));
        nav.classList.toggle("open", open);
        document.body.classList.toggle("menu-open", open);
        if (open) {
            background.forEach(el => { previousInert.set(el, el.inert); el.inert = true; });
            const firstLink = nav.querySelector("a[href]");
            if (firstLink) firstLink.focus({ preventScroll: true });
        } else {
            background.forEach(el => { el.inert = previousInert.get(el) || false; });
            previousInert.clear();
            if (restoreFocus && !desktop.matches) toggle.focus({ preventScroll: true });
        }
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    // ბმულზე დაჭერისას ან Escape-ზე მენიუ იხურება
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setOpen(false, false)));
    addEventListener("keydown", e => {
        if (!isOpen) return;
        if (e.key === "Escape") { e.preventDefault(); setOpen(false); return; }
        if (e.key !== "Tab") return;
        const items = focusableItems();
        const first = items[0], last = items[items.length - 1];
        if (!first) return;
        if (!items.includes(document.activeElement)) {
            e.preventDefault(); first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
            e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault(); first.focus();
        }
    });
    document.addEventListener("focusin", e => {
        if (isOpen && e.target !== toggle && !nav.contains(e.target)) {
            const firstLink = nav.querySelector("a[href]");
            if (firstLink) firstLink.focus({ preventScroll: true });
        }
    });
    // ეკრანის გაფართოებისას მენიუს მდგომარეობა სუფთავდება
    const onDesktopChange = e => { if (e.matches) setOpen(false, false); };
    if (desktop.addEventListener) desktop.addEventListener("change", onDesktopChange);
    else desktop.addListener(onDesktopChange);
}

/* ==============================
   სქროლზე გამოჩენა: IntersectionObserver ამატებს .visible კლასს
   ============================== */
function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
        items.forEach(el => el.classList.add("visible"));
        return;
    }
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            e.target.classList.add("visible");
            obs.unobserve(e.target);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 80}ms`; // მცირე დაყოვნება რიგში
        obs.observe(el);
    });
}

/* ==============================
   კარუსელი: გადათრევა, ინერცია, დახრა, აქტიური ბარათი და მეტამონაცემები
   ============================== */
function initCarousel() {
    const rail = document.getElementById("rail");
    if (!rail) return; // სერვისების გვერდზე კარუსელი არ არის

    const viewport = rail.parentElement;
    const objs = [...rail.querySelectorAll(".obj")];
    if (!objs.length) return;
    const titleEl = document.getElementById("meta-title");
    const styleEl = document.getElementById("meta-style");
    const shapeEl = document.getElementById("meta-shape");
    const serviceEl = document.getElementById("meta-service");
    const indexEl = document.getElementById("rail-index");
    document.getElementById("rail-total").textContent = String(objs.length).padStart(2, "0");

    let target = 0, current = 0, active = -1, desiredIndex = 0, titleTimer = null;
    let dragging = false, moved = false, startX = 0, startT = 0, running = false;

    // თითოეული ბარათის ცენტრის პოზიცია ზოლის დასაწყისიდან
    const centerOf = i => objs[i].offsetLeft + objs[i].offsetWidth / 2 - viewport.clientWidth / 2;
    const minX = () => centerOf(0);
    const maxX = () => centerOf(objs.length - 1);

    // უახლოესი ბარათის ინდექსი მიმდინარე პოზიციასთან
    const nearest = x => {
        let best = 0, dist = Infinity;
        objs.forEach((_, i) => { const d = Math.abs(centerOf(i) - x); if (d < dist) { dist = d; best = i; } });
        return best;
    };
    const goTo = i => {
        desiredIndex = clamp(i, 0, objs.length - 1);
        target = centerOf(desiredIndex);
        kick();
    };

    const updateOptionLabels = () => {
        objs.forEach((obj, i) => {
            const [title, style, shape, service] = works[i][currentLang];
            obj.id = `work-${i}`;
            obj.setAttribute("aria-label", `${title} — ${style}; ${shape}; ${service}`);
            const img = obj.querySelector("img");
            if (img) img.alt = title;
        });
    };

    // მეტამონაცემების ბარათის განახლება (სათაური ამოსრიალებით)
    function renderMeta(i, animate = true) {
        clearTimeout(titleTimer);
        titleEl.classList.remove("out", "in");
        const [title, style, shape, service] = works[i][currentLang] || works[i].ka;
        styleEl.textContent = style;
        shapeEl.textContent = shape;
        const link = document.createElement("a");
        link.href = "service.html";
        link.textContent = service;
        serviceEl.replaceChildren(link);
        indexEl.textContent = String(i + 1).padStart(2, "0");
        objs.forEach((o, k) => o.setAttribute("aria-selected", String(k === i)));
        rail.setAttribute("aria-activedescendant", objs[i].id);

        if (!animate || reduceMotion) { titleEl.textContent = title; return; }
        titleEl.classList.add("out");
        titleTimer = setTimeout(() => {
            titleEl.textContent = title;
            titleEl.classList.remove("out");
            titleEl.classList.add("in");
            void titleEl.offsetWidth; // ბრაუზერს ვაიძულებთ ახალი პოზიციის დაფიქსირებას
            titleEl.classList.remove("in");
        }, 200);
    }
    onLangChange = () => {
        updateOptionLabels();
        if (active >= 0) renderMeta(active, false);
    };

    // ერთი კადრი: პოზიციის გლუვი მიახლოება, დახრა და აქტიურის განსაზღვრა
    function frame() {
        const prev = current;
        current = reduceMotion ? target : lerp(current, target, 0.1);
        const velocity = current - prev;
        rail.style.transform = `translate3d(${-current}px,0,0)`;

        const vw = viewport.clientWidth;
        objs.forEach((o, i) => {
            const offset = (centerOf(i) - current) / vw; // -1..1 ეკრანის ცენტრიდან
            o.style.rotate = reduceMotion ? "0deg" : `${clamp(offset * 10 + velocity * 0.15, -14, 14)}deg`;
        });

        const idx = nearest(current);
        if (idx !== active) {
            objs.forEach((o, i) => o.classList.toggle("active", i === idx));
            renderMeta(idx, active !== -1);
            active = idx;
        }

        // ციკლი ჩერდება, როცა მოძრაობა დასრულდა (ენერგიის დაზოგვა)
        if (dragging || Math.abs(target - current) > 0.3) requestAnimationFrame(frame);
        else {
            current = target;
            rail.style.transform = `translate3d(${-current}px,0,0)`;
            running = false;
        }
    }
    function kick() { if (!running) { running = true; requestAnimationFrame(frame); } }

    // გადათრევა მაუსით / თითით
    rail.addEventListener("pointerdown", e => {
        if (dragging || (e.pointerType === "mouse" && e.button !== 0)) return;
        dragging = true; moved = false; startX = e.clientX; startT = target;
        rail.focus({ preventScroll: true });
        rail.setPointerCapture(e.pointerId);
        rail.classList.add("dragging");
        kick();
    });
    rail.addEventListener("pointermove", e => {
        if (!dragging) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 4) moved = true;
        target = clamp(startT - dx * 1.3, minX() - 80, maxX() + 80);
    });
    const endDrag = e => {
        if (!dragging) return;
        dragging = false;
        rail.classList.remove("dragging");
        // უბრალო დაჭერა (არა გადათრევა) — დაჭერილი ბარათი ხდება აქტიური
        const hit = !moved && e.type !== "pointercancel" && e.clientX != null && document.elementFromPoint(e.clientX, e.clientY);
        const obj = hit && hit.closest(".obj");
        goTo(obj ? objs.indexOf(obj) : nearest(target)); // ან უახლოეს ბარათზე "მიჭერა"
    };
    rail.addEventListener("pointerup", endDrag);
    rail.addEventListener("pointercancel", endDrag);

    // ჰორიზონტალური სქროლი ტრეკპადით (ვერტიკალურ სქროლს არ ვიჭერთ)
    rail.addEventListener("wheel", e => {
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
        e.preventDefault();
        target = clamp(target + e.deltaX, minX(), maxX());
        desiredIndex = nearest(target);
        kick();
        clearTimeout(rail._snap);
        rail._snap = setTimeout(() => goTo(nearest(target)), 160);
    }, { passive: false });

    // კლავიატურით მართვა
    rail.addEventListener("keydown", e => {
        if (e.key === "ArrowRight") { e.preventDefault(); goTo(desiredIndex + 1); }
        if (e.key === "ArrowLeft") { e.preventDefault(); goTo(desiredIndex - 1); }
        if (e.key === "Home") { e.preventDefault(); goTo(0); }
        if (e.key === "End") { e.preventDefault(); goTo(objs.length - 1); }
    });
    document.getElementById("rail-prev").addEventListener("click", () => goTo(desiredIndex - 1));
    document.getElementById("rail-next").addEventListener("click", () => goTo(desiredIndex + 1));

    // ეკრანის ზომის ცვლილებისას აქტიური ბარათი ცენტრში რჩება
    addEventListener("resize", () => { target = current = centerOf(desiredIndex); kick(); });

    // საწყისი მდგომარეობა: მეორე ბარათი ცენტრში, რომ ორივე მხარეს რაღაც ჩანდეს
    // (active მაშინვე ფიქსირდება, რომ resize-მა პირველ კადრამდე პოზიცია არ აურიოს)
    active = desiredIndex = Math.min(1, objs.length - 1);
    updateOptionLabels();
    objs.forEach((o, i) => o.classList.toggle("active", i === active));
    renderMeta(active, false);
    target = current = centerOf(active);
    kick();
}

/* ==============================
   ვიდეო: თუ ავტომატური ჩართვა დაიბლოკა, poster სურათი რჩება
   ============================== */
function initVideo() {
    document.querySelectorAll("video[autoplay]").forEach(v => {
        if (reduceMotion) { v.removeAttribute("autoplay"); v.pause(); return; }
        const p = v.play();
        if (p && p.catch) p.catch(() => { /* ბრაუზერმა დაბლოკა — poster ჩანს */ });
    });
}

/* ==============================
   გაშვება: HTML უკვე ჩატვირთულია (defer)
   ============================== */
document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
initHeader();
initReveal();
initCarousel();
initVideo();
applyLanguage(currentLang);

// ენის გადართვა
const langSwitch = document.getElementById("lang-switch");
if (langSwitch) {
    langSwitch.addEventListener("change", e => {
        const lang = isSupportedLang(e.target.value) ? e.target.value : "ka";
        saveLang(lang);
        applyLanguage(lang);
    });
    langSwitch.disabled = false;
}

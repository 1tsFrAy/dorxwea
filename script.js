// ===== НАСТРОЙКИ — заполните =====
const CFG = {
  API: "https://cold-bar-d3fcfray.hbhhbvv988.workers.dev", // адрес Cloudflare Worker
  IG: "https://www.instagram.com/dorx_tattoo/",
  TG: "https://t.me/hwsos"
};
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. СЛОВАРЬ ПЕРЕВОДОВ (5 ЯЗЫКОВ) ---
  const translations = {
    ru: {
      navAbout: "О себе",
      navServices: "Услуги",
      navPortfolio: "Портфолио ✦",
      navBook: "Записаться",
      heroSubtitle: "Tattoo Artist · Jelenia Góra",
      heroTitle: "Индивидуальные татуировки с характером",
      heroDesc: "Создаю эскизы под вашу анатомию. Качественные материалы, полная стерильность и внимание к деталям.",
      btnWorks: "Смотреть работы",
      btnBook: "Записаться на сеанс",
      aboutTitle: "О мастере",
      aboutText: "Привет! Я Dorxwea. Для меня татуировка — это не просто рисунок на коже, а форма самовыражения и отражение вашей внутренней эстетики. Работаю как по уникальным авторским эскизам, так и воплощаю идеи клиентов.",
      servicesTitle: "Услуги и Категории",
      card1Title: "Custom Tattoo",
      card1Desc: "Разработка уникального эскиза по вашему ТЗ или референсам с учетом формы тела.",
      card2Title: "Модельные проекты",
      card2Desc: "Специальные условия и скидки на реализацию моих личных масштабных задумок.",
      card3Title: "Flash & Эскизы",
      card3Desc: "Готовые авторские эскизы, которые можно нанести на сеансе без долгих ожиданий.",
      bookingTitle: "Запись на сеанс",
      bookingDesc: "Заполните форму, и я свяжусь с вами в Telegram для обсуждения идеи и выбора даты.",
      namePlaceholder: "Ваше имя",
      contactPlaceholder: "Telegram / Телефон / Instagram",
      servicePlaceholder: "Выберите вариант",
      commentPlaceholder: "Опишите идею, примерный размер и место нанесения...",
      submitBtn: "Отправить заявку",
      rodoNotice: "Я соглашаюсь на обработку персональных данных для записи на сеанс (RODO / GDPR).",
      privacyLink: "Политика конфиденциальности (RODO)",
      privacyTitle: "Политика конфиденциальности",
      privacyText: "Администратором ваших персональных данных является MORK Tattoo. Данные, указанные в форме (имя, контакт, описание), используются исключительно для связи с вами по поводу записи на сеанс и обсуждения эскиза. Данные не передаются третьим лицам и не используются для рекламы. Вы имеете право запросить удаление своих данных в любой момент, написав мне напрямую.",
      portfolioTitle: "Работы мастера",
      portfolioDesc: "Здесь представлена подборка готовых татуировок, модельных проектов и свободных эскизов.",
      tabAll: "Все работы",
      tabCustom: "🎨 Custom",
      tabModel: "📸 Для моделей",
      tabFlash: "⚡️ Flash",
      emptyState: "В этой категории пока нет загруженных работ.",
      noDesc: "Описание отсутствует.",
      sending: "Отправка...",
      successMsg: "✅ Заявка успешно отправлена! Скоро свяжусь с вами.",
      errorMsg: "❌ Не удалось отправить заявку. Напишите напрямую.",
      modelBannerBadge: "🔥 Спецпредложение",
      modelBannerTitle: "Любишь скидки? 📸",
      modelBannerDesc: "Стань моей моделью для реализации масштабных задумок и получи скидку от 30% на сеанс!",
      modelBannerBtn: "Хочу стать моделью"
    },
    en: {
      navAbout: "About",
      navServices: "Services",
      navPortfolio: "Portfolio ✦",
      navBook: "Book Now",
      heroSubtitle: "Tattoo Artist · Jelenia Góra",
      heroTitle: "Custom Tattoos with Unique Identity",
      heroDesc: "Anatomically fitted designs, premium equipment, 100% sterility, and deep attention to detail.",
      btnWorks: "View Works",
      btnBook: "Book a Session",
      aboutTitle: "About the Artist",
      aboutText: "Hi! I'm Dorxwea. To me, a tattoo is more than skin art — it's a statement of self-expression and aesthetics. I create unique custom designs as well as bring your personal ideas to life.",
      servicesTitle: "Services & Categories",
      card1Title: "Custom Tattoo",
      card1Desc: "Bespoke design creation tailored to your idea and anatomical features.",
      card2Title: "Model Projects",
      card2Desc: "Special rates for clients ready to participate in my large-scale personal concepts.",
      card3Title: "Flash Designs",
      card3Desc: "Ready-to-ink original flash art available without long waiting times.",
      bookingTitle: "Book a Session",
      bookingDesc: "Fill out the form below and I'll get back to you via Telegram to discuss details.",
      namePlaceholder: "Your name",
      contactPlaceholder: "Telegram / Phone / Instagram",
      servicePlaceholder: "Select service",
      commentPlaceholder: "Describe your idea, placement, and preferred size...",
      submitBtn: "Submit Application",
      rodoNotice: "I agree to the processing of my personal data for session booking (GDPR / RODO).",
      privacyLink: "Privacy Policy (GDPR)",
      privacyTitle: "Privacy Policy",
      privacyText: "The administrator of your personal data is MORK Tattoo. Information provided in the booking form (name, contact, project details) is used solely to contact you regarding your appointment. Your data will never be shared with third parties or used for marketing. You have the right to request deletion of your data at any time.",
      portfolioTitle: "Portfolio",
      portfolioDesc: "A collection of finished tattoos, model concepts, and available flash designs.",
      tabAll: "All Works",
      tabCustom: "🎨 Custom",
      tabModel: "📸 For Models",
      tabFlash: "⚡️ Flash",
      emptyState: "No works uploaded in this category yet.",
      noDesc: "No description provided.",
      sending: "Sending...",
      successMsg: "✅ Application sent successfully! I will contact you soon.",
      errorMsg: "❌ Failed to send application. Please write directly.",
      modelBannerBadge: "🔥 Special Offer",
      modelBannerTitle: "Love discounts? 📸",
      modelBannerDesc: "Become my model for large-scale creative projects and get 30%+ off your session!",
      modelBannerBtn: "Become a model"
    },
    pl: {
      navAbout: "O mnie",
      navServices: "Usługi",
      navPortfolio: "Portfolio ✦",
      navBook: "Zapisz się",
      heroSubtitle: "Tattoo Artist · Jelenia Góra",
      heroTitle: "Indywidualne tatuaże z charakterem",
      heroDesc: "Tworzę projekty dopasowane do Twojej anatomii. Wysoka jakość, pełna sterylność i dbałość o detale.",
      btnWorks: "Zobacz prace",
      btnBook: "Zarezerwuj sesję",
      aboutTitle: "O artyście",
      aboutText: "Cześć! Jestem Dorxwea. Tatuaż to dla mnie coś więcej niż rysunek na skórze — to forma wyrażenia siebie i Twojej estetyki. Tworzę autorskie projekty oraz realizuję pomysły klientów.",
      servicesTitle: "Usługi i Kategorie",
      card1Title: "Custom Tattoo",
      card1Desc: "Projekt indywidualny stworzony na podstawie Twojego pomysłu i budowy ciała.",
      card2Title: "Projekty dla modeli",
      card2Desc: "Specjalne warunki i zniżki na realizację moich autorskich, dużych pomysłów.",
      card3Title: "Flash & Projekty",
      card3Desc: "Gotowe autorskie wzory dostępne do wykonania od ręki.",
      bookingTitle: "Zapisy na sesję",
      bookingDesc: "Wypełnij formularz, a skontaktuję się z Tobą na Telegramie, aby omówić szczegóły.",
      namePlaceholder: "Twoje imię",
      contactPlaceholder: "Telegram / Telefon / Instagram",
      servicePlaceholder: "Wybierz opcję",
      commentPlaceholder: "Opisz pomysł, orientacyjny rozmiar i miejsce...",
      submitBtn: "Wyślij zgłoszenie",
      rodoNotice: "Wyrażam zgodę na przetwarzanie danych osobowych w celu rezerwacji sesji (RODO).",
      privacyLink: "Polityka Prywatności (RODO)",
      privacyTitle: "Polityka Prywatności",
      privacyText: "Administratorem Twoich danych osobowych jest MORK Tattoo. Dane podane w formularzu (imię, kontakt, opis) są wykorzystywane wyłącznie w celu kontaktu w sprawie rezerwacji terminu i omówienia tatuażu. Dane nie są przekazywane podmiotom trzecim ani wykorzystywane do celów marketingowych. Masz prawo do żądania usunięcia swoich danych w dowolnym momencie.",
      portfolioTitle: "Prace artysty",
      portfolioDesc: "Kolekcja gotowych tatuaży, projektów dla modeli oraz wolnych wzorów.",
      tabAll: "Wszystkie",
      tabCustom: "🎨 Custom",
      tabModel: "📸 Dla modeli",
      tabFlash: "⚡️ Flash",
      emptyState: "Brak prac w tej kategorii.",
      noDesc: "Brak opisu.",
      sending: "Wysyłanie...",
      successMsg: "✅ Zgłoszenie wysłane! Wkrótce się skontaktuję.",
      errorMsg: "❌ Błąd wysyłania. Napisz bezpośrednio.",
      modelBannerBadge: "🔥 Oferta Specjalna",
      modelBannerTitle: "Lubisz zniżki? 📸",
      modelBannerDesc: "Zostań moją modelką/modelem do realizacji dużych projektów i zgarnij od 30% zniżki na sesję!",
      modelBannerBtn: "Chcę zostać modelem"
    },
    ua: {
      navAbout: "Про мене",
      navServices: "Послуги",
      navPortfolio: "Портфоліо ✦",
      navBook: "Записатися",
      heroSubtitle: "Tattoo Artist · Jelenia Góra",
      heroTitle: "Індивідуальні татуювання з характером",
      heroDesc: "Створюю ескізи під вашу анатомію. Якісні матеріали, повна стерильність та увага до деталей.",
      btnWorks: "Дивитися роботи",
      btnBook: "Записатися на сеанс",
      aboutTitle: "Про майстра",
      aboutText: "Привіт! Я Dorxwea. Для мене татуювання — це не просто малюнок на шкірі, а форма самовираження та відображення вашої естетики. Працюю за авторськими ескізами та втілюю ідеї клієнтів.",
      servicesTitle: "Послуги та Категорії",
      card1Title: "Custom Tattoo",
      card1Desc: "Розробка унікального ескізу за вашим ТЗ з урахуванням анатомії.",
      card2Title: "Модельні проекти",
      card2Desc: "Спеціальні умови та знижки на реалізацію моїх масштабних задумів.",
      card3Title: "Flash & Ескізи",
      card3Desc: "Готові авторські ескізи, які можна нанести на сеансі без довгого очікування.",
      bookingTitle: "Запис на сеанс",
      bookingDesc: "Заповніть форму, і я зв'яжуся з вами в Telegram для обговорення ідеї.",
      namePlaceholder: "Ваше ім'я",
      contactPlaceholder: "Telegram / Телефон / Instagram",
      servicePlaceholder: "Оберіть варіант",
      commentPlaceholder: "Опишіть ідею, приблизний розмір та місце...",
      submitBtn: "Надіслати заявку",
      rodoNotice: "Я погоджуюся на обробку персональних даних для запису на сеанс (RODO / GDPR).",
      privacyLink: "Політика конфіденційності (RODO)",
      privacyTitle: "Політика конфіденційності",
      privacyText: "Адміністратором ваших персональних даних є MORK Tattoo. Дані, вказані у формі (ім'я, контакт, опис), використовуються виключно для зв'язку з вами щодо запису на сеанс. Дані не передаються третім особам. Ви маєте право вимагати видалення своїх даних у будь-який момент.",
      portfolioTitle: "Роботи майстра",
      portfolioDesc: "Добірка готових татуювань, модельних проектів та вільних ескізів.",
      tabAll: "Усі роботи",
      tabCustom: "🎨 Custom",
      tabModel: "📸 Для моделей",
      tabFlash: "⚡️ Flash",
      emptyState: "У цій категорії поки немає завантажених робіт.",
      noDesc: "Опис відсутній.",
      sending: "Надсилання...",
      successMsg: "✅ Заявку успішно надіслано! Скоро зв'яжуся з вами.",
      errorMsg: "❌ Не вдалося надіслати заявку. Напишіть напряму.",
      modelBannerBadge: "🔥 Спецпропозиція",
      modelBannerTitle: "Любиш знижки? 📸",
      modelBannerDesc: "Стань моєю моделлю для реалізації масштабних задумів та отримай знижку від 30% на сеанс!",
      modelBannerBtn: "Хочу стати моделлю"
    }
  };


  // --- ДОПОЛНЕНИЯ / ПРАВКИ ТЕКСТОВ (меняйте здесь) ---
  const extra = {
    pl: { modelBannerDesc:"Zostań moim modelem przy realizacji większych pomysłów i otrzymaj zniżkę 80% na sesję!", card2Desc:"Zniżka 80% przy realizacji moich większych pomysłów.", card3Title:"Szkice", card4Title:"Konsultacja", card4Desc:"Omówmy pomysł, rozmiar i miejsce na ciele, zanim zaczniemy.", portfolioDesc:"Moje prace i gotowe szkice.", tabSketch:"Szkice", tabWork:"Moje prace", tOwn:"Własny projekt", tModel:"Model (−80%)", tSketch:"Szkic", tCons:"Konsultacja", from:"od", placePh:"Miejsce na ciele", commentPlaceholder:"Opisz swój pomysł...", note:"Tylko 18+. Cenę końcową ustala mistrz.", rights:"Wszelkie prawa zastrzeżone.", revTitle:"Opinie", attach:"Zobacz załączniki", hideAtt:"Ukryj załączniki" },
    ru: { modelBannerDesc:"Стань моей моделью для масштабных задумок и получи скидку 80% на сеанс!", card2Desc:"Скидка 80% на реализацию моих личных масштабных задумок.", card3Title:"Эскизы", card4Title:"Консультация", card4Desc:"Обсудим идею, размер и место на теле до начала работы.", portfolioDesc:"Мои работы и готовые эскизы.", tabSketch:"Эскизы", tabWork:"Мои работы", tOwn:"Своя татуировка", tModel:"Модель (−80%)", tSketch:"Эскиз", tCons:"Консультация", from:"от", placePh:"Место на теле", commentPlaceholder:"Опишите вашу идею...", note:"Только 18+. Итоговую цену назовёт мастер.", rights:"Все права защищены.", revTitle:"Отзывы", attach:"Посмотреть вложения", hideAtt:"Скрыть вложения" },
    ua: { modelBannerDesc:"Стань моєю моделлю для масштабних задумів і отримай знижку 80% на сеанс!", card2Desc:"Знижка 80% на реалізацію моїх особистих масштабних задумів.", card3Title:"Ескізи", card4Title:"Консультація", card4Desc:"Обговоримо ідею, розмір і місце на тілі до початку роботи.", portfolioDesc:"Мої роботи та готові ескізи.", tabSketch:"Ескізи", tabWork:"Мої роботи", tOwn:"Власне тату", tModel:"Модель (−80%)", tSketch:"Ескіз", tCons:"Консультація", from:"від", placePh:"Місце на тілі", commentPlaceholder:"Опишіть вашу ідею...", note:"Лише 18+. Остаточну ціну назве майстер.", rights:"Усі права захищено.", revTitle:"Відгуки", attach:"Переглянути вкладення", hideAtt:"Сховати вкладення" },
    en: { modelBannerDesc:"Be my model for bigger projects and get 80% off your session!", card2Desc:"80% off for realizing my own large-scale ideas.", card3Title:"Sketches", card4Title:"Consultation", card4Desc:"We discuss the idea, size and placement before we start.", portfolioDesc:"My works and ready-made sketches.", tabSketch:"Sketches", tabWork:"My works", tOwn:"My own design", tModel:"Model (−80%)", tSketch:"Sketch", tCons:"Consultation", from:"from", placePh:"Placement on body", commentPlaceholder:"Describe your idea...", note:"18+ only. The artist sets the final price.", rights:"All rights reserved.", revTitle:"Reviews", attach:"View attachments", hideAtt:"Hide attachments" }
  };
  for (const l in extra) Object.assign(translations[l], extra[l]);
  delete translations.de;

  let currentLang = localStorage.getItem('site_lang') || 'pl';

  if (!translations[currentLang]) currentLang = 'pl';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    if (window.onLangChange) window.onLangChange();
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  applyLanguage(currentLang);

  // --- 2. МОБИЛЬНОЕ МЕНЮ ---
  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // --- 3. ФОРМА ЗАПИСИ ---
  const $ = id => document.getElementById(id);
  const tr = k => (translations[currentLang] || {})[k] || '';
  const esc = x => String(x).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const SZ = [['S','≤5 cm',200],['M','5–10 cm',350],['L','10–20 cm',600],['XL','20+ cm',1000]];
  document.querySelectorAll('[data-link]').forEach(a => a.href = CFG[a.dataset.link]);
  if ($('yr')) $('yr').textContent = new Date().getFullYear();

  function fillSizes() {
    const s = $('size'); if (!s) return;
    const v = s.value || 'S';
    s.innerHTML = SZ.map(z => `<option value="${z[0]}">${z[0]} · ${z[1]} · ${tr('from')} ${z[2]} zł</option>`).join('');
    s.value = v;
  }

  const form = $('bookingForm');
  if (form) {
    const typeSel = $('service'), row = $('sizeRow');
    typeSel.addEventListener('change', () => { row.style.display = typeSel.value === 'consultation' ? 'none' : ''; });
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const st = $('formStatus'), btn = $('submitBtn');
      btn.disabled = true; btn.innerText = tr('sending'); st.innerText = '';
      const d = { name: $('name').value, contact: $('contact').value, type: typeSel.value, idea: $('comment').value, place: $('place').value, hp: $('hp').value, consent: $('rodoCheck').checked };
      if (d.type !== 'consultation') d.size = $('size').selectedOptions[0].text;
      try {
        const r = await fetch(CFG.API + '/api/apply', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
        if (!r.ok) throw 0;
        st.style.color = '#4caf50'; st.innerText = tr('successMsg');
        form.reset(); row.style.display = '';
      } catch { st.style.color = '#f44336'; st.innerText = tr('errorMsg'); }
      btn.disabled = false; btn.innerText = tr('submitBtn');
    });
  }

  // --- 4. ПОРТФОЛИО ---
  const gal = $('gallery'), modal = $('imageModal');
  let works = [], cat = 'all';

  function drawGallery() {
    if (!gal) return;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.category === cat));
    const l = cat === 'all' ? works : works.filter(w => w.cat === cat);
    gal.innerHTML = l.map(w => `<div class="gallery-card"><img src="${CFG.API}/photo/${esc(w.id)}" alt="Tattoo" loading="lazy"><div class="card-overlay"><span class="badge">${esc(tr(w.cat === 'sketch' ? 'tabSketch' : 'tabWork'))}</span>${w.desc ? `<p style="font-size:12px;color:#ccc">${esc(w.desc)}</p>` : ''}</div></div>`).join('');
    $('galleryEmpty').style.display = l.length ? 'none' : 'block';
    gal.querySelectorAll('.gallery-card').forEach((c, i) => c.addEventListener('click', () => {
      $('modalImg').src = c.querySelector('img').src;
      $('modalCategory').textContent = tr(l[i].cat === 'sketch' ? 'tabSketch' : 'tabWork');
      $('modalDesc').textContent = l[i].desc || tr('noDesc');
      modal.style.display = 'flex';
    }));
  }
  if (gal) {
    fetch(CFG.API + '/api/portfolio').then(r => r.json()).then(x => { works = x; drawGallery(); }).catch(() => {});
    document.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', () => { cat = b.dataset.category; drawGallery(); }));
    $('modalClose').addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
  }

  // --- 5. ОТЗЫВЫ (главная) ---
  let revs = [];
  function drawReviews() {
    const box = $('reviews'); if (!box) return;
    box.innerHTML = revs.map(r => `<div class="card review">${r.r ? `<div class="stars" aria-label="${r.r}/5">${'✦'.repeat(r.r)}<span>${'✦'.repeat(5 - r.r)}</span></div>` : ''}<h3>${esc(r.a)}</h3><p>${esc(r.t)}</p>${r.n ? `<button class="att-btn" data-id="${esc(r.id)}" data-n="${r.n}">📎 ${tr('attach')} (${r.n})</button><div class="att" hidden></div>` : ''}</div>`).join('');
    $('reviewsSec').style.display = revs.length ? '' : 'none';
    box.querySelectorAll('.att-btn').forEach(b => b.addEventListener('click', () => {
      const w = b.nextElementSibling;
      if (!w.childElementCount) for (let i = 0; i < +b.dataset.n; i++) w.insertAdjacentHTML('beforeend', `<a href="${CFG.API}/rphoto/${b.dataset.id}/${i}" target="_blank" rel="noopener"><img loading="lazy" src="${CFG.API}/rphoto/${b.dataset.id}/${i}" alt=""></a>`);
      w.hidden = !w.hidden;
      b.textContent = `📎 ${tr(w.hidden ? 'attach' : 'hideAtt')} (${b.dataset.n})`;
    }));
  }
  if ($('reviews')) fetch(CFG.API + '/api/reviews').then(r => r.json()).then(x => { revs = x; drawReviews(); }).catch(() => {});

  window.onLangChange = () => { fillSizes(); drawGallery(); drawReviews(); };
  window.onLangChange();
});

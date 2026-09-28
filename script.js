document.addEventListener('DOMContentLoaded', () => {

  // --- 1. ПЕРЕВОДЫ (4 ЯЗЫКА: PL, RU, UA, EN) ---
  const translations = {
    pl: {
      navAbout: "O mnie",
      navServices: "Usługi",
      navPortfolio: "Portfolio ✦",
      navBook: "Zapisz się",
      heroSubtitle: "Tattoo Artist & Visual Creator",
      heroTitle: "Unikalne tatuaże z charakterem",
      heroDesc: "Tworzę autorskie projekty dopasowane do Twojej anatomii. Wysoka jakość, pełna sterylność i dbałość o detale.",
      btnWorks: "Zobacz prace",
      btnBook: "Zapisz się na sesję",
      aboutTitle: "O mnie",
      aboutText: "Cześć! Jestem Dorxwea. Tatuaż to dla mnie coś więcej niż rysunek na skórze — to forma wyrażenia siebie i Twojej estetyki. Tworzę autorskie projekty oraz realizuję pomysły klientów w atmosferze pełnego komfortu.",
      servicesTitle: "Usługi",
      card1Title: "Swoja tatuaż / Custom",
      card1Desc: "Projekt indywidualny stworzony na podstawie Twojego pomysłu, referencji i budowy ciała.",
      card2Title: "Modelka (-80% zniżki)",
      card2Desc: "Specjalne warunki i rabat 80% na realizację moich autorskich, dużych pomysłów.",
      card3Title: "Szkice / Flash",
      card3Desc: "Gotowe autorskie wzory dostępne do wykonania od ręki bez długiego oczekiwania.",
      bookingTitle: "Zapisz się na sesję",
      bookingDesc: "Wypełnij formularz, a skontaktuję się z Tobą w celu omówienia pomysłu i terminu.",
      namePlaceholder: "Twoje imię",
      contactPlaceholder: "Instagram / Telegram / Telefon",
      servicePlaceholder: "Wybierz opcję",
      commentPlaceholder: "Opisz pomysł, miejsce na ciele oraz preferowane szczegóły...",
      priceHint: "*Ostateczną cenę ustala mistrz po omówieniu szczegółów.",
      submitBtn: "Wyślij zgłoszenie",
      rodoNotice: "Zgadzam się na przetwarzanie danych osobowych (RODO).",
      privacyLink: "Polityka Prywatności (RODO)",
      privacyTitle: "Polityka Prywatności",
      privacyText: "Administratorem Twoich danych jest DORXWEA TATTOO. Dane podane w formularzu są wykorzystywane wyłącznie w celu rezerwacji sesji i kontaktu. Dane nie są udostępniane osobom trzecim.",
      portfolioTitle: "Portfolio prac",
      portfolioDesc: "Zobacz moje zrealizowane tatuaże oraz wolne autorskie szkice.",
      tabAll: "Wszystkie prace",
      tabCustom: "📸 Moje prace",
      tabFlash: "🎨 Szkice",
      emptyState: "Brak prac w tej kategorii.",
      noDesc: "Brak opisu.",
      sending: "Wysyłanie...",
      successMsg: "✅ Zgłoszenie wysłane! Wkrótce się skontaktuję.",
      errorMsg: "❌ Błąd wysyłania. Napisz bezpośrednio.",
      modelBannerBadge: "🔥 Oferta Specjalna",
      modelBannerTitle: "Szukam modeli z rabatem 80%! 📸",
      modelBannerDesc: "Zostań moją modelką/modelem do realizacji moich autorskich wizji i zgarnij 80% zniżki na całą sesję!",
      modelBannerBtn: "Chcę zostać modelem"
    },
    ru: {
      navAbout: "О себе",
      navServices: "Услуги",
      navPortfolio: "Портфолио ✦",
      navBook: "Записаться",
      heroSubtitle: "Tattoo Artist & Visual Creator",
      heroTitle: "Индивидуальные татуировки с характером",
      heroDesc: "Создаю авторские эскизы под вашу анатомию. Качественные материалы, стерильность и внимание к деталям.",
      btnWorks: "Смотреть работы",
      btnBook: "Записаться на сеанс",
      aboutTitle: "О мне",
      aboutText: "Привет! Я Dorxwea. Для меня татуировка — это форма самовыражения и отражение вашей внутренней эстетики. Работаю по уникальным авторским эскизам и воплощаю идеи клиентов.",
      servicesTitle: "Услуги",
      card1Title: "Своя тату / Custom",
      card1Desc: "Разработка уникального эскиза по вашей идее и анатомии.",
      card2Title: "Модель (-80% скидка)",
      card2Desc: "Специальные условия и скидка 80% на реализацию моих масштабных задумок.",
      card3Title: "Эскизы / Flash",
      card3Desc: "Готовые авторские эскизы, которые можно нанести на сеансе.",
      bookingTitle: "Запись на сеанс",
      bookingDesc: "Заполните форму, и я свяжусь с вами для обсуждения детали.",
      namePlaceholder: "Ваше имя",
      contactPlaceholder: "Instagram / Telegram / Телефон",
      servicePlaceholder: "Выберите вариант",
      commentPlaceholder: "Опишите идею, место нанесения и свои пожелания...",
      priceHint: "*Итоговую цену назовет мастер после обсуждения.",
      submitBtn: "Отправить заявку",
      rodoNotice: "Я соглашаюсь на обработку персональных данных (RODO / GDPR).",
      privacyLink: "Политика конфиденциальности (RODO)",
      privacyTitle: "Политика конфиденциальности",
      privacyText: "Администратором данных является DORXWEA TATTOO. Данные из формы используются исключительно для записи на сеанс.",
      portfolioTitle: "Портфолио работ",
      portfolioDesc: "Коллекция моих работ и свободных эскизов.",
      tabAll: "Все работы",
      tabCustom: "📸 Мои работы",
      tabFlash: "🎨 Эскизы",
      emptyState: "В этой категории пока нет работ.",
      noDesc: "Описание отсутствует.",
      sending: "Отправка...",
      successMsg: "✅ Заявка отправлена! Скоро свяжусь с вами.",
      errorMsg: "❌ Ошибка отправки. Напишите напрямую.",
      modelBannerBadge: "🔥 Спецпредложение",
      modelBannerTitle: "Ищу моделей со скидкой 80%! 📸",
      modelBannerDesc: "Стань моей моделью для реализации масштабных идей и получи скидку 80%!",
      modelBannerBtn: "Хочу стать моделью"
    },
    ua: {
      navAbout: "Про мене",
      navServices: "Послуги",
      navPortfolio: "Портфоліо ✦",
      navBook: "Записатися",
      heroSubtitle: "Tattoo Artist & Visual Creator",
      heroTitle: "Індивідуальні татуювання з характером",
      heroDesc: "Створюю авторські ескізи під вашу анатомію. Якісні матеріали, стерильність та увага до деталей.",
      btnWorks: "Дивитися роботи",
      btnBook: "Записатися на сеанс",
      aboutTitle: "Про мене",
      aboutText: "Привіт! Я Dorxwea. Для мене татуювання — це форма самовираження та відображення вашої естетики. Створюю унікальні ескізи та втілюю ваші ідеї.",
      servicesTitle: "Послуги",
      card1Title: "Своє тату / Custom",
      card1Desc: "Розробка унікального ескізу за вашою ідеєю.",
      card2Title: "Модель (-80% знижка)",
      card2Desc: "Спеціальні умови та знижка 80% на реалізацію моїх масштабних задумів.",
      card3Title: "Ескізи / Flash",
      card3Desc: "Готові авторські ескізи, які можна нанести на сеансі.",
      bookingTitle: "Запис на сеанс",
      bookingDesc: "Заповніть форму, і я зв'яжуся з вами для обговорення.",
      namePlaceholder: "Ваше ім'я",
      contactPlaceholder: "Instagram / Telegram / Телефон",
      servicePlaceholder: "Оберіть варіант",
      commentPlaceholder: "Опишіть ідею, місце нанесена та побажання...",
      priceHint: "*Остаточну ціну накличе майстер після обговорення.",
      submitBtn: "Надіслати заявку",
      rodoNotice: "Я погоджуюся на обробку персональних даних (RODO).",
      privacyLink: "Політика конфіденційності (RODO)",
      privacyTitle: "Політика конфіденційності",
      privacyText: "Адміністратором даних є DORXWEA TATTOO. Дані використовуються виключно для запису.",
      portfolioTitle: "Портфоліо робіт",
      portfolioDesc: "Колекція моїх робіт та вільних ескізів.",
      tabAll: "Усі роботи",
      tabCustom: "📸 Мої роботи",
      tabFlash: "🎨 Ескізи",
      emptyState: "У цій категорії поки немає робіт.",
      noDesc: "Опис відсутній.",
      sending: "Надсилання...",
      successMsg: "✅ Заявку надіслано! Скоро зв'яжуся з вами.",
      errorMsg: "❌ Помилка надсилання. Напишіть напряму.",
      modelBannerBadge: "🔥 Спецпропозиція",
      modelBannerTitle: "Шукаю моделей зі знижкою 80%! 📸",
      modelBannerDesc: "Стань моєю моделлю для реалізації задумів та отримай знижку 80%!",
      modelBannerBtn: "Хочу стати моделлю"
    },
    en: {
      navAbout: "About",
      navServices: "Services",
      navPortfolio: "Portfolio ✦",
      navBook: "Book Now",
      heroSubtitle: "Tattoo Artist & Visual Creator",
      heroTitle: "Custom Tattoos with Character",
      heroDesc: "Anatomically tailored designs, premium sterility, and high attention to detail.",
      btnWorks: "View Works",
      btnBook: "Book a Session",
      aboutTitle: "About Me",
      aboutText: "Hi! I'm Dorxwea. Tattooing is my art of self-expression. I build custom concepts as well as bring your personal ideas to life.",
      servicesTitle: "Services",
      card1Title: "Custom Tattoo",
      card1Desc: "Bespoke design created around your vision and anatomy.",
      card2Title: "Model (-80% Discount)",
      card2Desc: "Special discount for clients taking part in my large creative projects.",
      card3Title: "Flash Designs",
      card3Desc: "Ready-to-ink original artwork available right away.",
      bookingTitle: "Book a Session",
      bookingDesc: "Fill out the form and I will contact you to discuss details.",
      namePlaceholder: "Your Name",
      contactPlaceholder: "Instagram / Telegram / Phone",
      servicePlaceholder: "Select Service",
      commentPlaceholder: "Describe your idea, placement and preferences...",
      priceHint: "*Final price will be determined by the artist.",
      submitBtn: "Submit Application",
      rodoNotice: "I agree to personal data processing (GDPR).",
      privacyLink: "Privacy Policy (GDPR)",
      privacyTitle: "Privacy Policy",
      privacyText: "Data administrator is DORXWEA TATTOO. Data is strictly used for appointment booking.",
      portfolioTitle: "Portfolio",
      portfolioDesc: "A collection of my recent tattoos and available flash designs.",
      tabAll: "All Works",
      tabCustom: "📸 My Works",
      tabFlash: "🎨 Flash Designs",
      emptyState: "No items in this category yet.",
      noDesc: "No description provided.",
      sending: "Sending...",
      successMsg: "✅ Application sent! I'll contact you soon.",
      errorMsg: "❌ Failed to send. Please contact directly.",
      modelBannerBadge: "🔥 Special Offer",
      modelBannerTitle: "Looking for models with 80% off! 📸",
      modelBannerDesc: "Become a model for my creative projects and get an 80% discount!",
      modelBannerBtn: "Become a model"
    }
  };

  let currentLang = localStorage.getItem('site_lang') || 'pl';

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
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  applyLanguage(currentLang);

  // --- 2. ДИНАМИЧЕСКОЕ СКРЫТИЕ ПОЛЯ ЦЕНЫ ПРИ ВЫБОРЕ "КОНСУЛЬТАЦИЯ" ---
  const serviceSelect = document.getElementById('service');
  const priceGroup = document.getElementById('priceGroup');

  if (serviceSelect && priceGroup) {
    serviceSelect.addEventListener('change', () => {
      if (serviceSelect.value === 'Consultation') {
        priceGroup.style.display = 'none';
      } else {
        priceGroup.style.display = 'block';
      }
    });
  }

  // --- 3. МОБИЛЬНОЕ МЕНЮ ---
  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // --- 4. ФОРМА ЗАПИСИ И ОТПРАВКА В TELEGRAM ---
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const statusDiv = document.getElementById('formStatus');
      const submitBtn = document.getElementById('submitBtn');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = translations[currentLang] ? translations[currentLang].sending : "Sending...";
      }
      if (statusDiv) statusDiv.innerText = '';

      const serviceVal = document.getElementById('service')?.value || '';
      const sizePriceVal = serviceVal === 'Consultation' ? '— (Консультация)' : (document.getElementById('sizePrice')?.value || '');

      const formData = {
        action: "submit_booking",
        name: document.getElementById('name')?.value || '',
        contact: document.getElementById('contact')?.value || '',
        service: serviceVal,
        sizePrice: sizePriceVal,
        comment: document.getElementById('comment')?.value || '',
        lang: currentLang.toUpperCase()
      };

      try {
        // Укажите здесь URL вашего Cloudflare Worker
        const res = await fetch('https://YOUR_CLOUDFLARE_WORKER.workers.dev', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          if (statusDiv) {
            statusDiv.style.color = '#F77DCD';
            statusDiv.innerText = translations[currentLang] ? translations[currentLang].successMsg : "✅ Sent!";
          }
          bookingForm.reset();
        } else {
          throw new Error('Server error');
        }
      } catch (err) {
        if (statusDiv) {
          statusDiv.style.color = '#f44336';
          statusDiv.innerText = translations[currentLang] ? translations[currentLang].errorMsg : "❌ Error sending.";
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = translations[currentLang] ? translations[currentLang].submitBtn : "Send";
        }
      }
    });
  }

  // --- 5. ПОРТФОЛИО И ГАЛЕРЕЯ (Синхронизация с 2 категориями) ---
  const gallery = document.getElementById('gallery');
  if (gallery) {
    let worksData = [];

    fetch(`works.json?_=${Date.now()}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          worksData = data;
        } else if (typeof data === 'object' && data !== null) {
          worksData = [
            ...(data.custom || []),
            ...(data.flash || []),
            ...(data.model || [])
          ];
        } else {
          worksData = [];
        }
        renderGallery(worksData, 'all');
      })
      .catch(err => {
        console.error('Error works.json:', err);
        renderGallery([], 'all');
      });

    const filterBtns = document.querySelectorAll('.tab-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.category || 'all';
        renderGallery(worksData, cat);
      });
    });
  }

  function renderGallery(items, selectedCategory) {
    const galleryEl = document.getElementById('gallery');
    const emptyState = document.getElementById('galleryEmpty');
    if (!galleryEl) return;

    galleryEl.innerHTML = '';
    const selCatLower = (selectedCategory || 'all').toLowerCase();

    const filtered = items.filter(item => {
      if (!item) return false;
      const itemCat = (item.category || '').toLowerCase();
      if (selCatLower === 'all') return true;
      if (selCatLower === 'custom') return itemCat === 'custom' || itemCat === 'model';
      if (selCatLower === 'flash') return itemCat === 'flash';
      return itemCat === selCatLower;
    });

    if (filtered.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      const textCaption = item.caption || item.description || '';
      const displayCategory = item.category === 'flash' ? '🎨 Szkic' : '📸 Moja praca';

      card.innerHTML = `
        <img src="${item.src}" alt="Work" loading="lazy">
        <div class="card-overlay">
          <span class="badge">${displayCategory}</span>
          ${textCaption ? `<p style="font-size: 12px; color: #ccc;">${textCaption}</p>` : ''}
        </div>
      `;

      card.addEventListener('click', () => openModal(item));
      galleryEl.appendChild(card);
    });
  }

  // --- 6. МОДАЛЬНОЕ ОКНО ДЛЯ ПРОСМОТРА КАРТИНКИ ---
  const modal = document.getElementById('imageModal');
  const modalClose = document.getElementById('modalClose');

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      if (modal) modal.style.display = 'none';
    });
  }

  function openModal(item) {
    const modalImg = document.getElementById('modalImg');
    const modalCategory = document.getElementById('modalCategory');
    const modalDesc = document.getElementById('modalDesc');

    if (modalImg) modalImg.src = item.src;
    if (modalCategory) modalCategory.innerText = item.category === 'flash' ? '🎨 SZKIC' : '📸 MOJA PRACA';
    if (modalDesc) modalDesc.innerText = item.caption || item.description || (translations[currentLang] ? translations[currentLang].noDesc : 'No description');
    
    if (modal) modal.style.display = 'flex';
  }

  // --- 7. ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ (RODO) ---
  const privacyBtn = document.getElementById('privacyBtn');
  const privacyModal = document.getElementById('privacyModal');
  const privacyClose = document.getElementById('privacyClose');

  if (privacyBtn && privacyModal) {
    privacyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      privacyModal.style.display = 'flex';
    });
  }

  if (privacyClose && privacyModal) {
    privacyClose.addEventListener('click', () => {
      privacyModal.style.display = 'none';
    });
  }
});

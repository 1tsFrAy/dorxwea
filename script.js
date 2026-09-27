if (typeof lucide !== 'undefined') lucide.createIcons();

const translations = {
  pl: { navAbout: "O mnie", navPortfolio: "Portfolio", navReviews: "Opinie", btnBook: "Zapisz się", formTitle: "Zapisz się na sesję", labelName: "Imię *", labelContact: "Kontakt *", labelIdea: "Opis pomysłu", btnSend: "Wyślij" },
  ru: { navAbout: "О мне", navPortfolio: "Портфолио", navReviews: "Отзывы", btnBook: "Записаться", formTitle: "Запись на сеанс", labelName: "Имя *", labelContact: "Контакт *", labelIdea: "Описание идеи", btnSend: "Отправить" },
  ua: { navAbout: "Про мене", navPortfolio: "Портфоліо", navReviews: "Відгуки", btnBook: "Записатися", formTitle: "Запис на сеанс", labelName: "Ім'я *", labelContact: "Контакт *", labelIdea: "Опис ідеї", btnSend: "Надіслати" },
  en: { navAbout: "About me", navPortfolio: "Portfolio", navReviews: "Reviews", btnBook: "Book now", formTitle: "Book a session", labelName: "Name *", labelContact: "Contact *", labelIdea: "Idea description", btnSend: "Submit" }
};

let currentLang = 'pl';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Загрузка портфолио
async function loadWorks() {
  try {
    const res = await fetch('works.json');
    if (res.ok) {
      const data = await res.json();
      const allWorks = [...(data.custom || []), ...(data.flash || [])];
      const container = document.getElementById('worksGrid');
      if (container) {
        container.innerHTML = allWorks.map(item => `
          <div class="work-item">
            <img src="${item.src}" style="width:100%; border-radius:12px; height:280px; object-fit:cover;">
            <p style="margin-top:10px; color:var(--text-muted);">${item.caption || ''}</p>
          </div>
        `).join('');
      }
    }
  } catch(e) {}
}

// Загрузка отзывов
async function loadReviews() {
  try {
    const res = await fetch('reviews.json');
    if (res.ok) {
      const items = await res.json();
      const container = document.getElementById('reviewsGrid');
      if (container) {
        container.innerHTML = items.map(r => `
          <div class="review-card">
            <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
              <strong style="color:var(--accent-gold);">${r.author}</strong>
              <span style="color:#FFD700;">★ ★ ★ ★ ★</span>
            </div>
            <p style="color:var(--text-muted);">${r.text}</p>
          </div>
        `).join('');
      }
    }
  } catch(e) {}
}

// Отправка заявки в Worker / Telegram
const form = document.getElementById('cloudflareBookingForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('statusMessage');
    const btn = document.getElementById('submitBtn');

    btn.disabled = true;
    status.textContent = 'Wysyłanie...';

    const payload = {
      name: document.getElementById('name').value,
      contact: document.getElementById('contact').value,
      comment: document.getElementById('idea').value,
      lang: currentLang.toUpperCase()
    };

    try {
      const res = await fetch('https://withered-shape-cd29.lyhsnikov1423.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        status.style.color = '#4CAF50';
        status.textContent = '✅ Wysłano pomyślnie!';
        form.reset();
      } else throw new Error();
    } catch (err) {
      status.style.color = '#F44336';
      status.textContent = '❌ Błąd wysyłania.';
    } finally {
      btn.disabled = false;
    }
  });
}

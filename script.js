
// ===== LOCAL OFFLINE FORM HANDLER — must stay first =====
(function(){
  function ready(fn){
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn, { once:true });
    else fn();
  }

  ready(function(){
    const form = document.querySelector("#apply form") || document.querySelector(".apply-form") || document.querySelector("form");
    if (!form) return;

    form.setAttribute("data-local-demo-form", "true");

    function setSubmitState(state){
      const wrap = form.querySelector("[data-submit-animation]");
      if(!wrap) return;
      wrap.classList.remove("is-loading","is-success","is-error");
      if(state) wrap.classList.add(state);
    }

    function resetSubmitState(delay = 1800){
      const wrap = form.querySelector("[data-submit-animation]");
      if(!wrap) return;
      window.setTimeout(() => {
        wrap.classList.remove("is-loading","is-success","is-error");
      }, delay);
    }

    form.addEventListener("submit", function(e){
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      setSubmitState("is-loading");

      const fd = new FormData(form);
      const read = (...names) => {
        for (const name of names) {
          const value = fd.get(name);
          if (value) return String(value).trim();
        }
        return "";
      };

      const inputs = [...form.querySelectorAll("input")];
      const selects = [...form.querySelectorAll("select")];
      const textarea = form.querySelector("textarea");

      const lead = {
        id: Date.now() + "-" + Math.random().toString(36).slice(2,9),
        createdAt: new Date().toISOString(),
        name: read("name","fullName","full_name") || inputs.find(i => i.type !== "tel" && i.type !== "checkbox")?.value?.trim() || "",
        phone: read("phone","tel") || form.querySelector('input[type="tel"]')?.value?.trim() || "",
        stage: read("stage","level","mode") || selects[0]?.value || "",
        program: read("program","direction","yonalish") || selects[1]?.value || selects[0]?.value || "",
        message: read("message","comment","note") || textarea?.value?.trim() || ""
      };

      let box = form.querySelector(".form-alert");
      if (!box) {
        box = document.createElement("div");
        box.className = "form-alert";
        form.appendChild(box);
      }

      function show(text, ok){
        box.textContent = text;
        box.className = "form-alert " + (ok ? "is-success" : "is-error");
      }

      if (!lead.name || !lead.phone) {
        show((window.BITU_FORM_TEXT&&window.BITU_FORM_TEXT.requiredError)||"Iltimos, ism va telefon raqamni kiriting.", false);
        window.setTimeout(() => {
          setSubmitState("is-error");
          resetSubmitState(900);
        }, 450);
        return false;
      }

      const key = "bitu_local_leads";
      let leads = [];
      try { leads = JSON.parse(localStorage.getItem(key) || "[]"); } catch(err) { leads = []; }
      leads.unshift(lead);
      localStorage.setItem(key, JSON.stringify(leads));

      fetch('/.netlify/functions/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.assign({}, lead, { page: window.location.href }))
      }).catch(() => {});


      window.setTimeout(() => {
        setSubmitState("is-success");
        resetSubmitState(2300);
        show((window.BITU_FORM_TEXT&&window.BITU_FORM_TEXT.success)||"Demo rejim: ariza admin panelga saqlandi.", true);
        form.reset();
      }, 1250);
      return false;
    }, true);
  });
})();

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const navbar = $('#navbar');
const navToggle = $('#navToggle');
const navLinks = $('#navLinks');

window.addEventListener('scroll', () => {
  if(navbar) navbar.classList.toggle('is-scrolled', window.scrollY > 20);
});

if(navToggle&&navLinks) navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

$$('#navLinks a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

const glow = $('.cursor-glow');
document.addEventListener('pointermove', event => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
$$('.reveal').forEach(el => revealObserver.observe(el));

const countObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count || 0);
    let current = 0;
    const duration = 1100;
    const start = performance.now();
    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      current = Math.floor(progress * target);
      el.textContent = current;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
    countObserver.unobserve(el);
  });
}, { threshold: .5 });
$$('[data-count]').forEach(el => countObserver.observe(el));

const tabButtons = $$('.tab');
const panels = $$('.program-panel');
const searchInput = $('#programSearch');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('is-active'));
    panels.forEach(panel => panel.classList.remove('is-active'));
    button.classList.add('is-active');
    $(`[data-panel="${button.dataset.tab}"]`).classList.add('is-active');
    searchInput.value = '';
    filterPrograms('');
  });
});

function filterPrograms(query) {
  const activePanel = $('.program-panel.is-active');
  const normalized = query.trim().toLowerCase();
  $$('.program-card, .residency-list button', activePanel).forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(normalized) ? '' : 'none';
  });
}
if(searchInput) searchInput.addEventListener('input', event => filterPrograms(event.target.value));

function getProgramMap(){return window.BITU_PROGRAM_MAP||{bachelor:[],master:[],residency:[]};}

const levelSelect = $('#levelSelect');
const programSelect = $('#programSelect');
if(levelSelect&&programSelect) levelSelect.addEventListener('change', () => {
  const values = getProgramMap()[levelSelect.value] || [];
  programSelect.innerHTML = values.length
    ? `<option value="">${(window.BITU_FORM_TEXT&&window.BITU_FORM_TEXT.programPlaceholder)||'Yoʻnalishni tanlang'}</option>` + values.map(value => `<option>${value}</option>`).join('')
    : `<option value="">${(window.BITU_FORM_TEXT&&window.BITU_FORM_TEXT.programSelectEmpty)||'Avval bosqichni tanlang'}</option>`;
});

$$('.mode').forEach(mode => {
  mode.addEventListener('click', () => {
    $$('.mode').forEach(btn => btn.classList.remove('is-active'));
    mode.classList.add('is-active');
    const foreign = mode.dataset.mode === 'foreign';
    const formTypeInput = document.getElementById('formTypeInput');
    if (formTypeInput) formTypeInput.value = foreign ? ((window.BITU_FORM_TEXT&&window.BITU_FORM_TEXT.modeForeign)||'Xorijiy') : ((window.BITU_FORM_TEXT&&window.BITU_FORM_TEXT.modeLocal)||'Mahalliy');
    $$('.foreign-only').forEach(el => el.classList.toggle('is-hidden', !foreign));
    $$('.local-only').forEach(el => el.classList.toggle('is-hidden', foreign));
    $$('.foreign-only input, .foreign-only select').forEach(field => field.required = foreign);
    $$('.local-only select').forEach(field => field.required = !foreign);
  });
});

if($('#applyForm')) $('#applyForm').addEventListener('submit', async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const note = $('#formNote');
  const submitButton = form.querySelector('button[type="submit"]');

  if (!form.checkValidity()) {
    note.textContent=(window.BITU_FORM_TEXT&&window.BITU_FORM_TEXT.invalid)||'Iltimos, majburiy maydonlarni toʻldiring.';
    note.style.color = '#dc2626';
    return;
  }

  const payload = Object.fromEntries(new FormData(form).entries());
  payload.page = window.location.href;
  payload.submittedAt = new Date().toLocaleString('uz-UZ', { hour12: false });

  note.style.color = '#b45309';
  note.textContent=(window.BITU_FORM_TEXT&&window.BITU_FORM_TEXT.sending)||'Ariza yuborilmoqda...';
  submitButton.disabled = true;
  submitButton.textContent = 'Yuborilmoqda...';

  try {
    const response = await fetch('/.netlify/functions/send-telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.ok) {
      throw new Error(result.error || 'Telegramga yuborishda xatolik yuz berdi.');
    }

    note.style.color = '#0e9b78';
    note.textContent=(window.BITU_FORM_TEXT&&window.BITU_FORM_TEXT.sent)||'Ariza muvaffaqiyatli yuborildi.';
    form.reset();
    const formTypeInput = document.getElementById('formTypeInput');
    if (formTypeInput) formTypeInput.value = 'Mahalliy';
    programSelect.innerHTML = '<option value="">Avval bosqichni tanlang</option>';
    $$('.mode').forEach(btn => btn.classList.remove('is-active'));
    $('.mode[data-mode="local"]')?.classList.add('is-active');
    $$('.foreign-only').forEach(el => el.classList.add('is-hidden'));
    $$('.local-only').forEach(el => el.classList.remove('is-hidden'));
    $$('.foreign-only input, .foreign-only select').forEach(field => field.required = false);
    $$('.local-only select').forEach(field => field.required = true);
  } catch (error) {
    console.error(error);
    note.style.color = '#dc2626';
    note.textContent=(window.BITU_FORM_TEXT&&window.BITU_FORM_TEXT.failed)||'Ariza yuborilmadi. Keyinroq urinib koʻring.';
  } finally {
    submitButton.disabled = false;
    submitButton.textContent=(window.BITU_FORM_TEXT&&window.BITU_FORM_TEXT.submit)||'Ariza qoldirish';
  }
});

$$('.residency-list button').forEach(button => {
  button.addEventListener('click', () => {
    document.location.hash = '#apply';
    levelSelect.value = 'Klinik ordinatura';
    levelSelect.dispatchEvent(new Event('change'));
    const name = button.childNodes[0].textContent.trim();
    programSelect.value = [...programSelect.options].find(option => option.textContent === name)?.value || '';
  });
});


// Premium motion: staggered reveal, magnetic buttons, parallax depth and card tilt.
document.documentElement.classList.add('motion-ready');

$$('.quick-card, .program-card, .campus-card, .news-card').forEach((card, index) => {
  card.style.setProperty('--i', index % 12);
});

$$('.reveal').forEach((el, index) => {
  el.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`);
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  $$('.btn, .quick-card, .program-card, .campus-card, .news-card, .contact-mini a').forEach(el => {
    el.addEventListener('pointermove', event => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    });
  });

  $$('.program-card, .quick-card, .news-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
      const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
      card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    $$('.orb--one, .orb--two, .floating-card').forEach((el, index) => {
      const speed = index % 2 === 0 ? 0.06 : -0.045;
      el.style.translate = `0 ${y * speed}px`;
    });
  }, { passive: true });
}


// ===== Site loader =====
(function(){
  const loader = document.getElementById('siteLoader');
  if (!loader) return;

  const startedAt = Date.now();
  const minVisible = 1450;
  let hidden = false;

  function hideLoader(){
    if (hidden) return;
    hidden = true;
    const elapsed = Date.now() - startedAt;
    const wait = Math.max(0, minVisible - elapsed);

    window.setTimeout(() => {
      loader.classList.add('is-hidden');
      document.body.classList.remove('is-loading');
      window.setTimeout(() => {
        loader.setAttribute('hidden', 'hidden');
      }, 800);
    }, wait);
  }

  window.addEventListener('load', hideLoader, { once: true });
  window.setTimeout(hideLoader, 5200);
})();





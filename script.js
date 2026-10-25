/**
 * ЗА ГРАНЬЮ ПРОДАЖ — Логика полноэкранного лендинга, мобильного меню и модального окна
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. ПОЛНАЯ СПЕЦИФИКАЦИЯ ПРОГРАММ (ИЗ ODS ФАЙЛА)
     ========================================================================== */
  const PROGRAMS = {
    baza: {
      name: "Программа «БАЗА»",
      duration: "4 недели",
      hours: "138 чел/час",
      price: "110 400 ₽",
      stages: [
        {
          title: "1. Аудит текущей системы управления продажами",
          hours: "40 ч",
          docs: "Презентация по результатам аудита («как есть» — «как будет»): Орг. структура, Планирование месяца, Планирование недели, Ежедневная отчетность.",
          links: [
            { label: "Пример презентации аудита", url: "https://docs.google.com/presentation/d/1NlR8LPNa5-bP1fVow_yTEej-PonAEADB9KQmsFj97_I/edit?slide=id.h3c9dbd798f227201_0_0#slide=id.h3c9dbd798f227201_0_0" }
          ]
        },
        {
          title: "2. Разработка организационной структуры ОП и ЦКП (до 5 сотрудников)",
          hours: "16 ч",
          docs: "Орг. структура ОП в формате Google Таблица: Пост (позиция), Должность, Функция должности, Ценный конечный продукт должности (ЦКП).",
          links: [
            { label: "Пример орг. структуры и ЦКП", url: "https://docs.google.com/presentation/d/1C5mzQU9bqBcG_4IvDVvXdqLhHXn-NSAIpma07K3cV8w/edit?slide=id.g337e036ce97_0_0#slide=id.g337e036ce97_0_0" }
          ]
        },
        {
          title: "3. Запуск и внедрение планирования ОП на месяц и неделю",
          hours: "32 ч",
          docs: "План на месяц с декомпозицией по сотрудникам (MQL, SQL, кол-во и сумма сделок) + Недельный план для каждого сотрудника (до 5 чел.).",
          links: [
            { label: "Пример плана на месяц", url: "https://docs.google.com/spreadsheets/d/1u2bdASJfEbuZWqI25pc3mZEibWE--4Wj6YBbGpGfss0/edit?gid=1495679339#gid=1495679339" },
            { label: "Пример недельного плана", url: "https://docs.google.com/spreadsheets/d/1pSXnf-eMQtrTxGCF1UJ25C_dc-Ux1w-oH7CBp336gzo/edit?gid=2122964814#gid=2122964814" }
          ]
        },
        {
          title: "4. Внедрение ежедневной отчетности ОП",
          hours: "40 ч",
          docs: "Ежедневный и сводный отчет в формате Google Таблиц и Диаграмм в разрезе дня, недели, месяца и года.",
          links: [
            { label: "Пример ежедневной отчетности", url: "https://docs.google.com/spreadsheets/d/1Aj4gFCuajUKcLtd5RZTD-xolnRB3DZ4bgBCHyuadFf8/edit?gid=1224637347#gid=1224637347" }
          ]
        },
        {
          title: "5. Обучение и аттестация сотрудников",
          hours: "10 ч",
          docs: "Обучение новым инструментам (до 5 сотрудников) и тестирование в Google Форме (100% правильных ответов).",
          links: []
        }
      ]
    },

    expert: {
      name: "Программа «ЭКСПЕРТ»",
      duration: "8 недель",
      hours: "252 чел/час",
      price: "201 600 ₽",
      stages: [
        {
          title: "1. Все блоки и отчетные документы программы «БАЗА»",
          hours: "138 ч",
          docs: "Полный комплекс аудита, оргструктуры с ЦКП, месячного/недельного планирования и ежедневной отчетности.",
          links: []
        },
        {
          title: "2. Внедрение принципов по работе с задачами",
          hours: "24 ч",
          docs: "Регламент по работе с задачами (Google Документ) + обучение и 100% тестирование сотрудников в Google Форме.",
          links: [
            { label: "Пример формы тестирования", url: "https://docs.google.com/forms/d/1K3n0fQXa-jQ15Ba157X_ZS-Y5I4LCK4miBUqScNP-gw/edit" },
            { label: "Пример регламента по задачам", url: "https://docs.google.com/document/d/18cEm5ofT0xBswe-tX0fEWttQv50AjTbcI_HAvIVcYyQ/edit?tab=t.0" }
          ]
        },
        {
          title: "3. Разработка Папки должности менеджера по продажам",
          hours: "40 ч",
          docs: "Папка должности (Google Документ): функция и ЦКП, содержание должности, правила работы в CRM, этические нормы, карта болей ЦА и карта возражений.",
          links: [
            { label: "Пример Папки должности", url: "https://docs.google.com/document/d/18cEm5ofT0xBswe-tX0fEWttQv50AjTbcI_HAvIVcYyQ/edit?tab=t.0#heading=h.6plmww50xlrn" }
          ]
        },
        {
          title: "4. Аудит текущей CRM-системы",
          hours: "40 ч",
          docs: "Презентация аудита CRM: воронки (до 5 шт., «как есть» — «как будет»), этапы воронок и правила работы в CRM.",
          links: [
            { label: "Пример презентации аудита CRM", url: "https://docs.google.com/presentation/d/1NlR8LPNa5-bP1fVow_yTEej-PonAEADB9KQmsFj97_I/edit?slide=id.h3c9dbd798f227201_0_0#slide=id.h3c9dbd798f227201_0_0" }
          ]
        },
        {
          title: "5. Обучение и итоговая аттестация",
          hours: "10 ч",
          docs: "Обучение новым инструментам и 100% прохождение тестирования в Google Форме.",
          links: []
        }
      ]
    },

    profi: {
      name: "Программа «ПРОФИ»",
      duration: "12 недель",
      hours: "422 чел/час",
      price: "337 600 ₽",
      stages: [
        {
          title: "1. Все блоки и отчетные документы программы «ЭКСПЕРТ»",
          hours: "252 ч",
          docs: "Полный пакет результатов и документов программ «БАЗА» и «ЭКСПЕРТ».",
          links: []
        },
        {
          title: "2. Разработка скриптов и сценариев звонков и встреч",
          hours: "80 ч",
          docs: "Скрипт звонка (Google Таблица) + Сценарий встречи (Google Документ) + Шаблон презентации встречи (Google Презентация).",
          links: [
            { label: "Пример скрипта звонка", url: "https://docs.google.com/spreadsheets/d/1u2bdASJfEbuZWqI25pc3mZEibWE--4Wj6YBbGpGfss0/edit?gid=90302322#gid=90302322" },
            { label: "Пример сценария встречи", url: "https://docs.google.com/document/d/1CXyWMybgC12mWsu3f12dfTIZVQxZVGeX5ZbGcOAQRdI/edit?tab=t.0" },
            { label: "Пример презентации встречи", url: "https://docs.google.com/presentation/d/18neJIKJyxubIBgbnVarPIg6nJjBr2R_ywOkPV4fYNdA/edit?slide=id.g3cd3346896e_0_514#slide=id.g3cd3346896e_0_514" }
          ]
        },
        {
          title: "3. Внедрение контроля качества (применимо для AI-агентов)",
          hours: "40 ч",
          docs: "Лист проверки звонка согласно скрипту и Лист проверки встречи согласно сценарию в формате Google Таблиц.",
          links: [
            { label: "Лист проверки звонка (AI-ready)", url: "https://docs.google.com/spreadsheets/d/1XxJAdpmux5UrQ2qz069RSe3HPlLSZCrJ-MfoKXVB0b4/edit?gid=0#gid=0" },
            { label: "Лист проверки встречи (AI-ready)", url: "https://docs.google.com/spreadsheets/d/1yRxpNcRxlCdgbRIphnjAVDt1zs77FgXaT3I7NuBDVKw/edit?gid=219469881#gid=219469881" }
          ]
        },
        {
          title: "4. Разработка и внедрение системы вознаграждения менеджеров ОП",
          hours: "40 ч",
          docs: "Система вознаграждения сотрудников ОП согласно орг. структуре (до 5 сотрудников) в формате Google Таблицы.",
          links: [
            { label: "Пример системы вознаграждения", url: "https://docs.google.com/presentation/d/1NlR8LPNa5-bP1fVow_yTEej-PonAEADB9KQmsFj97_I/edit?slide=id.h3c9dbd798f227201_0_0#slide=id.h3c9dbd798f227201_0_0" }
          ]
        },
        {
          title: "5. Обучение и итоговая аттестация",
          hours: "10 ч",
          docs: "Обучение новым инструментам и 100% прохождение тестирования в Google Форме.",
          links: []
        }
      ]
    }
  };

  /* ==========================================================================
     2. МОДАЛЬНОЕ ОКНО СПЕЦИФИКАЦИИ
     ========================================================================== */
  const modal = document.getElementById("specModal");
  const modalBody = document.getElementById("modalBody");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalTabs = document.querySelectorAll(".m-tab");

  function renderModal(tierKey) {
    const data = PROGRAMS[tierKey];
    if (!data || !modalBody) return;

    modalTabs.forEach((t) => {
      t.classList.toggle("active", t.getAttribute("data-tier") === tierKey);
    });

    const stagesHtml = data.stages
      .map((st) => {
        const linksHtml = st.links.length
          ? `<div class="m-links">
              ${st.links
                .map(
                  (l) =>
                    `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="m-link">↗ ${l.label}</a>`
                )
                .join("")}
            </div>`
          : "";

        return `
          <div class="m-stage">
            <div class="m-stage-head">
              <strong>${st.title}</strong>
              <span class="m-hours">Трудозатраты: ${st.hours}</span>
            </div>
            <div class="m-docs">${st.docs}</div>
            ${linksHtml}
          </div>
        `;
      })
      .join("");

    modalBody.innerHTML = `
      <div class="m-summary">
        <h3 id="modalTitle">${data.name}</h3>
        <div class="m-meta-pills">
          <span class="m-pill">Срок: ${data.duration}</span>
          <span class="m-pill">Объем: ${data.hours}</span>
          <span class="m-pill">Стоимость: ${data.price}</span>
        </div>
      </div>
      ${stagesHtml}
      <div class="m-conditions">
        <strong>Необходимые доступы для старта работ:</strong> регламенты ОП, текущие формы планов и отчетности, CRM-система и статистики (MQL, SQL, сделки, конверсии).
      </div>
    `;
  }

  document.querySelectorAll(".js-open-modal").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tier = btn.getAttribute("data-modal-tier") || "baza";
      renderModal(tier);
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  modalTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      renderModal(tab.getAttribute("data-tier"));
    });
  });

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeModalBtn?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  /* ==========================================================================
     3. ПОЛНОЭКРАННОЕ МОБИЛЬНОЕ МЕНЮ
     ========================================================================== */
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");

  function toggleMobileMenu(forceState) {
    const isOpen =
      typeof forceState === "boolean"
        ? forceState
        : !mobileDrawer.classList.contains("open");

    mobileDrawer.classList.toggle("open", isOpen);
    burgerBtn.classList.toggle("active", isOpen);
    burgerBtn.setAttribute("aria-expanded", String(isOpen));
    mobileDrawer.setAttribute("aria-hidden", String(!isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  burgerBtn?.addEventListener("click", () => toggleMobileMenu());

  mobileDrawer?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => toggleMobileMenu(false));
  });

  /* ==========================================================================
     4. ЗАМЕНА ФОТО-ЗАПАЕК В 1 КЛИК
     ========================================================================== */
  const photoInput = document.getElementById("photoInput");
  let currentPhotoTarget = null;

  ["heroPhoto", "expertPhoto"].forEach((id) => {
    const saved = localStorage.getItem(`zgp_photo_${id}`);
    const img = document.getElementById(id);
    if (saved && img) img.src = saved;
  });

  document.querySelectorAll(".replace-photo-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPhotoTarget = btn.getAttribute("data-target");
      photoInput.value = "";
      photoInput.click();
    });
  });

  photoInput?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file || !currentPhotoTarget) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result;
      if (typeof dataUrl === "string") {
        const img = document.getElementById(currentPhotoTarget);
        if (img) img.src = dataUrl;
        try {
          localStorage.setItem(`zgp_photo_${currentPhotoTarget}`, dataUrl);
        } catch (_) {}
      }
    };
    reader.readAsDataURL(file);
  });

  /* ==========================================================================
     5. ВЫБОР ТАРИФА И ФОРМА ЗАЯВКИ
     ========================================================================== */
  const userTariff = document.getElementById("userTariff");
  document.querySelectorAll(".js-choose-tariff").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-tariff");
      if (userTariff && val) userTariff.value = val;
    });
  });

  const phoneInput = document.getElementById("userPhone");
  phoneInput?.addEventListener("input", (e) => {
    let digits = e.target.value.replace(/\D/g, "");
    if (digits.startsWith("7") || digits.startsWith("8")) digits = digits.slice(1);
    digits = digits.slice(0, 10);

    let res = "+7";
    if (digits.length > 0) res += " (" + digits.substring(0, 3);
    if (digits.length >= 4) res += ") " + digits.substring(3, 6);
    if (digits.length >= 7) res += "-" + digits.substring(6, 8);
    if (digits.length >= 9) res += "-" + digits.substring(8, 10);

    e.target.value = digits.length > 0 ? res : "";
    phoneInput.classList.remove("invalid");
    document.getElementById("phoneError")?.classList.remove("visible");
  });

  const nameInput = document.getElementById("userName");
  nameInput?.addEventListener("input", () => {
    nameInput.classList.remove("invalid");
    document.getElementById("nameError")?.classList.remove("visible");
  });

  const leadForm = document.getElementById("leadForm");
  const formSuccess = document.getElementById("formSuccess");
  const successText = document.getElementById("successText");
  const resetFormBtn = document.getElementById("resetFormBtn");

  leadForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const digits = phoneInput.value.replace(/\D/g, "");
    let ok = true;

    if (name.length < 2) {
      nameInput.classList.add("invalid");
      document.getElementById("nameError")?.classList.add("visible");
      ok = false;
    }

    if (digits.length < 11) {
      phoneInput.classList.add("invalid");
      document.getElementById("phoneError")?.classList.add("visible");
      ok = false;
    }

    if (!ok) return;

    successText.textContent = `${name}, ваша заявка (${userTariff.value}) принята. Мы свяжемся с вами по номеру ${phoneInput.value}.`;
    leadForm.hidden = true;
    formSuccess.hidden = false;
  });

  resetFormBtn?.addEventListener("click", () => {
    leadForm.reset();
    formSuccess.hidden = true;
    leadForm.hidden = false;
  });
});

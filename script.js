/**
 * ЗА ГРАНЬЮ ПРОДАЖ — Логика интерфейса и интерактивная спецификация программ (из ODS)
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. ДАННЫЕ СПЕЦИФИКАЦИИ ПРОГРАММ (ТОЧНОЕ СООТВЕТСТВИЕ ЛИСТУ «4. Программы» ODS)
     ========================================================================== */
  const PROGRAMS_DATA = {
    baza: {
      name: "БАЗА",
      duration: "4 недели",
      totalHours: "138 чел/час",
      price: "110 400 ₽",
      stages: [
        {
          title: "1). Аудит текущей системы управления продажами",
          result: "1). Проведен аудит текущей системы управления продажами",
          docs: `1). Презентация по результатам аудита в формате «Гугл Презентация» со следующими разделами:
• Орг. структура («как есть» — «как будет»)
• Планирование месяца («как есть» — «как будет»)
• Планирование недели («как есть» — «как будет»)
• Ежедневная отчетность («как есть» — «как будет»)`,
          hours: "40 чел/час",
          links: [
            {
              label: "Пример презентации аудита (Google Slides)",
              url: "https://docs.google.com/presentation/d/1NlR8LPNa5-bP1fVow_yTEej-PonAEADB9KQmsFj97_I/edit?slide=id.h3c9dbd798f227201_0_0#slide=id.h3c9dbd798f227201_0_0"
            }
          ]
        },
        {
          title: "2). Разработка организационной структуры ОП (роли, функции, описание ценного конечного продукта (ЦКП) сотрудников ОП — не более 5-ти сотрудников)",
          result: "2). Орг. структура ОП согласована и утверждена",
          docs: `2). Орг. структура ОП в формате «Гугл Таблица» со следующими элементами:
• Пост (позиция)
• Должность
• Функция должности
• Ценный конечный продукт должности (ЦКП)`,
          hours: "16 чел/час",
          links: [
            {
              label: "Пример орг. структуры и ЦКП",
              url: "https://docs.google.com/presentation/d/1C5mzQU9bqBcG_4IvDVvXdqLhHXn-NSAIpma07K3cV8w/edit?slide=id.g337e036ce97_0_0#slide=id.g337e036ce97_0_0"
            }
          ]
        },
        {
          title: "3). Запуск и внедрение планирования ОП на месяц / неделю",
          result: "3.1). Форма планирования ОП на месяц согласована и утверждена.\n3.2). Форма планирования ОП на неделю согласована и утверждены.",
          docs: `3.1). План на месяц с декомпозицией по сотрудникам согласно орг. структуре в формате «Гугл Таблица» (не более 3-х подразделений), включая показатели:
• план – факт новых лидов (MQL)
• план – факт квалифицированных лидов (прошедших фильтр отбора, SQL)
• план – факт кол-ва сделок
• план – факт суммы сделок

3.2). Недельный план для каждого сотрудника согласно орг. структуре в формате «Гугл Таблица» (не более 5-ти сотрудников), включая показатели:
• план – факт кол-ва сделок за неделю / за 5 недель
• план – факт суммы сделок за неделю / за 5 недель
• план – факт статистик (не более 5 шт) за неделю / за 5 недель`,
          hours: "32 чел/час",
          links: [
            {
              label: "Пример плана на месяц (Google Таблица)",
              url: "https://docs.google.com/spreadsheets/d/1u2bdASJfEbuZWqI25pc3mZEibWE--4Wj6YBbGpGfss0/edit?gid=1495679339#gid=1495679339"
            },
            {
              label: "Пример недельного плана (Google Таблица)",
              url: "https://docs.google.com/spreadsheets/d/1pSXnf-eMQtrTxGCF1UJ25C_dc-Ux1w-oH7CBp336gzo/edit?gid=2122964814#gid=2122964814"
            }
          ]
        },
        {
          title: "4). Внедрение ежедневной отчетности ОП",
          result: "4). Формы ежедневной отчетности ОП согласованы и утверждены",
          docs: `4). Ежедневный отчет для каждого сотрудника согласно орг. структуре в формате «Гугл Таблица» (не более 5-ти сотрудников), включая элементы:
• показатели статистик за день в виде Таблицы
• показатели статистик по неделям в виде Таблицы и Диаграммы
• показатели статистик по месяцам в виде Таблицы и Диаграммы
• показатели статистик по году в виде Таблицы
• сводный отчет по показателям статистик всех сотрудников по дням, неделям, месяцам, году в виде Таблицы и Диаграмм`,
          hours: "40 чел/час",
          links: [
            {
              label: "Пример ежедневной отчетности и дашбордов",
              url: "https://docs.google.com/spreadsheets/d/1Aj4gFCuajUKcLtd5RZTD-xolnRB3DZ4bgBCHyuadFf8/edit?gid=1224637347#gid=1224637347"
            }
          ]
        },
        {
          title: "5). Обучение",
          result: "5). Сотрудники обучены новым инструментам (не более 5-ти сотрудников)",
          docs: "5). Тестирование успешно пройдено (100% правильных ответов) каждым сотрудником согласно орг. структуре (не более 5-ти сотрудников) в формате «Гугл Форма»",
          hours: "10 чел/час",
          links: []
        }
      ]
    },

    expert: {
      name: "ЭКСПЕРТ",
      duration: "8 недель",
      totalHours: "252 чел/час",
      price: "201 600 ₽",
      stages: [
        {
          title: "1). Содержание программы «БАЗА»",
          result: "1). Результаты программы «БАЗА» в полном объеме",
          docs: "1). Все отчетные документы программы «БАЗА» (Аудит ОП, Оргструктура и ЦКП, Планы на месяц/неделю, Ежедневная отчетность и дашборды)",
          hours: "138 чел/час",
          links: [
            {
              label: "См. документы программы «БАЗА»",
              url: "#deliverables",
              switchTab: "baza"
            }
          ]
        },
        {
          title: "2). Внедрение принципов по работе с задачами",
          result: "2.1). Проведено обучение и тестирование сотрудников ОП по работе с задачами.\n2.2). Регламент по работе сотрудников ОП с задачами согласован и утвержден.",
          docs: `2.1). Тестирование успешно пройдено (100% правильных ответов) каждым сотрудником согласно орг. структуре (не более 5-ти сотрудников) в формате «Гугл Форма»
2.2). Регламент по работе с задачами в формате «Гугл Документ»`,
          hours: "24 чел/час",
          links: [
            {
              label: "Пример формы тестирования (Google Форма)",
              url: "https://docs.google.com/forms/d/1K3n0fQXa-jQ15Ba157X_ZS-Y5I4LCK4miBUqScNP-gw/edit"
            },
            {
              label: "Пример регламента по задачам (Google Документ)",
              url: "https://docs.google.com/document/d/18cEm5ofT0xBswe-tX0fEWttQv50AjTbcI_HAvIVcYyQ/edit?tab=t.0"
            }
          ]
        },
        {
          title: "3). Разработка Папки должности менеджера по продажам",
          result: "3). Папка должности менеджера по продажам согласована и утверждена",
          docs: `3). Папка должности в формате «Гугл Документ» со следующими разделами:
• Введение (функция, ЦКП, подпродукты)
• Содержание должности (статистики, идеальные картины, полномочия, функционал, требования, условия работы)
• Особенности (про боли клиентов, про скидки/рассрочки)
• Правила работы в должности (законы должности, правила работы в CRM-системе, этические нормы, правила заполнения отчетности, правила коммуникации с клиентами)
• Карта потребностей / проблем / болей целевой аудитории (ЦА)
• Карта возражений`,
          hours: "40 чел/час",
          links: [
            {
              label: "Пример Папки должности (Google Документ)",
              url: "https://docs.google.com/document/d/18cEm5ofT0xBswe-tX0fEWttQv50AjTbcI_HAvIVcYyQ/edit?tab=t.0#heading=h.6plmww50xlrn"
            }
          ]
        },
        {
          title: "4). Аудит текущей CRM-системы",
          result: "4). Проведен аудит текущей CRM-системы",
          docs: `4). Презентация по результатам аудита в формате «Гугл Презентация» со следующими разделами:
• Воронки CRM-системы (не более 5-ти штук) («как есть» — «как будет»)
• Этапы каждой воронки («как есть» — «как будет»)
• Правила работы в CRM-системе («как будет»)`,
          hours: "40 чел/час",
          links: [
            {
              label: "Пример презентации аудита CRM",
              url: "https://docs.google.com/presentation/d/1NlR8LPNa5-bP1fVow_yTEej-PonAEADB9KQmsFj97_I/edit?slide=id.h3c9dbd798f227201_0_0#slide=id.h3c9dbd798f227201_0_0"
            }
          ]
        },
        {
          title: "5). Обучение",
          result: "5). Сотрудники обучены новым инструментам (не более 5-ти сотрудников)",
          docs: "5). Тестирование успешно пройдено (100% правильных ответов) каждым сотрудником согласно орг. структуре (не более 5-ти сотрудников) в формате «Гугл Форма»",
          hours: "10 чел/час",
          links: []
        }
      ]
    },

    profi: {
      name: "ПРОФИ",
      duration: "12 недель",
      totalHours: "422 чел/час",
      price: "337 600 ₽",
      stages: [
        {
          title: "1). Программа «ЭКСПЕРТ» (включая «БАЗА»)",
          result: "1). Все результаты программ «БАЗА» и «ЭКСПЕРТ»",
          docs: "1). Полный пакет отчетных документов программ «БАЗА» и «ЭКСПЕРТ»",
          hours: "252 чел/час",
          links: [
            {
              label: "См. документы программы «ЭКСПЕРТ»",
              url: "#deliverables",
              switchTab: "expert"
            }
          ]
        },
        {
          title: "2). Разработка скриптов и сценариев звонков / встреч",
          result: "2.1). Скрипт звонка согласован и утвержден\n2.2). Сценарий встречи согласован и утвержден\n2.3). Шаблон презентации встречи согласно сценария встречи согласован и утвержден",
          docs: `2.1). Скрипт звонка (1 шт.) в формате «Гугл Таблица» со следующими разделами:
• Вступление, Утепление, Предложение, Убеждение, Закрепление

2.2). Сценарий встречи (1 шт.) в формате «Гугл Документ» со следующими разделами:
• Подготовка, Установление контакта, Программирование, Выявление потребности (проблемы, боли), Презентация решения согласно потребностям, Предзакрытие, Закрытие

2.3). Шаблон презентации встречи согласно Сценарию (1 шт.) в формате «Гугл Презентация»`,
          hours: "80 чел/час",
          links: [
            {
              label: "Пример скрипта звонка (Google Таблица)",
              url: "https://docs.google.com/spreadsheets/d/1u2bdASJfEbuZWqI25pc3mZEibWE--4Wj6YBbGpGfss0/edit?gid=90302322#gid=90302322"
            },
            {
              label: "Пример сценария встречи (Google Документ)",
              url: "https://docs.google.com/document/d/1CXyWMybgC12mWsu3f12dfTIZVQxZVGeX5ZbGcOAQRdI/edit?tab=t.0"
            },
            {
              label: "Пример шаблона презентации встречи",
              url: "https://docs.google.com/presentation/d/18neJIKJyxubIBgbnVarPIg6nJjBr2R_ywOkPV4fYNdA/edit?slide=id.g3cd3346896e_0_514#slide=id.g3cd3346896e_0_514"
            }
          ]
        },
        {
          title: "3). Внедрение контроля качества",
          result: "3.1). Лист проверки качества звонка согласован и утвержден\n3.2). Лист проверки качества встречи согласован и утвержден",
          docs: `3.1). Лист проверки звонка согласно скрипту в формате «Гугл Таблица» (применимо для проверки AI-агентом)
3.2). Лист проверки встречи согласно сценарию в формате «Гугл Таблица» (применимо для проверки AI-агентом)`,
          hours: "40 чел/час",
          links: [
            {
              label: "Пример листа проверки звонка (AI-ready)",
              url: "https://docs.google.com/spreadsheets/d/1XxJAdpmux5UrQ2qz069RSe3HPlLSZCrJ-MfoKXVB0b4/edit?gid=0#gid=0"
            },
            {
              label: "Пример листа проверки встречи (AI-ready)",
              url: "https://docs.google.com/spreadsheets/d/1yRxpNcRxlCdgbRIphnjAVDt1zs77FgXaT3I7NuBDVKw/edit?gid=219469881#gid=219469881"
            }
          ]
        },
        {
          title: "4). Разработка и внедрение системы вознаграждения менеджеров по продажам",
          result: "4.1). Система вознаграждения менеджеров по продажам согласована и утверждена",
          docs: "4.1). Система вознаграждения сотрудников ОП согласно орг. структуре (не более 5-ти сотрудников) в формате «Гугл Таблица»",
          hours: "40 чел/час",
          links: [
            {
              label: "Пример системы вознаграждения ОП",
              url: "https://docs.google.com/presentation/d/1NlR8LPNa5-bP1fVow_yTEej-PonAEADB9KQmsFj97_I/edit?slide=id.h3c9dbd798f227201_0_0#slide=id.h3c9dbd798f227201_0_0"
            }
          ]
        },
        {
          title: "5). Обучение",
          result: "5). Сотрудники обучены новым инструментам (не более 5-ти сотрудников)",
          docs: "5). Тестирование успешно пройдено (100% правильных ответов) каждым сотрудником согласно орг. структуре (не более 5-ти сотрудников) в формате «Гугл Форма»",
          hours: "10 чел/час",
          links: []
        }
      ]
    }
  };

  /* ==========================================================================
     2. РЕНДЕРИНГ И ПЕРЕКЛЮЧЕНИЕ ТАБОВ СПЕЦИФИКАЦИИ
     ========================================================================== */
  const specContainer = document.getElementById("specContentContainer");
  const specTabs = document.querySelectorAll(".spec-tab");

  function renderSpecProgram(key) {
    const prog = PROGRAMS_DATA[key];
    if (!prog || !specContainer) return;

    const stagesHtml = prog.stages
      .map((stage) => {
        const linksHtml =
          stage.links && stage.links.length > 0
            ? `<div class="spec-doc-links">
                ${stage.links
                  .map((lnk) =>
                    lnk.switchTab
                      ? `<button type="button" class="doc-sample-link js-switch-spec-inline" data-target-tab="${lnk.switchTab}">
                           <span>↗</span> <span>${lnk.label}</span>
                         </button>`
                      : `<a href="${lnk.url}" target="_blank" rel="noopener noreferrer" class="doc-sample-link">
                           <span>📄</span> <span>${lnk.label}</span>
                         </a>`
                  )
                  .join("")}
               </div>`
            : `<span style="font-size:12.5px; color:var(--text-muted);">Внутренняя аттестация в Google Формах</span>`;

        return `
          <div class="spec-stage-card">
            <div>
              <span class="spec-col-label">Содержание и результат</span>
              <h4 class="spec-stage-title">${stage.title}</h4>
              <div class="spec-result-box">${stage.result}</div>
            </div>
            <div>
              <span class="spec-col-label">Отчетные документы</span>
              <div class="spec-docs-text">${stage.docs}</div>
            </div>
            <div class="spec-meta-col">
              <span class="spec-col-label">Трудозатраты и образцы</span>
              <div class="spec-hours-badge">⏱ ТРЗ: ${stage.hours}</div>
              ${linksHtml}
            </div>
          </div>
        `;
      })
      .join("");

    specContainer.innerHTML = `
      <div class="spec-summary-bar">
        <div class="spec-summary-left">
          <span class="spec-summary-title">Программа «${prog.name}»</span>
          <span class="spec-pill">Срок: ${prog.duration}</span>
          <span class="spec-pill">Суммарно: ${prog.totalHours}</span>
          <span class="spec-pill spec-pill-price">Стоимость: ${prog.price}</span>
        </div>
        <a href="#webinar" class="btn btn-primary btn-sm js-select-program" data-program="${prog.name} (${prog.duration} — ${prog.price})">
          Заказать программу «${prog.name}»
        </a>
      </div>
      <div class="spec-stages-list">
        ${stagesHtml}
      </div>
    `;

    // Привязка внутренних кнопок переключения табов и выбора программы
    specContainer.querySelectorAll(".js-switch-spec-inline").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target-tab");
        activateSpecTab(target);
      });
    });

    bindSelectProgramButtons(specContainer);
  }

  function activateSpecTab(tabKey) {
    specTabs.forEach((t) => {
      t.classList.toggle("active", t.getAttribute("data-spec-tab") === tabKey);
    });
    renderSpecProgram(tabKey);
  }

  specTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateSpecTab(tab.getAttribute("data-spec-tab"));
    });
  });

  // Кнопки «Смотреть отчетные документы →» из карточек тарифов
  document.querySelectorAll(".js-jump-spec").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      activateSpecTab(targetTab);
      const deliverablesEl = document.getElementById("deliverables");
      if (deliverablesEl) {
        deliverablesEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Первичный рендер
  renderSpecProgram("baza");

  /* ==========================================================================
     3. ИНТЕРАКТИВНЫЙ 12-НЕДЕЛЬНЫЙ ТРЕК СПРИНТОВ (ШАГ — 2 НЕДЕЛИ)
     ========================================================================== */
  const SPRINT_DATA = {
    1: {
      badge: "Спринт 1 • Программа «БАЗА»",
      title: "Недели 1–2: Глубокий аудит системы управления и разработка Оргструктуры ОП",
      text: "Фиксируем состояние «как есть» и проектируем модель «как будет» по оргструктуре, планированию и отчетности. Разрабатываем таблицу должностей, функций и Ценного Конечного Продукта (ЦКП) для сотрудников отдела продаж (до 5 человек)."
    },
    2: {
      badge: "Спринт 2 • Завершение программы «БАЗА»",
      title: "Недели 3–4: Планирование месяц/неделя, ежедневная отчетность и аттестация",
      text: "Внедряем декомпозицию планов по MQL, SQL, количеству и сумме сделок. Запускаем ежедневные, недельные, месячные и годовые отчеты с диаграммами. Проводим обучение и 100% тестирование сотрудников в Google Формах."
    },
    3: {
      badge: "Спринт 3 • Программа «ЭКСПЕРТ»",
      title: "Недели 5–6: Регламент работы с задачами и Папка должности менеджера ОП",
      text: "Утверждаем регламент дисциплины задач и проводим тестирование. Разрабатываем исчерпывающую Папку должности менеджера по продажам: ЦКП, законы должности, правила коммуникации, карту болей ЦА и карту возражений."
    },
    4: {
      badge: "Спринт 4 • Завершение программы «ЭКСПЕРТ»",
      title: "Недели 7–8: Аудит воронок CRM-системы и аттестация по стандартам",
      text: "Проводим аудит до 5 воронок CRM и этапов каждой воронки («как есть» — «как будет»), утверждаем жесткие правила ведения CRM-системы и проводим финальное тестирование команды."
    },
    5: {
      badge: "Спринт 5 • Программа «ПРОФИ»",
      title: "Недели 9–10: Разработка скриптов звонков, сценариев и презентаций встреч",
      text: "Создаем скрипт звонка (Вступление, Утепление, Предложение, Убеждение, Закрепление), полный сценарий проведения встречи (от программирования и выявления болей до закрытия) и шаблон презентации решения."
    },
    6: {
      badge: "Спринт 6 • Завершение программы «ПРОФИ»",
      title: "Недели 11–12: Внедрение AI-ready контроля качества и системы мотивации ОП",
      text: "Внедряем листы проверки качества звонков и встреч (адаптированные для проверки AI-агентами), утверждаем прозрачную систему вознаграждения менеджеров и проводим итоговую аттестацию."
    }
  };

  const sprintBtns = document.querySelectorAll(".sprint-step");
  const sprintBadge = document.getElementById("sprintDetailBadge");
  const sprintTitle = document.getElementById("sprintDetailTitle");
  const sprintText = document.getElementById("sprintDetailText");

  sprintBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-sprint");
      const info = SPRINT_DATA[idx];
      if (!info) return;

      sprintBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      sprintBadge.textContent = info.badge;
      sprintTitle.textContent = info.title;
      sprintText.textContent = info.text;
    });
  });

  /* ==========================================================================
     4. ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ (DARK / LIGHT) И МОБИЛЬНОЕ МЕНЮ
     ========================================================================== */
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("beyondSalesTheme");
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("beyondSalesTheme", next);
    });
  }

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ==========================================================================
     5. ЗАГРУЗКА И ПРИМЕРКА СВОИХ ФОТО ДИРЕКТОРА НА МЕСТЕ ЗАПАЕК
     ========================================================================== */
  const photoUploaderInput = document.getElementById("photoUploaderInput");
  let activeTargetImgId = null;

  const DEFAULT_PHOTOS = {
    "img-hero-director": "assets/director-dashboard.svg",
    "img-director-main": "assets/director-main.svg",
    "img-director-session": "assets/director-session.svg"
  };

  // Восстановление ранее загруженных пользователем фото из localStorage
  Object.keys(DEFAULT_PHOTOS).forEach((imgId) => {
    const savedDataUrl = localStorage.getItem(`customPhoto_${imgId}`);
    const imgEl = document.getElementById(imgId);
    if (savedDataUrl && imgEl) {
      imgEl.src = savedDataUrl;
    }
  });

  document.querySelectorAll(".btn-upload-photo").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTargetImgId = btn.getAttribute("data-target-img");
      if (photoUploaderInput) {
        photoUploaderInput.value = "";
        photoUploaderInput.click();
      }
    });
  });

  if (photoUploaderInput) {
    photoUploaderInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file || !activeTargetImgId) return;

      const reader = new FileReader();
      reader.onload = (ev) => {
        const resultUrl = ev.target?.result;
        if (typeof resultUrl === "string") {
          const imgEl = document.getElementById(activeTargetImgId);
          if (imgEl) {
            imgEl.src = resultUrl;
          }
          try {
            localStorage.setItem(`customPhoto_${activeTargetImgId}`, resultUrl);
          } catch (_) {
            // Если фото слишком большое для localStorage, оно все равно отобразится на странице
          }
        }
      };
      reader.readAsDataURL(file);
    });
  }

  const resetPhotosBtn = document.getElementById("resetPhotosBtn");
  if (resetPhotosBtn) {
    resetPhotosBtn.addEventListener("click", () => {
      Object.entries(DEFAULT_PHOTOS).forEach(([imgId, defaultSrc]) => {
        localStorage.removeItem(`customPhoto_${imgId}`);
        const imgEl = document.getElementById(imgId);
        if (imgEl) imgEl.src = defaultSrc;
      });
    });
  }

  /* ==========================================================================
     6. ВЫБОР ПРОГРАММЫ И ФОРМА ЗАПИСИ НА ВЕБИНАР С МАСКОЙ ТЕЛЕФОНА
     ========================================================================== */
  const programSelect = document.getElementById("userProgram");

  function bindSelectProgramButtons(root = document) {
    root.querySelectorAll(".js-select-program").forEach((btn) => {
      btn.addEventListener("click", () => {
        const progVal = btn.getAttribute("data-program");
        if (programSelect && progVal) {
          programSelect.value = progVal;
        }
      });
    });
  }

  bindSelectProgramButtons(document);

  // Маска телефона +7 (___) ___-__-__
  const phoneInput = document.getElementById("userPhone");
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      let digits = e.target.value.replace(/\D/g, "");
      if (digits.startsWith("8") || digits.startsWith("7")) {
        digits = digits.slice(1);
      }
      digits = digits.slice(0, 10);

      let formatted = "+7";
      if (digits.length > 0) {
        formatted += " (" + digits.substring(0, 3);
      }
      if (digits.length >= 4) {
        formatted += ") " + digits.substring(3, 6);
      }
      if (digits.length >= 7) {
        formatted += "-" + digits.substring(6, 8);
      }
      if (digits.length >= 9) {
        formatted += "-" + digits.substring(8, 10);
      }

      e.target.value = digits.length > 0 ? formatted : "";
      phoneInput.classList.remove("invalid");
      document.getElementById("phoneError")?.classList.remove("visible");
    });
  }

  const nameInput = document.getElementById("userName");
  if (nameInput) {
    nameInput.addEventListener("input", () => {
      nameInput.classList.remove("invalid");
      document.getElementById("nameError")?.classList.remove("visible");
    });
  }

  const leadForm = document.getElementById("leadForm");
  const formSuccess = document.getElementById("formSuccess");
  const formSuccessText = document.getElementById("formSuccessText");
  const resetFormBtn = document.getElementById("resetFormBtn");

  if (leadForm) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameVal = nameInput ? nameInput.value.trim() : "";
      const phoneDigits = phoneInput ? phoneInput.value.replace(/\D/g, "") : "";
      const selectedProg = programSelect ? programSelect.value : "Участие в вебинаре";

      let valid = true;

      if (nameVal.length < 2) {
        nameInput?.classList.add("invalid");
        document.getElementById("nameError")?.classList.add("visible");
        valid = false;
      }

      if (phoneDigits.length < 11) {
        phoneInput?.classList.add("invalid");
        document.getElementById("phoneError")?.classList.add("visible");
        valid = false;
      }

      if (!valid) return;

      if (formSuccessText) {
        formSuccessText.textContent = `${nameVal}, ваша заявка («${selectedProg}») принята! Мы свяжемся с вами по номеру ${phoneInput.value} в ближайшее время.`;
      }

      leadForm.hidden = true;
      if (formSuccess) formSuccess.hidden = false;
    });
  }

  if (resetFormBtn && leadForm && formSuccess) {
    resetFormBtn.addEventListener("click", () => {
      leadForm.reset();
      formSuccess.hidden = true;
      leadForm.hidden = false;
    });
  }
});

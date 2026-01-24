const translations = {
  ru: {
    navFeatures: "Преимущества",
    navPricing: "Цены",
    navCompare: "Сравнение",
    navFaq: "FAQ",
    navBlog: "Блог",

    langLabel: "Сменить язык:",

    btnLogin: "Войти",
    btnGetVpn: "Получить VPN",

    title: "Один VPN.\nБезграничные возможности.",
    subtitle:
      "Hiddify VPN защищает вашу приватность, ускоряет соединение и помогает обходить блокировки по всему миру.",

    btnFree: "Попробовать бесплатно",
    btnBuy: "Купить VPN",

    featuresTitle: "Почему выбирают Hiddify VPN?",
    f1Title: "Обходит блокировки",
    f1Text: "Работает там, где другие VPN бессильны.",
    f2Title: "Полная анонимность",
    f2Text: "Современное шифрование и защита от слежки.",
    f3Title: "Максимальная скорость",
    f3Text: "Без просадок и ограничений по трафику.",
    f4Title: "До 10 устройств",
    f4Text: "Одна подписка для телефона, ноутбука и ТВ.",
    f5Title: "Блокировка рекламы",
    f5Text: "Встроенный фильтр рекламы и трекеров.",
    f6Title: "Глобальная сеть серверов",
    f6Text: "Тысячи серверов по всему миру.",

    pricingTitle: "Выберите тариф Hiddify VPN Plus",
    p1Title: "1 месяц",
    p1Text: "Идеально для теста",
    p2Title: "12 месяцев",
    p2Text: "Лучшее предложение",
    p3Title: "24 месяца",
    p3Text: "Максимальная выгода",
    btnChoose: "Выбрать",

    compareTitle: "Сравнение с другими VPN",
    compareText:
      "Hiddify VPN предлагает максимальную безопасность и скорость по сравнению с конкурентами.",

    faqTitle: "Частые вопросы",
    q1: "Как подключиться?",
    a1: "Выберите тариф, получите ключ и подключитесь за 1 минуту.",
    q2: "Есть ли бесплатный тест?",
    a2: "Да, вы можете попробовать бесплатно перед покупкой.",
    q3: "Сколько устройств поддерживается?",
    a3: "До 10 устройств на одной подписке.",

    blogTitle: "Блог Hiddify VPN",
    b1Title: "Почему важна приватность?",
    b1Text: "Как VPN защищает ваши данные в интернете.",
    b2Title: "VPN для стриминга",
    b2Text: "Открывайте доступ к контенту по всему миру.",
    b3Title: "VPN на телефоне",
    b3Text: "Используйте VPN на Android и iOS.",

    footer: "© 2026 Hiddify VPN. Все права защищены."
  },

  en: {
    navFeatures: "Features",
    navPricing: "Pricing",
    navCompare: "Comparison",
    navFaq: "FAQ",
    navBlog: "Blog",

    langLabel: "Language:",

    btnLogin: "Login",
    btnGetVpn: "Get VPN",

    title: "One VPN.\nUnlimited possibilities.",
    subtitle:
      "Hiddify VPN protects your privacy, speeds up your connection, and helps bypass restrictions worldwide.",

    btnFree: "Try for free",
    btnBuy: "Get VPN",

    featuresTitle: "Why choose Hiddify VPN?",
    f1Title: "Bypass restrictions",
    f1Text: "Works where other VPNs fail.",
    f2Title: "Full anonymity",
    f2Text: "Modern encryption and protection from tracking.",
    f3Title: "Maximum speed",
    f3Text: "No slowdowns or traffic limits.",
    f4Title: "Up to 10 devices",
    f4Text: "One subscription for phone, laptop, and TV.",
    f5Title: "Ad blocker",
    f5Text: "Built-in filter against ads and trackers.",
    f6Title: "Global server network",
    f6Text: "Thousands of servers worldwide.",

    pricingTitle: "Choose your Hiddify VPN Plus plan",
    p1Title: "1 month",
    p1Text: "Perfect for testing",
    p2Title: "12 months",
    p2Text: "Best offer",
    p3Title: "24 months",
    p3Text: "Maximum savings",
    btnChoose: "Select",

    compareTitle: "Comparison with other VPNs",
    compareText:
      "Hiddify VPN delivers top security and speed compared to competitors.",

    faqTitle: "Frequently Asked Questions",
    q1: "How do I connect?",
    a1: "Choose a plan, get your key, and connect in 1 minute.",
    q2: "Is there a free trial?",
    a2: "Yes, you can try it for free before buying.",
    q3: "How many devices are supported?",
    a3: "Up to 10 devices with one subscription.",

    blogTitle: "Hiddify VPN Blog",
    b1Title: "Why privacy matters?",
    b1Text: "How VPN protects your data online.",
    b2Title: "VPN for streaming",
    b2Text: "Access content worldwide.",
    b3Title: "VPN on your phone",
    b3Text: "Use VPN on Android and iOS.",

    footer: "© 2026 Hiddify VPN. All rights reserved."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const ruBtn = document.getElementById("lang-ru");
  const enBtn = document.getElementById("lang-en");

  if (ruBtn && enBtn) {
    ruBtn.addEventListener("click", () => setLanguage("ru"));
    enBtn.addEventListener("click", () => setLanguage("en"));
  }

  setLanguage("ru");
});

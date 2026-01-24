const translations = {
  ru: {
    title: "Один VPN. Безграничные возможности.",
    subtitle: "Hiddify VPN защищает вашу приватность, ускоряет соединение и помогает обходить блокировки по всему миру.",
    btnFree: "Попробовать бесплатно",
    btnBuy: "Купить VPN"
  },
  en: {
    title: "One VPN. Unlimited possibilities.",
    subtitle: "Hiddify VPN protects your privacy, speeds up your connection, and helps bypass restrictions worldwide.",
    btnFree: "Try for free",
    btnBuy: "Get VPN"
  }
};

function setLanguage(lang) {
  alert("Язык переключён на: " + lang);
  document.querySelector("[data-i18n='title']").textContent =
    translations[lang].title;

  document.querySelector("[data-i18n='subtitle']").textContent =
    translations[lang].subtitle;

  document.querySelector("[data-i18n='btnFree']").textContent =
    translations[lang].btnFree;

  document.querySelector("[data-i18n='btnBuy']").textContent =
    translations[lang].btnBuy;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lang-ru").onclick = () => setLanguage("ru");
  document.getElementById("lang-en").onclick = () => setLanguage("en");

  setLanguage("ru"); // язык по умолчанию
});

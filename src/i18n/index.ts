import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "./pt-BR.json";
import en from "./en.json";

i18n.use(initReactI18next).init({
  resources: {
    "pt-BR": { translation: ptBR },
    en: { translation: en },
  },
  lng: localStorage.getItem("axonbase-docs-language") || "pt-BR",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (language) => {
  localStorage.setItem("axonbase-docs-language", language);
  document.documentElement.lang = language;
});

export default i18n;

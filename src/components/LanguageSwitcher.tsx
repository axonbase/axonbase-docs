import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language;
  const setLang = (l: string) => i18n.changeLanguage(l);
  return (
    <div className="lang-switcher" aria-label="Language">
      <button type="button" className={`lang-btn ${current === "pt-BR" ? "active" : ""}`} onClick={() => setLang("pt-BR")}>PT</button>
      <button type="button" className={`lang-btn ${current === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
    </div>
  );
}

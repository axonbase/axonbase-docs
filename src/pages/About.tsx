import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="page about-page">
      <span className="eyebrow">AXONBASE / {t("about_eyebrow")}</span>
      <h1>{t("about_title")}</h1>
      <section className="about-profile">
        <div>
          <p className="about-name">Alvaro Brito</p>
          <p className="about-role">{t("about_role")}</p>
        </div>
        <a href="https://www.linkedin.com/in/alvarogomes/" target="_blank" rel="noreferrer">
          {t("about_linkedin")}
        </a>
      </section>
      <p>{t("about_description")}</p>
    </div>
  );
}

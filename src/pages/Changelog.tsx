import { useTranslation } from "react-i18next";

export default function Changelog() {
  const { t } = useTranslation();
  const versions = t("changelog_versions", { returnObjects: true }) as { version: string; date: string; changes: string[] }[];
  return (
    <div className="page changelog-page">
      <h1>{t("changelog_title")}</h1>
      <p>{t("changelog_intro")}</p>
      {versions.map((v, i) => (
        <section key={i} className="changelog-version">
          <h2>{v.version} <span className="changelog-date">{v.date}</span></h2>
          <ul>
            {v.changes.map((c, j) => (
              <li key={j}>{c}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
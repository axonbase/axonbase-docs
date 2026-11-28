import { useTranslation } from "react-i18next";

const NOTES_URL = "https://github.com/axonbase/axonbase/blob/v1.0.0/docs/notas-1.0.0.md";

export default function Limitations() {
  const { t } = useTranslation();
  const security = t("limitations_security", { returnObjects: true }) as [string, string][];
  const experimental = t("limitations_experimental", { returnObjects: true }) as [string, string, string][];
  const other = t("limitations_other", { returnObjects: true }) as string[];
  return (
    <div className="page">
      <h1>{t("limitations_title")}</h1>
      <p>{t("limitations_intro")}</p>
      <section>
        <h2>{t("limitations_security_title")}</h2>
        <p className="release-warning" role="note">{t("limitations_warning")}</p>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead><tr><th>{t("limitations_col_issue")}</th><th>{t("limitations_col_action")}</th></tr></thead>
            <tbody>
              {security.map(([issue, action]) => <tr key={issue}><td>{issue}</td><td>{action}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2>{t("limitations_experimental_title")}</h2>
        <p>{t("limitations_experimental_intro")}</p>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead><tr><th>{t("limitations_col_feature")}</th><th>{t("limitations_col_enabled")}</th><th>{t("limitations_col_missing")}</th></tr></thead>
            <tbody>
              {experimental.map(([name, enabled, missing]) => <tr key={name}><td>{name}</td><td>{enabled}</td><td>{missing}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2>{t("limitations_other_title")}</h2>
        <ul>{other.map((item) => <li key={item}>{item}</li>)}</ul>
        <p><a href={NOTES_URL} target="_blank" rel="noreferrer">{t("limitations_full")}</a></p>
      </section>
    </div>
  );
}

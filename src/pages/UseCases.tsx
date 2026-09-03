import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function UseCases() {
  const { t } = useTranslation();
  const sectors = t("use_cases_sectors", { returnObjects: true }) as { id: string; title: string; pain: string; capabilities: string[]; cta: string; path: string }[];
  const positioning = t("use_cases_positioning", { returnObjects: true }) as { title: string; subtitle: string; features: string[] };
  const comparison = t("use_cases_comparison", { returnObjects: true }) as { need: string; traditional: string; axonbase: string }[];

  return (
    <div className="page use-cases-page">
      <section className="hero use-cases-hero">
        <span className="eyebrow">{t("use_cases_eyebrow")}</span>
        <h1>{t("use_cases_title")}</h1>
        <p className="subtitle">{t("use_cases_intro")}</p>
      </section>

      <section className="positioning-banner">
        <div className="positioning-banner-inner">
          <span className="positioning-badge">{t("use_cases_positioning_badge")}</span>
          <p className="positioning-text">{t("use_cases_positioning_text")}</p>
        </div>
      </section>

      <section className="positioning-breakdown">
        <h2>{positioning.title}</h2>
        <p>{positioning.subtitle}</p>
        <ul className="positioning-features">
          {positioning.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      </section>

      <section>
        <h2>{t("use_cases_sectors_title")}</h2>
        <p>{t("use_cases_sectors_intro")}</p>
        <div className="sector-grid">
          {sectors.map((s) => (
            <article key={s.id} className="sector-card" id={s.id}>
              <h3>{s.title}</h3>
              <p><strong>{t("use_cases_pain")}</strong> {s.pain}</p>
              <ul className="sector-capabilities">{s.capabilities.map((c, i) => <li key={i}>{c}</li>)}</ul>
              <Link to={s.path} className="sector-cta">{s.cta} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="comparison-table-section">
        <h2>{t("use_cases_comparison_title")}</h2>
        <p>{t("use_cases_comparison_intro")}</p>
        <div style={{ overflowX: "auto" }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>{t("use_cases_comparison_need")}</th>
                <th>{t("use_cases_comparison_traditional")}</th>
                <th>{t("use_cases_comparison_axonbase")}</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i}>
                  <td><strong>{row.need}</strong></td>
                  <td>{row.traditional}</td>
                  <td className="axonbase-solution">{row.axonbase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="use-cases-cta">
        <h2>{t("use_cases_cta_title")}</h2>
        <p>{t("use_cases_cta_desc")}</p>
        <div className="use-cases-cta-actions">
          <Link to="/getting-started" className="btn primary">{t("home_get_started")}</Link>
          <Link to="/sdk" className="btn secondary">{t("use_cases_cta_sdk")}</Link>
        </div>
      </section>
    </div>
  );
}
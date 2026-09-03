import { useTranslation } from "react-i18next";

export default function Operators() {
  const { t } = useTranslation();
  const ops = t("sql_operators_list", { returnObjects: true }) as { symbol: string; name: string; desc: string; example: string }[];
  return (
    <div className="page sql-operators-page">
      <h1>{t("sql_operators_title")}</h1>
      <p>{t("sql_operators_intro")}</p>
      <section className="operator-notes">
        <span className="operator-notes-label">AxonQL</span>
        <div><h2>{t("sql_operators_notes_title")}</h2><p>{t("sql_operators_notes_desc")}</p></div>
      </section>
      <div className="operator-grid">
        {ops.map((op) => (
          <article className="operator-card" key={op.symbol}>
            <div className="operator-card-head"><code>{op.symbol}</code><h2>{op.name}</h2></div>
            <p>{op.desc}</p>
            <div className="operator-example"><span>{t("table_example")}</span><code>{op.example}</code></div>
          </article>
        ))}
      </div>
    </div>
  );
}

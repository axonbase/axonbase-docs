import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import FeatureCard from "../../components/FeatureCard";
import FunctionEvaluationDiagram from "../../components/FunctionEvaluationDiagram";

export default function Functions() {
  const { t } = useTranslation();
  const funcs = t("sql_functions_list", { returnObjects: true }) as { name: string; desc: string; example: string }[];
  const categories = t("sql_functions_categories", { returnObjects: true }) as { name: string; desc: string }[];
  return (
    <div className="page sql-functions-page">
      <h1>{t("sql_functions_title")}</h1>
      <p>{t("sql_functions_intro")}</p>
      <section>
        <h2>{t("sql_functions_model_title")}</h2>
        <p>{t("sql_functions_model_desc")}</p>
        <FunctionEvaluationDiagram />
      </section>
      <section>
        <h2>{t("sql_functions_scalar_title")}</h2>
        <p>{t("sql_functions_scalar_desc")}</p>
      </section>
      <section>
        <h2>{t("sql_functions_aggregate_title")}</h2>
        <p>{t("sql_functions_aggregate_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("sql_functions_aggregate_code"), language: "sql" }]} />
      </section>
      <section>
        <h2>{t("sql_functions_discovery_title")}</h2>
        <p>{t("sql_functions_discovery_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("sql_functions_discovery_code"), language: "sql" }]} />
      </section>
      <section>
        <h2>{t("sql_functions_categories_title")}</h2>
        <p>{t("sql_functions_categories_desc")}</p>
        <div className="feature-grid">
          {categories.map((category) => <FeatureCard key={category.name} title={category.name}>{category.desc}</FeatureCard>)}
        </div>
      </section>
      {funcs.map((f, i) => (
        <section key={i}>
          <h3><code>{f.name}</code></h3>
          <p>{f.desc}</p>
          <CodeTabs tabs={[{ label: "SQL", code: f.example, language: "sql" }]} />
        </section>
      ))}
    </div>
  );
}

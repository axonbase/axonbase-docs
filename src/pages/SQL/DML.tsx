import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import MutationLifecycleDiagram from "../../components/MutationLifecycleDiagram";

export default function DML() {
  const { t } = useTranslation();
  const statements = t("sql_dml_statements", { returnObjects: true }) as { name: string; desc: string; example: string }[];
  return (
    <div className="page sql-dml-page">
      <h1>{t("sql_dml_title")}</h1>
      <p>{t("sql_dml_intro")}</p>
      <section>
        <h2>{t("sql_dml_semantics_title")}</h2>
        <p>{t("sql_dml_semantics_desc")}</p>
        <MutationLifecycleDiagram />
        <CodeTabs tabs={[{ label: "SQL", code: t("sql_dml_semantics_code"), language: "sql" }]} />
      </section>
      {statements.map((s, i) => (
        <section key={i}>
          <h2>{s.name}</h2>
          <p>{s.desc}</p>
          <CodeTabs
            tabs={[
              { label: "SQL", code: s.example, language: "sql" },
              { label: "Java", code: t("sql_dml_java"), language: "java" },
              { label: "Python", code: t("sql_dml_python"), language: "python" },
            ]}
          />
        </section>
      ))}
    </div>
  );
}

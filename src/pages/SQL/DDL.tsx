import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import SchemaDesignDiagram from "../../components/SchemaDesignDiagram";

export default function DDL() {
  const { t } = useTranslation();
  const statements = t("sql_ddl_statements", { returnObjects: true }) as { name: string; desc: string; example: string }[];
  return (
    <div className="page sql-ddl-page">
      <h1>{t("sql_ddl_title")}</h1>
      <p>{t("sql_ddl_intro")}</p>
      <section>
        <h2>{t("sql_ddl_schema_title")}</h2>
        <p>{t("sql_ddl_schema_desc")}</p>
        <SchemaDesignDiagram />
        <CodeTabs tabs={[{ label: "SQL", code: t("sql_ddl_schema_code"), language: "sql" }]} />
      </section>
      {statements.map((s, i) => (
        <section key={i}>
          <h2>{s.name}</h2>
          <p>{s.desc}</p>
          <CodeTabs tabs={[{ label: "SQL", code: s.example, language: "sql" }]} />
        </section>
      ))}
    </div>
  );
}

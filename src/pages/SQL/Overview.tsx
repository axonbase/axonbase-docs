import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import MutationLifecycleDiagram from "../../components/MutationLifecycleDiagram";
import SchemaDesignDiagram from "../../components/SchemaDesignDiagram";

export default function Overview() {
  const { t } = useTranslation();
  return (
    <div className="page sql-overview-page">
      <h1>{t("sql_overview_title")}</h1>
      <p>{t("sql_overview_intro")}</p>

      <section>
        <h2>{t("sql_overview_model_title")}</h2>
        <p>{t("sql_overview_model_desc")}</p>
        <SchemaDesignDiagram />
      </section>

      <section>
        <h2>{t("sql_overview_lifecycle_title")}</h2>
        <p>{t("sql_overview_lifecycle_desc")}</p>
        <MutationLifecycleDiagram />
      </section>

      <section>
        <h2>{t("sql_overview_ddl_title")}</h2>
        <p>{t("sql_overview_ddl_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "SQL", code: t("sql_overview_ddl_example"), language: "sql" },
            { label: "Java", code: t("sql_overview_ddl_java"), language: "java" },
          ]}
        />
      </section>

      <section>
        <h2>{t("sql_overview_dml_title")}</h2>
        <p>{t("sql_overview_dml_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "SQL", code: t("sql_overview_dml_example"), language: "sql" },
            { label: "Python", code: t("sql_overview_dml_python"), language: "python" },
          ]}
        />
      </section>

      <section>
        <h2>{t("sql_overview_dql_title")}</h2>
        <p>{t("sql_overview_dql_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "SQL", code: t("sql_overview_dql_example"), language: "sql" },
            { label: "Node", code: t("sql_overview_dql_node"), language: "javascript" },
          ]}
        />
      </section>
    </div>
  );
}

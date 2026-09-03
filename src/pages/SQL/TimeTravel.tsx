import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import WalTimelineDiagram from "../../components/WalTimelineDiagram";

export default function TimeTravel() {
  const { t } = useTranslation();
  return (
    <div className="page sql-time-travel-page">
      <h1>{t("sql_time_travel_title")}</h1>
      <p>{t("sql_time_travel_intro")}</p>

      <section>
        <h2>{t("sql_time_travel_as_of_title")}</h2>
        <p>{t("sql_time_travel_as_of_desc")}</p>
        <WalTimelineDiagram />
        <CodeTabs
          tabs={[
            { label: "SQL", code: t("sql_time_travel_as_of_sql"), language: "sql" },
            { label: "Java", code: t("sql_time_travel_as_of_java"), language: "java" },
            { label: "Node", code: t("sql_time_travel_as_of_node"), language: "javascript" },
            { label: "Python", code: t("sql_time_travel_as_of_python"), language: "python" },
            { label: "Go", code: t("sql_time_travel_as_of_go"), language: "go" },
            { label: "Rust", code: t("sql_time_travel_as_of_rust"), language: "rust" },
          ]}
        />
      </section>

      <section>
        <h2>{t("sql_time_travel_between_title")}</h2>
        <p>{t("sql_time_travel_between_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "SQL", code: t("sql_time_travel_between_sql"), language: "sql" },
            { label: "Java", code: t("sql_time_travel_between_java"), language: "java" },
          ]}
        />
      </section>

      <section>
        <h2>{t("sql_time_travel_diff_title")}</h2>
        <p>{t("sql_time_travel_diff_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("sql_time_travel_diff_sql"), language: "sql" }]} />
      </section>
    </div>
  );
}

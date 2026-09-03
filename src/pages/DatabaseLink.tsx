import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";
import DatabaseLinkDiagram from "../components/DatabaseLinkDiagram";

export default function DatabaseLink() {
  const { t } = useTranslation();
  return (
    <div className="page database-link-page">
      <h1>{t("dblink_title")}</h1>
      <p>{t("dblink_intro")}</p>

      <DatabaseLinkDiagram />

      <section>
        <h2>{t("dblink_create_title")}</h2>
        <p>{t("dblink_create_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("dblink_create_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("dblink_query_title")}</h2>
        <p>{t("dblink_query_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("dblink_query_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("dblink_join_title")}</h2>
        <p>{t("dblink_join_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("dblink_join_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("dblink_drop_title")}</h2>
        <p>{t("dblink_drop_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("dblink_drop_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("dblink_performance_title")}</h2>
        <p>{t("dblink_performance_desc")}</p>
      </section>

      <section>
        <h2>{t("dblink_notes_title")}</h2>
        <p>{t("dblink_notes_desc")}</p>
      </section>
    </div>
  );
}
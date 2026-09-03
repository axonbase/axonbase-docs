import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import UnifiedDataPlatformDiagram from "../../components/UnifiedDataPlatformDiagram";

export default function Overview() {
  const { t } = useTranslation();
  return (
    <div className="page search-overview-page">
      <h1>{t("search_overview_title")}</h1>
      <p>{t("search_overview_subtitle")}</p>

      <section>
        <h2>{t("search_overview_replace_title")}</h2>
        <p>{t("search_overview_replace_desc")}</p>
        <UnifiedDataPlatformDiagram />
      </section>

      <section>
        <h3>{t("search_overview_ft_title")}</h3>
        <p>{t("search_overview_ft_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_overview_ft_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h3>{t("search_overview_vector_title")}</h3>
        <p>{t("search_overview_vector_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_overview_vector_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h3>{t("search_overview_geo_title")}</h3>
        <p>{t("search_overview_geo_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_overview_geo_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h3>{t("search_overview_graph_title")}</h3>
        <p>{t("search_overview_graph_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_overview_graph_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h3>{t("search_overview_columnar_title")}</h3>
        <p>{t("search_overview_columnar_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_overview_columnar_code"), language: "sql" },
        ]} />
      </section>
    </div>
  );
}

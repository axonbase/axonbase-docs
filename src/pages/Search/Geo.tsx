import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import GeoDeliveryDiagram from "../../components/GeoDeliveryDiagram";

export default function Geo() {
  const { t } = useTranslation();
  return (
    <div className="page search-geo-page">
      <h1>{t("search_geo_title")}</h1>
      <p>{t("search_geo_subtitle")}</p>

      <section>
        <h2>{t("search_geo_scenario_title")}</h2>
        <p>{t("search_geo_scenario_desc")}</p>
        <GeoDeliveryDiagram />
      </section>

      <section>
        <h2>{t("search_geo_index_title")}</h2>
        <p>{t("search_geo_index_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_geo_index_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_geo_query_title")}</h2>
        <p>{t("search_geo_query_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_geo_query_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_geo_docker_title")}</h2>
        <p>{t("search_geo_docker_desc")}</p>
        <CodeTabs tabs={[
          { label: "Docker Compose", code: t("search_geo_docker_code"), language: "yaml" },
        ]} />
      </section>
    </div>
  );
}

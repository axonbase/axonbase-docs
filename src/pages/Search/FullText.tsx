import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import FullTextSearchDiagram from "../../components/FullTextSearchDiagram";

export default function FullText() {
  const { t } = useTranslation();
  return (
    <div className="page search-ft-page">
      <h1>{t("search_ft_title")}</h1>
      <p>{t("search_ft_subtitle")}</p>

      <section>
        <h2>{t("search_ft_scenario_title")}</h2>
        <p>{t("search_ft_scenario_desc")}</p>
        <FullTextSearchDiagram />
      </section>

      <section>
        <h2>{t("search_ft_bm25_title")}</h2>
        <p>{t("search_ft_bm25_desc")}</p>
      </section>

      <section>
        <h2>{t("search_ft_index_title")}</h2>
        <p>{t("search_ft_index_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_ft_index_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_ft_query_title")}</h2>
        <p>{t("search_ft_query_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_ft_query_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_ft_docker_title")}</h2>
        <p>{t("search_ft_docker_desc")}</p>
        <CodeTabs tabs={[
          { label: "Docker Compose", code: t("search_ft_docker_code"), language: "yaml" },
        ]} />
      </section>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import GraphJoinComparisonDiagram from "../../components/GraphJoinComparisonDiagram";

export default function Graph() {
  const { t } = useTranslation();
  return (
    <div className="page search-graph-page">
      <h1>{t("search_graph_title")}</h1>
      <p>{t("search_graph_subtitle")}</p>

      <section>
        <h2>{t("search_graph_scenario_title")}</h2>
        <p>{t("search_graph_scenario_desc")}</p>
      </section>

      <section>
        <h2>{t("search_graph_model_title")}</h2>
        <p>{t("search_graph_model_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_graph_model_code"), language: "sql" },
        ]} />
        <GraphJoinComparisonDiagram />
      </section>

      <section>
        <h2>{t("search_graph_traditional_title")}</h2>
        <p>{t("search_graph_traditional_desc")}</p>
        <CodeTabs tabs={[
          { label: "SQL JOIN", code: t("search_graph_traditional_sql"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_graph_axonql_title")}</h2>
        <p>{t("search_graph_axonql_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_graph_axonql_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_graph_docker_title")}</h2>
        <p>{t("search_graph_docker_desc")}</p>
        <CodeTabs tabs={[
          { label: "Docker Compose", code: t("search_graph_docker_code"), language: "yaml" },
        ]} />
      </section>
    </div>
  );
}

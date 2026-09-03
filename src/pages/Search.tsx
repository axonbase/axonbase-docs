import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";
import SearchDockerCompose from "../components/SearchDockerCompose";
import GraphTraversalDiagram from "../components/GraphTraversalDiagram";

export default function Search() {
  const { t } = useTranslation();
  return (
    <div className="page search-page">
      <h1>{t("search_title")}</h1>
      <p>{t("search_intro")}</p>

      <section className="search-hero">
        <h2>{t("search_overview_title")}</h2>
        <p>{t("search_overview_desc")}</p>
        <SearchDockerCompose />
      </section>

      <section>
        <h2>{t("search_ft_title")}</h2>
        <p>{t("search_ft_desc")}</p>
        <img
          alt={t("search_ft_diagram_alt")}
          loading="lazy"
          src="/images/diagram_fulltext.png"
          style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "100%" }}
        />
        <h3>{t("search_ft_bm25_title")}</h3>
        <p>{t("search_ft_bm25_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_ft_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_vector_title")}</h2>
        <p>{t("search_vector_desc")}</p>
        <img
          alt={t("search_vector_diagram_alt")}
          loading="lazy"
          src="/images/diagram_vector.png"
          style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "100%" }}
        />
        <h3>{t("search_vector_hnsw_title")}</h3>
        <p>{t("search_vector_hnsw_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_vector_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_geo_title")}</h2>
        <p>{t("search_geo_desc")}</p>
        <img
          alt={t("search_geo_diagram_alt")}
          loading="lazy"
          src="/images/diagram_geo.png"
          style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "100%" }}
        />
        <h3>{t("search_geo_distance_title")}</h3>
        <p>{t("search_geo_distance_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_geo_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_graph_title")}</h2>
        <p>{t("search_graph_desc")}</p>
        <GraphTraversalDiagram />
        <h3>{t("search_graph_join_title")}</h3>
        <p>{t("search_graph_join_desc")}</p>
        <CodeTabs tabs={[
          { label: "SQL JOIN", code: t("search_graph_sql"), language: "sql" },
          { label: "AxonQL", code: t("search_graph_axonql"), language: "sql" },
        ]} />
      </section>
    </div>
  );
}
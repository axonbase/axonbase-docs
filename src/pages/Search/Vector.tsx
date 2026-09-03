import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import VectorHnswDiagram from "../../components/VectorHnswDiagram";

export default function Vector() {
  const { t } = useTranslation();
  return (
    <div className="page search-vector-page">
      <h1>{t("search_vector_title")}</h1>
      <p>{t("search_vector_subtitle")}</p>

      <section>
        <h2>{t("search_vector_scenario_title")}</h2>
        <p>{t("search_vector_scenario_desc")}</p>
        <VectorHnswDiagram />
      </section>

      <section>
        <h2>{t("search_vector_hnsw_title")}</h2>
        <p>{t("search_vector_hnsw_desc")}</p>
      </section>

      <section>
        <h2>{t("search_vector_index_title")}</h2>
        <p>{t("search_vector_index_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_vector_index_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_vector_query_title")}</h2>
        <p>{t("search_vector_query_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_vector_query_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_vector_hybrid_title")}</h2>
        <p>{t("search_vector_hybrid_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_vector_hybrid_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_vector_python_sdk_title")}</h2>
        <p>{t("search_vector_python_sdk_desc")}</p>
        <CodeTabs tabs={[
          { label: "Python", code: t("search_vector_python_sdk_code"), language: "python" },
        ]} />
      </section>

      <section>
        <h2>{t("search_vector_openai_title")}</h2>
        <p>{t("search_vector_openai_desc")}</p>
        <CodeTabs tabs={[
          { label: "Python", code: t("search_vector_openai_code"), language: "python" },
        ]} />
      </section>

      <section>
        <h2>{t("search_vector_langchain_title")}</h2>
        <p>{t("search_vector_langchain_desc")}</p>
        <CodeTabs tabs={[
          { label: "Python", code: t("search_vector_langchain_code"), language: "python" },
        ]} />
      </section>

      <section>
        <h2>{t("search_vector_agno_title")}</h2>
        <p>{t("search_vector_agno_desc")}</p>
        <CodeTabs tabs={[
          { label: "Python", code: t("search_vector_agno_code"), language: "python" },
        ]} />
      </section>

      <section>
        <h2>{t("search_vector_docker_title")}</h2>
        <p>{t("search_vector_docker_desc")}</p>
        <CodeTabs tabs={[
          { label: "Docker Compose", code: t("search_vector_docker_code"), language: "yaml" },
        ]} />
      </section>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import GraphqlScopeDiagram from "../../components/GraphqlScopeDiagram";

export default function GraphQL() {
  const { t } = useTranslation();
  return (
    <div className="page http-graphql-page">
      <h1>{t("http_graphql_title")}</h1>
      <p>{t("http_graphql_intro")}</p>
      <GraphqlScopeDiagram />

      <section>
        <h2>{t("http_graphql_queries_title")}</h2>
        <p>{t("http_graphql_queries_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "GraphQL", code: t("http_graphql_query_example"), language: "graphql" },
            { label: "cURL", code: t("http_graphql_query_curl"), language: "bash" },
          ]}
        />
      </section>

      <section>
        <h2>{t("http_graphql_mutations_title")}</h2>
        <p>{t("http_graphql_mutations_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "GraphQL", code: t("http_graphql_mutation_example"), language: "graphql" },
            { label: "cURL", code: t("http_graphql_mutation_curl"), language: "bash" },
          ]}
        />
      </section>

      <section>
        <h2>{t("http_graphql_subscriptions_title")}</h2>
        <p>{t("http_graphql_subscriptions_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "GraphQL", code: t("http_graphql_subscription_example"), language: "graphql" },
          ]}
        />
      </section>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";

export default function Overview() {
  const { t } = useTranslation();
  return (
    <div className="page http-overview-page">
      <h1>{t("http_overview_title")}</h1>
      <p>{t("http_overview_intro")}</p>

      <section>
        <h2>{t("http_overview_rest_title")}</h2>
        <p>{t("http_overview_rest_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("http_overview_rest_example"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("http_overview_rpc_title")}</h2>
        <p>{t("http_overview_rpc_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("http_overview_rpc_example"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("http_overview_graphql_title")}</h2>
        <p>{t("http_overview_graphql_desc")}</p>
        <CodeTabs tabs={[{ label: "GraphQL", code: t("http_overview_graphql_example"), language: "graphql" }]} />
      </section>

      <section>
        <h2>{t("http_overview_mcp_title")}</h2>
        <p>{t("http_overview_mcp_desc")}</p>
        <CodeTabs tabs={[{ label: "JSON", code: t("http_overview_mcp_example"), language: "json" }]} />
      </section>
    </div>
  );
}
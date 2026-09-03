import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";

export default function Rest() {
  const { t } = useTranslation();
  return (
    <div className="page http-rest-page">
      <h1>{t("http_rest_title")}</h1>
      <p>{t("http_rest_intro")}</p>

      <section>
        <h2>{t("http_rest_query_title")}</h2>
        <p>{t("http_rest_query_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "cURL", code: t("http_rest_query_curl"), language: "bash" },
            { label: "Java", code: t("http_rest_query_java"), language: "java" },
            { label: "Python", code: t("http_rest_query_python"), language: "python" },
          ]}
        />
      </section>

      <section>
        <h2>{t("http_rest_exec_title")}</h2>
        <p>{t("http_rest_exec_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "cURL", code: t("http_rest_exec_curl"), language: "bash" },
            { label: "Node", code: t("http_rest_exec_node"), language: "javascript" },
          ]}
        />
      </section>

      <section>
        <h2>{t("http_rest_stream_title")}</h2>
        <p>{t("http_rest_stream_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "cURL", code: t("http_rest_stream_curl"), language: "bash" },
            { label: "Go", code: t("http_rest_stream_go"), language: "go" },
          ]}
        />
      </section>
    </div>
  );
}
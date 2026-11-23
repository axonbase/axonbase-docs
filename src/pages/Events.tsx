import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";
import RefTable from "../components/RefTable";

export default function Events() {
  const { t } = useTranslation();
  const list = (key: string) => t(key, { returnObjects: true }) as string[];
  const rows = (key: string) => t(key, { returnObjects: true }) as string[][];
  return (
    <div className="page events-page">
      <h1>{t("events_title")}</h1>
      <p>{t("events_intro")}</p>

      <section>
        <h2>{t("events_envelope_title")}</h2>
        <p>{t("events_envelope_desc")}</p>
        <CodeTabs tabs={[{ label: "JSON", code: t("events_envelope_code"), language: "json" }]} />
        <RefTable headers={list("events_types_headers")} rows={rows("events_types_rows")} />
      </section>

      <section>
        <h2>{t("events_sse_title")}</h2>
        <p>{t("events_sse_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "cURL", code: t("events_sse_curl"), language: "bash" },
            { label: "Node", code: t("events_sse_node"), language: "javascript" },
          ]}
        />
      </section>

      <section>
        <h2>{t("events_webhook_title")}</h2>
        <p>{t("events_webhook_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("events_webhook_env"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("events_verify_title")}</h2>
        <p>{t("events_verify_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "Node", code: t("events_verify_node"), language: "javascript" },
            { label: "Python", code: t("events_verify_python"), language: "python" },
          ]}
        />
      </section>
    </div>
  );
}

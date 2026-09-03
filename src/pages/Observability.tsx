import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";

export default function Observability() {
  const { t } = useTranslation();
  return (
    <div className="page observability-page">
      <h1>{t("observability_title")}</h1>
      <p>{t("observability_intro")}</p>

      <section>
        <h2>{t("observability_health_title")}</h2>
        <p>{t("observability_health_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("observability_health_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("observability_ready_title")}</h2>
        <p>{t("observability_ready_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("observability_ready_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("observability_status_title")}</h2>
        <p>{t("observability_status_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("observability_status_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("observability_metrics_title")}</h2>
        <p>{t("observability_metrics_desc")}</p>
        <CodeTabs tabs={[{ label: "Prometheus", code: t("observability_metrics_code"), language: "text" }]} />
      </section>

      <section>
        <h2>{t("observability_logging_title")}</h2>
        <p>{t("observability_logging_desc")}</p>
        <CodeTabs tabs={[{ label: "JSON", code: t("observability_logging_code"), language: "json" }]} />
      </section>
    </div>
  );
}
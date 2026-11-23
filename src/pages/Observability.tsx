import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";
import RefTable from "../components/RefTable";

export default function Observability() {
  const { t } = useTranslation();
  const list = (key: string) => t(key, { returnObjects: true }) as string[];
  const rows = (key: string) => t(key, { returnObjects: true }) as string[][];
  const groups = t("obs_metric_groups", { returnObjects: true }) as { title: string; rows: string[][] }[];
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
        {groups.map((g) => (
          <div key={g.title}>
            <h3>{g.title}</h3>
            <RefTable headers={list("obs_metric_headers")} rows={g.rows} />
          </div>
        ))}
      </section>

      <section>
        <h2>{t("obs_scrape_title")}</h2>
        <p>{t("obs_scrape_desc")}</p>
        <CodeTabs tabs={[{ label: "YAML", code: t("obs_scrape_code"), language: "yaml" }]} />
      </section>

      <section>
        <h2>{t("observability_logging_title")}</h2>
        <p>{t("observability_logging_desc")}</p>
        <CodeTabs tabs={[{ label: "JSON", code: t("observability_logging_code"), language: "json" }]} />
        <h3>{t("obs_log_fields_title")}</h3>
        <RefTable headers={list("obs_log_fields_headers")} rows={rows("obs_log_fields_rows")} />
        <h3>{t("obs_log_events_title")}</h3>
        <RefTable headers={list("obs_log_events_headers")} rows={rows("obs_log_events_rows")} />
      </section>
    </div>
  );
}
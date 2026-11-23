import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";
import RefTable from "../components/RefTable";

export default function Activity() {
  const { t } = useTranslation();
  const list = (key: string) => t(key, { returnObjects: true }) as string[];
  const rows = (key: string) => t(key, { returnObjects: true }) as string[][];
  return (
    <div className="page activity-page">
      <h1>{t("act_title")}</h1>
      <p>{t("act_intro")}</p>

      <section>
        <h2>{t("act_endpoints_title")}</h2>
        <p>{t("act_endpoints_desc")}</p>
        <RefTable headers={list("act_endpoints_headers")} rows={rows("act_endpoints_rows")} />
      </section>

      <section>
        <h2>{t("act_cancel_title")}</h2>
        <p>{t("act_cancel_desc")}</p>
      </section>

      <section>
        <h2>{t("act_locks_title")}</h2>
        <p>{t("act_locks_desc")}</p>
      </section>

      <section>
        <h2>{t("act_privacy_title")}</h2>
        <p>{t("act_privacy_desc")}</p>
      </section>

      <section>
        <h2>{t("act_config_title")}</h2>
        <p>{t("act_config_desc")}</p>
        <RefTable headers={list("act_config_headers")} rows={rows("act_config_rows")} />
      </section>

      <section>
        <h2>{t("act_metrics_title")}</h2>
        <RefTable headers={list("act_metrics_headers")} rows={rows("act_metrics_rows")} />
      </section>

      <section>
        <h2>{t("act_examples_title")}</h2>
        <CodeTabs tabs={[{ label: "Bash", code: t("act_examples_code"), language: "bash" }]} />
      </section>
    </div>
  );
}

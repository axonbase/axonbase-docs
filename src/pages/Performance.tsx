import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";
import RefTable from "../components/RefTable";

export default function Performance() {
  const { t } = useTranslation();
  const list = (key: string) => t(key, { returnObjects: true }) as string[];
  const rows = (key: string) => t(key, { returnObjects: true }) as string[][];
  return (
    <div className="page performance-page">
      <h1>{t("perf_title")}</h1>
      <p>{t("perf_intro")}</p>

      <section>
        <h2>{t("perf_select_title")}</h2>
        <p>{t("perf_select_desc")}</p>
        <RefTable headers={list("perf_select_headers")} rows={rows("perf_select_rows")} />
        <CodeTabs tabs={[{ label: "SQL", code: t("perf_select_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("perf_limit_title")}</h2>
        <p>{t("perf_limit_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("perf_limit_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("perf_mutation_title")}</h2>
        <p>{t("perf_mutation_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("perf_mutation_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("perf_admission_title")}</h2>
        <p>{t("perf_admission_desc")}</p>
        <RefTable headers={list("perf_admission_headers")} rows={rows("perf_admission_rows")} />
        <CodeTabs tabs={[{ label: "Bash", code: t("perf_admission_code"), language: "bash" }]} />
      </section>
    </div>
  );
}

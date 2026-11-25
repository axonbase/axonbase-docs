import { useTranslation } from "react-i18next";
import BackupFlowDiagram from "../components/BackupFlowDiagram";
import CodeTabs from "../components/CodeTabs";
import RefTable from "../components/RefTable";

export default function Backup() {
  const { t } = useTranslation();
  const translatedScenarios = t("backup_scenarios", { returnObjects: true });
  const scenarios = Array.isArray(translatedScenarios)
    ? translatedScenarios as Array<{ title: string; desc: string }>
    : [];

  const list = (key: string) => t(key, { returnObjects: true }) as string[];
  const rows = (key: string) => t(key, { returnObjects: true }) as string[][];

  return (
    <div className="page backup-page">
      <h1>{t("backup_title")}</h1>
      <p>{t("backup_intro")}</p>
      <BackupFlowDiagram />

      <section>
        <h2>{t("backup_export_title")}</h2>
        <p>{t("backup_export_desc")}</p>
      </section>

      <section>
        <h2>{t("backup_schedule_title")}</h2>
        <p>{t("backup_schedule_desc")}</p>
      </section>

      <section>
        <h2>{t("backup_s3_title")}</h2>
        <p>{t("backup_s3_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("backup_s3_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("backup_minio_title")}</h2>
        <p>{t("backup_minio_desc")}</p>
        <CodeTabs tabs={[{ label: "INI", code: t("backup_minio_code"), language: "ini" }]} />
      </section>

      <section>
        <h2>{t("backup_restore_title")}</h2>
        <p>{t("backup_restore_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("backup_restore_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("backup_chain_title")}</h2>
        <p>{t("backup_chain_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("backup_chain_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("backup_state_title")}</h2>
        <p>{t("backup_state_desc")}</p>
        <CodeTabs tabs={[{ label: "cURL", code: t("backup_state_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("backup_trigger_title")}</h2>
        <p>{t("backup_trigger_desc")}</p>
        <CodeTabs tabs={[{ label: "cURL", code: t("backup_trigger_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("backup_incremental_title")}</h2>
        <p>{t("backup_incremental_desc")}</p>
        <p>{t("backup_incremental_limits")}</p>
      </section>

      <section>
        <h2>{t("backup_api_restore_title")}</h2>
        <p>{t("backup_api_restore_desc")}</p>
        <CodeTabs tabs={[{ label: "cURL", code: t("backup_api_restore_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("backup_stream_title")}</h2>
        <p>{t("backup_stream_desc")}</p>
        <h3>{t("backup_stream_params_title")}</h3>
        <RefTable headers={list("backup_stream_params_headers")} rows={rows("backup_stream_params_rows")} />
        <CodeTabs tabs={[{ label: "cURL", code: t("backup_stream_code"), language: "bash" }]} />
        <h3>{t("backup_stream_format_title")}</h3>
        <p>{t("backup_stream_format_desc")}</p>
        <h3>{t("backup_stream_restore_title")}</h3>
        <p>{t("backup_stream_restore_desc")}</p>
        <h3>{t("backup_stream_memory_title")}</h3>
        <p>{t("backup_stream_memory_desc")}</p>
      </section>

      <section>
        <h2>{t("backup_observe_title")}</h2>
        <p>{t("backup_observe_desc")}</p>
      </section>

      <section>
        <h2>{t("backup_retention_title")}</h2>
        <p>{t("backup_retention_desc")}</p>
      </section>

      <section>
        <h2>{t("backup_encryption_title")}</h2>
        <p>{t("backup_encryption_desc")}</p>
      </section>

      <section>
        <h2>{t("backup_failure_title")}</h2>
        <p>{t("backup_failure_desc")}</p>
      </section>

      <section>
        <h2>{t("backup_scenarios_title")}</h2>
        <div className="backup-scenarios">
          {scenarios.map((scenario) => (
            <article className="backup-scenario" key={scenario.title}>
              <h3>{scenario.title}</h3>
              <p>{scenario.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

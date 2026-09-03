import { useTranslation } from "react-i18next";
import BackupFlowDiagram from "../components/BackupFlowDiagram";
import CodeTabs from "../components/CodeTabs";

export default function Backup() {
  const { t } = useTranslation();
  const translatedScenarios = t("backup_scenarios", { returnObjects: true });
  const scenarios = Array.isArray(translatedScenarios)
    ? translatedScenarios as Array<{ title: string; desc: string }>
    : [];

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

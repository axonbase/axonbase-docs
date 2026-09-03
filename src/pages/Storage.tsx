import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";

export default function Storage() {
  const { t } = useTranslation();
  const backends = t("storage_backends", { returnObjects: true }) as { name: string; desc: string; code?: string }[];
  const scenarioValue = t("storage_scenarios", { returnObjects: true });
  const scenarios = Array.isArray(scenarioValue) ? scenarioValue as { title: string; desc: string }[] : [];
  return (
    <div className="page storage-page">
      <h1>{t("storage_title")}</h1>
      <p>{t("storage_intro")}</p>
      <section>
        <h2>{t("storage_decision_title")}</h2>
        <p>{t("storage_decision_desc")}</p>
        <div className="storage-backends">
          {backends.map((backend) => (
            <article className="storage-backend" key={backend.name}>
              <h3>{backend.name}</h3>
              <p>{backend.desc}</p>
              {backend.code && <CodeTabs tabs={[{ label: "Bash", code: backend.code, language: "bash" }]} />}
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2>{t("storage_wal_title")}</h2>
        <p>{t("storage_wal_desc")}</p>
      </section>
      <section>
        <h2>{t("storage_recovery_title")}</h2>
        <p>{t("storage_recovery_desc")}</p>
      </section>
      <section>
        <h2>{t("storage_transaction_title")}</h2>
        <p>{t("storage_transaction_desc")}</p>
      </section>
      <section>
        <h2>{t("storage_scenarios_title")}</h2>
        <div className="storage-scenarios">
          {scenarios.map((scenario) => (
            <article className="storage-scenario" key={scenario.title}>
              <h3>{scenario.title}</h3>
              <p>{scenario.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

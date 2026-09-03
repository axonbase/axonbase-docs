import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";
import GettingStartedLifecycleDiagram from "../components/GettingStartedLifecycleDiagram";

export default function GettingStarted() {
  const { t } = useTranslation();
  const steps = t("getting_started_steps", { returnObjects: true }) as { title: string; desc: string; code?: string }[];
  const architecture = t("getting_started_architecture", { returnObjects: true }) as { title: string; desc: string }[];
  const prerequisites = t("getting_started_prerequisites", { returnObjects: true }) as string[];
  return (
    <div className="page getting-started-page">
      <h1>{t("getting_started_title")}</h1>
      <p>{t("getting_started_intro")}</p>
      <GettingStartedLifecycleDiagram />

      <section>
        <h2>{t("getting_started_architecture_title")}</h2>
        <p>{t("getting_started_architecture_desc")}</p>
        {architecture.map((item, i) => (
          <div key={i}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>{t("getting_started_prerequisites_title")}</h2>
        <ul>
          {prerequisites.map((prerequisite, i) => <li key={i}>{prerequisite}</li>)}
        </ul>
      </section>

      <section>
        <h2>{t("getting_started_session_title")}</h2>
        <p>{t("getting_started_session_desc")}</p>
      </section>
      <ol className="steps-list">
        {steps.map((s, i) => (
          <li key={i} className="step-item">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            {s.code && (
              <CodeTabs
                tabs={[
                  { label: "Bash", code: s.code, language: "bash" },
                ]}
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

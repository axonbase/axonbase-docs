import { useTranslation } from "react-i18next";
import AiAuditFalDiagram from "../components/AiAuditFalDiagram";
import CodeTabs from "../components/CodeTabs";

type FlowStep = { label: string; text: string };

export default function AiAudit() {
  const { t } = useTranslation();
  const flow = t("ai_audit_flow", { returnObjects: true }) as FlowStep[];

  return (
    <div className="page ai-audit-page">
      <p className="ai-audit-kicker">{t("ai_audit_kicker")}</p>
      <h1>{t("ai_audit_title")}</h1>
      <p className="ai-audit-intro">{t("ai_audit_intro")}</p>

      <AiAuditFalDiagram />

      <section className="ai-audit-flow-section">
        <h2>{t("ai_audit_flow_title")}</h2>
        <p>{t("ai_audit_flow_intro")}</p>
        <ol className="ai-audit-flow">
          {flow.map((step, index) => (
            <li key={step.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><strong>{step.label}</strong><p>{step.text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>{t("ai_audit_create_title")}</h2>
        <p>{t("ai_audit_create_desc")}</p>
        <CodeTabs tabs={[{ label: "AxonQL", code: t("ai_audit_create_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("ai_audit_config_title")}</h2>
        <p>{t("ai_audit_config_desc")}</p>
        <CodeTabs tabs={[
          { label: t("ai_audit_tab_env"), code: t("ai_audit_config_env"), language: "bash" },
          { label: t("ai_audit_tab_file"), code: t("ai_audit_config_file"), language: "ini" },
        ]} />
      </section>

      <section>
        <h2>{t("ai_audit_assign_title")}</h2>
        <p>{t("ai_audit_assign_desc")}</p>
        <CodeTabs tabs={[{ label: "AxonQL", code: t("ai_audit_assign_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("ai_audit_outcomes_title")}</h2>
        <div className="ai-audit-outcome-grid">
          <article className="ai-audit-outcome safe"><h3>{t("ai_audit_safe_title")}</h3><p>{t("ai_audit_safe_desc")}</p></article>
          <article className="ai-audit-outcome warning"><h3>{t("ai_audit_warning_title")}</h3><p>{t("ai_audit_warning_desc")}</p></article>
          <article className="ai-audit-outcome danger"><h3>{t("ai_audit_danger_title")}</h3><p>{t("ai_audit_danger_desc")}</p></article>
        </div>
      </section>

      <section>
        <h2>{t("ai_audit_resolve_title")}</h2>
        <p>{t("ai_audit_resolve_desc")}</p>
        <CodeTabs tabs={[{ label: "AxonQL", code: t("ai_audit_resolve_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("ai_audit_cases_title")}</h2>
        <p>{t("ai_audit_cases_desc")}</p>
        <CodeTabs tabs={[{ label: "AxonQL", code: t("ai_audit_cases_code"), language: "sql" }]} />
      </section>
    </div>
  );
}

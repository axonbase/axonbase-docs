import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";
import SagaDiagram from "../components/SagaDiagram";
import SagaMicroservicesDiagram from "../components/SagaMicroservicesDiagram";

export default function Saga() {
  const { t, i18n } = useTranslation();
  return (
    <div className="page saga-page">
      <h1>{t("saga_title")}</h1>
      <p>{t("saga_intro")}</p>

      <section>
        <h2>{t("saga_architecture_title")}</h2>
        <p>{t("saga_architecture_desc")}</p>
        <SagaDiagram />
      </section>

      <section>
        <h2>{t("saga_setup_title")}</h2>
        <p>{t("saga_setup_desc")}</p>
        <CodeTabs tabs={[{ label: "AxonQL", code: t("saga_setup_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("saga_correlation_title")}</h2>
        <p>{t("saga_correlation_desc")}</p>
        <CodeTabs tabs={[{ label: "Python", code: t("saga_correlation_code"), language: "python" }]} />
      </section>

      <section>
        <h2>{t("saga_finish_title")}</h2>
        <p>{t("saga_finish_desc")}</p>
        <CodeTabs tabs={[{ label: "AxonQL", code: t("saga_finish_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("saga_rules_title")}</h2>
        <p>{t("saga_rules_desc")}</p>
      </section>

      <section className="saga-demo-section">
        <h2>{t("saga_demo_title")}</h2>
        <p>{t("saga_demo_desc")}</p>
        <CodeTabs tabs={[
          { label: t("saga_demo_tab_start"), code: t("saga_demo_start_code"), language: "bash" },
          { label: t("saga_demo_tab_setup"), code: t("saga_demo_setup_code"), language: "sql" },
          { label: t("saga_demo_tab_payment"), code: t("saga_demo_payment_code"), language: "python" },
          { label: t("saga_demo_tab_invoice"), code: t("saga_demo_invoice_code"), language: "python" },
          { label: t("saga_demo_tab_stock"), code: t("saga_demo_stock_code"), language: "python" },
          { label: "curl", code: t("saga_demo_success_code"), language: "bash" },
          { label: "Rollback", code: t("saga_demo_failure_code"), language: "bash" },
        ]} />
      </section>

      <section>
        <h2>{t("saga_success_title")}</h2>
        <p>{t("saga_success_desc")}</p>
        <SagaMicroservicesDiagram flow="success" language={i18n.resolvedLanguage ?? i18n.language} alt={t("saga_success_alt")} />
      </section>

      <section>
        <h2>{t("saga_failure_title")}</h2>
        <p>{t("saga_failure_desc")}</p>
        <SagaMicroservicesDiagram flow="failure" language={i18n.resolvedLanguage ?? i18n.language} alt={t("saga_failure_alt")} />
      </section>
    </div>
  );
}

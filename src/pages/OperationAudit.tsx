import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";

export default function OperationAudit() {
  const { t } = useTranslation();
  return (
    <div className="page operation-audit-page">
      <h1>{t("audit_op_title")}</h1>
      <p>{t("audit_op_intro")}</p>

      <section>
        <h2>{t("audit_op_how_title")}</h2>
        <p>{t("audit_op_how_desc")}</p>
        <CodeTabs tabs={[{ label: "Text", code: t("audit_op_how_code"), language: "text" }]} />
      </section>

      <section>
        <h2>{t("audit_op_enable_title")}</h2>
        <p>{t("audit_op_enable_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "ENV", code: t("audit_op_enable_env"), language: "bash" },
            { label: "Config", code: t("audit_op_enable_file"), language: "ini" },
          ]}
        />
      </section>

      <section>
        <h2>{t("audit_op_config_title")}</h2>
        <p>{t("audit_op_config_desc")}</p>
        <CodeTabs tabs={[{ label: "Text", code: t("audit_op_config_table"), language: "text" }]} />
      </section>

      <section>
        <h2>{t("audit_op_example_title")}</h2>
        <p>{t("audit_op_example_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("audit_op_example_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("audit_op_inspect_title")}</h2>
        <p>{t("audit_op_inspect_desc")}</p>
        <CodeTabs tabs={[{ label: "JSON", code: t("audit_op_inspect_code"), language: "json" }]} />
      </section>

      <section>
        <h2>{t("audit_op_user_title")}</h2>
        <p>{t("audit_op_user_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("audit_op_user_code"), language: "sql" }]} />
      </section>
    </div>
  );
}
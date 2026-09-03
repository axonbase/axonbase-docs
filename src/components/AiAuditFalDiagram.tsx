import { useTranslation } from "react-i18next";

export default function AiAuditFalDiagram() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language.startsWith("pt") ? "pt-br" : "en";

  return (
    <figure className="ai-audit-diagram">
      <img
        src={`/images/ai-audit-workflow-${locale}.png`}
        alt={t("ai_audit_diagram_alt")}
        style={{ display: "block", width: "100%", height: "auto" }}
      />
      <figcaption>{t("ai_audit_diagram_caption")}</figcaption>
    </figure>
  );
}

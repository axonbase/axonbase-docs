import { useTranslation } from "react-i18next";

export default function AiAuditDiagram() {
  const { t } = useTranslation();

  return (
    <figure className="ai-audit-diagram">
      <svg viewBox="0 0 1200 670" role="img" aria-labelledby="ai-audit-diagram-title ai-audit-diagram-description">
        <title id="ai-audit-diagram-title">{t("ai_audit_diagram_title")}</title>
        <desc id="ai-audit-diagram-description">{t("ai_audit_diagram_alt")}</desc>
        <defs>
          <marker id="audit-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#337bb5" /></marker>
          <marker id="audit-arrow-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3c9b55" /></marker>
          <marker id="audit-arrow-amber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#d68a22" /></marker>
          <marker id="audit-arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#d44c4c" /></marker>
        </defs>

        <g className="audit-diagram-source">
          <rect x="42" y="126" width="190" height="170" rx="26" />
          <path d="M137 161c-19 0-34 15-34 34s15 34 34 34 34-15 34-34-15-34-34-34Zm-55 112c0-27 22-49 49-49h12c27 0 49 22 49 49" />
          <rect x="64" y="238" width="146" height="76" rx="3" className="audit-diagram-label-box" />
          <text x="137" y="267" className="audit-diagram-box-title" textAnchor="middle">{t("ai_audit_diagram_policy")}</text>
          <text x="137" y="291" className="audit-diagram-box-copy" textAnchor="middle">{t("ai_audit_diagram_prompt")}</text>
        </g>

        <path d="M232 211H316" className="audit-diagram-arrow blue" markerEnd="url(#audit-arrow-blue)" />
        <text x="274" y="190" className="audit-diagram-arrow-label" textAnchor="middle">{t("ai_audit_diagram_create")}</text>

        <g className="audit-diagram-provider">
          <rect x="334" y="101" width="184" height="220" rx="26" />
          <text x="426" y="149" className="audit-diagram-box-title" textAnchor="middle">{t("ai_audit_diagram_provider")}</text>
          <rect x="360" y="170" width="132" height="70" rx="4" className="audit-diagram-label-box" />
          <text x="426" y="201" className="audit-diagram-box-copy" textAnchor="middle">OpenAI</text>
          <text x="426" y="224" className="audit-diagram-box-copy" textAnchor="middle">Ollama</text>
          <text x="426" y="278" className="audit-diagram-note" textAnchor="middle">{t("ai_audit_diagram_once")}</text>
        </g>

        <path d="M518 211H578" className="audit-diagram-arrow blue" markerEnd="url(#audit-arrow-blue)" />
        <text x="548" y="190" className="audit-diagram-arrow-label" textAnchor="middle">{t("ai_audit_diagram_rules")}</text>

        <g className="audit-diagram-engine">
          <rect x="578" y="70" width="342" height="457" rx="28" />
          <text x="749" y="116" className="audit-diagram-engine-title" textAnchor="middle">{t("ai_audit_diagram_engine")}</text>
          <rect x="608" y="139" width="282" height="115" rx="19" />
          <text x="749" y="178" className="audit-diagram-box-title" textAnchor="middle">{t("ai_audit_diagram_catalog")}</text>
          <text x="749" y="207" className="audit-diagram-box-copy" textAnchor="middle">{t("ai_audit_diagram_local_rules")}</text>
          <text x="749" y="230" className="audit-diagram-note" textAnchor="middle">{t("ai_audit_diagram_no_sql")}</text>
          <path d="M749 254v54" className="audit-diagram-arrow blue" markerEnd="url(#audit-arrow-blue)" />
          <rect x="608" y="315" width="282" height="158" rx="19" />
          <text x="749" y="355" className="audit-diagram-box-title" textAnchor="middle">{t("ai_audit_diagram_gateway")}</text>
          <text x="749" y="387" className="audit-diagram-box-copy" textAnchor="middle">{t("ai_audit_diagram_classifies")}</text>
          <text x="749" y="418" className="audit-diagram-code" textAnchor="middle">DELETE FROM orders</text>
          <text x="749" y="447" className="audit-diagram-note" textAnchor="middle">{t("ai_audit_diagram_execution")}</text>
        </g>

        <g className="audit-diagram-user">
          <rect x="42" y="401" width="190" height="170" rx="26" />
          <path d="M137 436c-19 0-34 15-34 34s15 34 34 34 34-15 34-34-15-34-34-34Zm-55 112c0-27 22-49 49-49h12c27 0 49 22 49 49" />
          <rect x="64" y="513" width="146" height="76" rx="3" className="audit-diagram-label-box" />
          <text x="137" y="542" className="audit-diagram-box-title" textAnchor="middle">{t("ai_audit_diagram_user")}</text>
          <text x="137" y="566" className="audit-diagram-box-copy" textAnchor="middle">{t("ai_audit_diagram_assigned")}</text>
        </g>
        <path d="M232 486H578" className="audit-diagram-arrow blue" markerEnd="url(#audit-arrow-blue)" />
        <text x="405" y="465" className="audit-diagram-arrow-label" textAnchor="middle">{t("ai_audit_diagram_command")}</text>

        <path d="M890 361h78V152h60" className="audit-diagram-arrow green" markerEnd="url(#audit-arrow-green)" />
        <path d="M890 394h138" className="audit-diagram-arrow amber" markerEnd="url(#audit-arrow-amber)" />
        <path d="M890 427h78v121h60" className="audit-diagram-arrow red" markerEnd="url(#audit-arrow-red)" />

        <g className="audit-diagram-outcome safe"><rect x="1028" y="100" width="140" height="103" rx="20" /><text x="1098" y="141" textAnchor="middle">SAFE</text><text x="1098" y="171" textAnchor="middle">{t("ai_audit_diagram_safe")}</text></g>
        <g className="audit-diagram-outcome warning"><rect x="1028" y="342" width="140" height="103" rx="20" /><text x="1098" y="383" textAnchor="middle">WARNING</text><text x="1098" y="413" textAnchor="middle">{t("ai_audit_diagram_warning")}</text></g>
        <g className="audit-diagram-outcome danger"><rect x="1028" y="496" width="140" height="103" rx="20" /><text x="1098" y="537" textAnchor="middle">DANGER</text><text x="1098" y="567" textAnchor="middle">{t("ai_audit_diagram_danger")}</text></g>

        <text x="600" y="643" className="audit-diagram-footer" textAnchor="middle">{t("ai_audit_diagram_footer")}</text>
      </svg>
      <figcaption>{t("ai_audit_diagram_caption")}</figcaption>
    </figure>
  );
}

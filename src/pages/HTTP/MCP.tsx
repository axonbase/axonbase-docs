import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import McpSessionDiagram from "../../components/McpSessionDiagram";

export default function MCP() {
  const { t } = useTranslation();
  const useCases = t("http_mcp_use_cases", { returnObjects: true }) as { title: string; scenario: string; config: string; code: string; language: string }[];
  return (
    <div className="page http-mcp-page">
      <h1>{t("http_mcp_title")}</h1>
      <p>{t("http_mcp_intro")}</p>
      <McpSessionDiagram />

      <section>
        <h2>{t("http_mcp_tools_title")}</h2>
        <p>{t("http_mcp_tools_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "JSON", code: t("http_mcp_tools_list_req"), language: "json" },
            { label: "cURL", code: t("http_mcp_tools_list_curl"), language: "bash" },
          ]}
        />
      </section>

      <section>
        <h2>{t("http_mcp_tools_call_title")}</h2>
        <p>{t("http_mcp_tools_call_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "axon_select", code: t("http_mcp_tools_call_select"), language: "json" },
            { label: "axon_info", code: t("http_mcp_tools_call_info"), language: "json" },
          ]}
        />
      </section>

      <section>
        <h2>{t("http_mcp_resources_title")}</h2>
        <p>{t("http_mcp_resources_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "JSON", code: t("http_mcp_resources_example"), language: "json" },
          ]}
        />
      </section>

      <section>
        <h2>{t("http_mcp_config_title")}</h2>
        <p>{t("http_mcp_config_desc")}</p>
        <CodeTabs tabs={[{ label: "JSON", code: t("http_mcp_config_example"), language: "json" }]} />
      </section>

      <section>
        <h2>{t("http_mcp_clients_title")}</h2>
        <p>{t("http_mcp_clients_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "Claude Code", code: t("http_mcp_clients_claude"), language: "json" },
            { label: "VS Code", code: t("http_mcp_clients_vscode"), language: "json" },
            { label: "Cursor", code: t("http_mcp_clients_cursor"), language: "json" },
            { label: "bolt.diy", code: t("http_mcp_clients_boltdiy"), language: "json" },
          ]}
        />
      </section>

      <section>
        <h2>{t("http_mcp_use_cases_title")}</h2>
        <p>{t("http_mcp_use_cases_intro")}</p>
        {useCases.map((uc, i) => (
          <article key={i} className="mcp-use-case">
            <h3>{uc.title}</h3>
            <p><strong>{t("http_mcp_use_case_scenario")}</strong> {uc.scenario}</p>
            <p><strong>{t("http_mcp_use_case_config")}</strong></p>
            <CodeTabs tabs={[{ label: "JSON", code: uc.config, language: "json" }]} />
            <p><strong>{t("http_mcp_use_case_usage")}</strong></p>
            <CodeTabs tabs={[{ label: uc.language, code: uc.code, language: uc.language }]} />
          </article>
        ))}
      </section>

      <section>
        <h2>{t("http_mcp_limitations_title")}</h2>
        <p>{t("http_mcp_limitations_desc")}</p>
        <ul>
          {(t("http_mcp_limitations_list", { returnObjects: true }) as string[]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
}

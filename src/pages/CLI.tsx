import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";
import CliServerFlowDiagram from "../components/CliServerFlowDiagram";

export default function CLI() {
  const { t } = useTranslation();
  const commands = t("cli_commands", { returnObjects: true }) as { name: string; desc: string; usage: string }[];
  const lifecycle = t("cli_lifecycle", { returnObjects: true }) as string[];
  const workflows = t("cli_workflows", { returnObjects: true }) as { title: string; desc: string; code: string }[];
  return (
    <div className="page cli-page">
      <h1>{t("cli_title")}</h1>
      <p>{t("cli_intro")}</p>
      <CliServerFlowDiagram />

      <section>
        <h2>{t("cli_lifecycle_title")}</h2>
        <p>{t("cli_lifecycle_desc")}</p>
        <ol>
          {lifecycle.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </section>

      <section>
        <h2>{t("cli_commands_title")}</h2>
        <p>{t("cli_commands_desc")}</p>
      </section>
      {commands.map((cmd, i) => (
        <section key={i} className="cli-command">
          <h3>{cmd.name}</h3>
          <p>{cmd.desc}</p>
          <CodeTabs tabs={[{ label: "Bash", code: cmd.usage, language: "bash" }]} />
        </section>
      ))}

      <section>
        <h2>{t("cli_workflows_title")}</h2>
        <p>{t("cli_workflows_desc")}</p>
      </section>
      {workflows.map((workflow, i) => (
        <section key={i} className="cli-command">
          <h3>{workflow.title}</h3>
          <p>{workflow.desc}</p>
          <CodeTabs tabs={[{ label: "Bash", code: workflow.code, language: "bash" }]} />
        </section>
      ))}
    </div>
  );
}

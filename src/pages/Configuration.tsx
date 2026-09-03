import { useTranslation } from "react-i18next";
import ConfigTable from "../components/ConfigTable";
import CodeTabs from "../components/CodeTabs";

export default function Configuration() {
  const { t } = useTranslation();
  const configs = t("config_options", { returnObjects: true }) as { key: string; env: string; type: string; default: string; desc: string }[];
  return (
    <div className="page configuration-page">
      <h1>{t("config_title")}</h1>
      <p>{t("config_intro")}</p>

      <section>
        <h2>{t("config_docker_title")}</h2>
        <p>{t("config_docker_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("config_docker_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("config_example_title")}</h2>
        <p>{t("config_example_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("config_example_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("config_example_flow_title")}</h2>
        <p>{t("config_example_flow_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("config_example_flow_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("config_file_title")}</h2>
        <p>{t("config_file_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("config_file_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("config_cert_title")}</h2>
        <p>{t("config_cert_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("config_cert_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("config_cert_login_title")}</h2>
        <p>{t("config_cert_login_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("config_cert_login_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("config_cert_rpc_title")}</h2>
        <p>{t("config_cert_rpc_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("config_cert_rpc_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("config_precedence_title")}</h2>
        <p>{t("config_precedence_desc")}</p>
      </section>

      <ConfigTable configs={configs} />
    </div>
  );
}
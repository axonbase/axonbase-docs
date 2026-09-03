import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";

export default function Installation() {
  const { t } = useTranslation();
  return (
    <div className="page installation-page">
      <h1>{t("installation_title")}</h1>
      <p>{t("installation_intro")}</p>

      <section>
        <h2>{t("installation_maven_title")}</h2>
        <p>{t("installation_maven_desc")}</p>
        <CodeTabs tabs={[{ label: "XML", code: t("installation_maven_code"), language: "xml" }]} />
      </section>

      <section>
        <h2>{t("installation_docker_title")}</h2>
        <p>{t("installation_docker_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("installation_docker_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("installation_runsh_title")}</h2>
        <p>{t("installation_runsh_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("installation_runsh_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("installation_compose_title")}</h2>
        <p>{t("installation_compose_desc")}</p>
        <CodeTabs tabs={[{ label: "YAML", code: t("installation_compose_code"), language: "yaml" }]} />
      </section>
    </div>
  );
}
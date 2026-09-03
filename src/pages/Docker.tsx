import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";

export default function Docker() {
  const { t } = useTranslation();
  return (
    <div className="page docker-page">
      <h1>{t("docker_title")}</h1>
      <p>{t("docker_intro")}</p>

      <section>
        <h2>{t("docker_dockerfile_title")}</h2>
        <p>{t("docker_dockerfile_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("docker_dockerfile_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("docker_compose_title")}</h2>
        <p>{t("docker_compose_desc")}</p>
        <CodeTabs tabs={[{ label: "docker-compose.yml", code: t("docker_compose_code"), language: "yaml" }]} />
      </section>

      <section>
        <h2>{t("docker_cluster_title")}</h2>
        <p>{t("docker_cluster_desc")}</p>
        <CodeTabs tabs={[{ label: "docker-compose.yml", code: t("docker_cluster_code"), language: "yaml" }]} />
      </section>
    </div>
  );
}
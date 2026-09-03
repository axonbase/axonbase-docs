import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";
import RaftClusterDiagram from "../components/RaftClusterDiagram";

export default function Cluster() {
  const { t } = useTranslation();
  return (
    <div className="page cluster-page">
      <h1>{t("cluster_title")}</h1>
      <p>{t("cluster_intro")}</p>

      <section>
        <h2>{t("cluster_raft_title")}</h2>
        <p>{t("cluster_raft_desc")}</p>
        <RaftClusterDiagram />
      </section>

      <section>
        <h2>{t("cluster_membership_title")}</h2>
        <p>{t("cluster_membership_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("cluster_membership_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("cluster_failover_title")}</h2>
        <p>{t("cluster_failover_desc")}</p>
      </section>

      <section>
        <h2>{t("cluster_config_title")}</h2>
        <p>{t("cluster_config_desc")}</p>
        <CodeTabs tabs={[{ label: "INI", code: t("cluster_config_code"), language: "ini" }]} />
      </section>
    </div>
  );
}

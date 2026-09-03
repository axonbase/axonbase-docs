import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";

export default function Node() {
  const { t } = useTranslation();
  return (
    <div className="page sdk-node-page">
      <h1>{t("sdk_node_title")}</h1>
      <p>{t("sdk_node_intro")}</p>

      <section>
        <h2>{t("sdk_node_connection_title")}</h2>
        <p>{t("sdk_node_connection_desc")}</p>
        <CodeTabs tabs={[{ label: "Node", code: t("sdk_node_connection_code"), language: "javascript" }]} />
      </section>

      <section>
        <h2>{t("sdk_node_signin_title")}</h2>
        <p>{t("sdk_node_signin_desc")}</p>
        <CodeTabs tabs={[{ label: "Node", code: t("sdk_node_signin_code"), language: "javascript" }]} />
      </section>

      <section>
        <h2>{t("sdk_node_query_title")}</h2>
        <p>{t("sdk_node_query_desc")}</p>
        <CodeTabs tabs={[{ label: "Node", code: t("sdk_node_query_code"), language: "javascript" }]} />
      </section>

      <section>
        <h2>{t("sdk_node_crud_title")}</h2>
        <p>{t("sdk_node_crud_desc")}</p>
        <CodeTabs tabs={[{ label: "Node", code: t("sdk_node_crud_code"), language: "javascript" }]} />
      </section>

      <section>
        <h2>{t("sdk_node_cert_title")}</h2>
        <p>{t("sdk_node_cert_desc")}</p>
        <CodeTabs tabs={[{ label: "Node", code: t("sdk_node_cert_code"), language: "javascript" }]} />
      </section>

      <section>
        <h2>{t("sdk_node_live_title")}</h2>
        <p>{t("sdk_node_live_desc")}</p>
        <CodeTabs tabs={[{ label: "Node", code: t("sdk_node_live_code"), language: "javascript" }]} />
      </section>

      <section>
        <h2 id="migration">{t("sdk_node_migration_title")}</h2>
        <p>{t("sdk_node_migration_desc")}</p>
        <CodeTabs tabs={[{ label: "Node", code: t("sdk_node_migration_code"), language: "typescript" }]} />
      </section>
    </div>
  );
}
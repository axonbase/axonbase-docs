import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";
import RefTable from "../components/RefTable";

export default function Security() {
  const { t } = useTranslation();
  const list = (key: string) => t(key, { returnObjects: true }) as string[];
  const rows = (key: string) => t(key, { returnObjects: true }) as string[][];
  return (
    <div className="page security-page">
      <h1>{t("security_title")}</h1>
      <p>{t("security_intro")}</p>

      <section>
        <h2>{t("security_rbac_title")}</h2>
        <p>{t("security_rbac_desc")}</p>
        <RefTable headers={list("security_rbac_headers")} rows={rows("security_rbac_rows")} />
        <p>{t("security_rbac_scope")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("security_rbac_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("security_root_title")}</h2>
        <p>{t("security_root_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("security_root_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("security_insecure_title")}</h2>
        <p>{t("security_insecure_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("security_insecure_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("security_svc_title")}</h2>
        <p>{t("security_svc_desc")}</p>
        <CodeTabs tabs={[{ label: "cURL", code: t("security_svc_code"), language: "bash" }]} />
        <p>{t("security_svc_limits")}</p>
      </section>

      <section>
        <h2>{t("security_metrics_title")}</h2>
        <p>{t("security_metrics_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("security_metrics_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("security_cors_title")}</h2>
        <p>{t("security_cors_desc")}</p>
        <CodeTabs tabs={[{ label: "YAML", code: t("security_cors_code"), language: "yaml" }]} />
      </section>

      <section>
        <h2>{t("security_rate_limit_title")}</h2>
        <p>{t("security_rate_limit_desc")}</p>
        <CodeTabs tabs={[{ label: "YAML", code: t("security_rate_limit_code"), language: "yaml" }]} />
      </section>

      <section>
        <h2>{t("security_mtls_title")}</h2>
        <p>{t("security_mtls_desc")}</p>
        <CodeTabs tabs={[{ label: "YAML", code: t("security_mtls_code"), language: "yaml" }]} />
      </section>

      <section>
        <h2>{t("security_jwt_title")}</h2>
        <p>{t("security_jwt_desc")}</p>
        <CodeTabs tabs={[{ label: "YAML", code: t("security_jwt_code"), language: "yaml" }]} />
      </section>
    </div>
  );
}
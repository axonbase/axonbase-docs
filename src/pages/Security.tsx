import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";

export default function Security() {
  const { t } = useTranslation();
  return (
    <div className="page security-page">
      <h1>{t("security_title")}</h1>
      <p>{t("security_intro")}</p>

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
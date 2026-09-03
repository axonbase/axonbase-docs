import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";

export default function Auth() {
  const { t } = useTranslation();
  return (
    <div className="page auth-page">
      <h1>{t("auth_title")}</h1>
      <p>{t("auth_intro")}</p>

      <section>
        <h2>{t("auth_jwt_title")}</h2>
        <p>{t("auth_jwt_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("auth_jwt_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("auth_signin_title")}</h2>
        <p>{t("auth_signin_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "Java", code: t("auth_signin_java"), language: "java" },
            { label: "Node", code: t("auth_signin_node"), language: "javascript" },
            { label: "Python", code: t("auth_signin_python"), language: "python" },
          ]}
        />
      </section>

      <section>
        <h2>{t("auth_cert_title")}</h2>
        <p>{t("auth_cert_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("auth_cert_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("auth_temp_title")}</h2>
        <p>{t("auth_temp_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("auth_temp_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("auth_scopes_title")}</h2>
        <p>{t("auth_scopes_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("auth_scopes_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("auth_permissions_title")}</h2>
        <p>{t("auth_permissions_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("auth_permissions_code"), language: "sql" }]} />
      </section>
    </div>
  );
}
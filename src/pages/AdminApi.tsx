import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";
import RefTable from "../components/RefTable";

const examples = ["info", "catalog", "users", "tokens", "cluster", "sagas", "audit", "security", "backups", "logs"];

export default function AdminApi() {
  const { t } = useTranslation();
  const list = (key: string) => t(key, { returnObjects: true }) as string[];
  const rows = (key: string) => t(key, { returnObjects: true }) as string[][];
  return (
    <div className="page admin-api-page">
      <h1>{t("adminapi_title")}</h1>
      <p>{t("adminapi_intro")}</p>

      <section>
        <h2>{t("adminapi_auth_title")}</h2>
        <p>{t("adminapi_auth_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("adminapi_auth_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("adminapi_roles_title")}</h2>
        <p>{t("adminapi_roles_desc")}</p>
        <RefTable headers={list("adminapi_roles_headers")} rows={rows("adminapi_roles_rows")} />
      </section>

      <section>
        <h2>{t("adminapi_errors_title")}</h2>
        <p>{t("adminapi_errors_desc")}</p>
        <CodeTabs tabs={[{ label: "JSON", code: t("adminapi_errors_code"), language: "json" }]} />
        <RefTable headers={list("adminapi_errors_headers")} rows={rows("adminapi_errors_rows")} />
      </section>

      <section>
        <h2>{t("adminapi_conv_title")}</h2>
        <p>{t("adminapi_conv_desc")}</p>
      </section>

      <section>
        <h2>{t("adminapi_endpoints_title")}</h2>
        <p>{t("adminapi_endpoints_desc")}</p>
        <RefTable headers={list("adminapi_endpoints_headers")} rows={rows("adminapi_endpoints_rows")} />
      </section>

      {examples.map((name) => (
        <section key={name}>
          <h2>{t(`adminapi_ex_${name}_title`)}</h2>
          <p>{t(`adminapi_ex_${name}_desc`)}</p>
          <CodeTabs tabs={[{ label: "cURL", code: t(`adminapi_ex_${name}_code`), language: "bash" }]} />
        </section>
      ))}
    </div>
  );
}

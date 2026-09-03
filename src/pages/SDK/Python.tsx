import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";

export default function Python() {
  const { t } = useTranslation();
  return (
    <div className="page sdk-python-page">
      <h1>{t("sdk_python_title")}</h1>
      <p>{t("sdk_python_intro")}</p>

      <section>
        <h2>{t("sdk_python_connection_title")}</h2>
        <p>{t("sdk_python_connection_desc")}</p>
        <CodeTabs tabs={[{ label: "Python", code: t("sdk_python_connection_code"), language: "python" }]} />
      </section>

      <section>
        <h2>{t("sdk_python_signin_title")}</h2>
        <p>{t("sdk_python_signin_desc")}</p>
        <CodeTabs tabs={[{ label: "Python", code: t("sdk_python_signin_code"), language: "python" }]} />
      </section>

      <section>
        <h2>{t("sdk_python_query_title")}</h2>
        <p>{t("sdk_python_query_desc")}</p>
        <CodeTabs tabs={[{ label: "Python", code: t("sdk_python_query_code"), language: "python" }]} />
      </section>

      <section>
        <h2>{t("sdk_python_crud_title")}</h2>
        <p>{t("sdk_python_crud_desc")}</p>
        <CodeTabs tabs={[{ label: "Python", code: t("sdk_python_crud_code"), language: "python" }]} />
      </section>

      <section>
        <h2>{t("sdk_python_cert_title")}</h2>
        <p>{t("sdk_python_cert_desc")}</p>
        <CodeTabs tabs={[{ label: "Python", code: t("sdk_python_cert_code"), language: "python" }]} />
      </section>

      <section>
        <h2>{t("sdk_python_live_title")}</h2>
        <p>{t("sdk_python_live_desc")}</p>
        <CodeTabs tabs={[{ label: "Python", code: t("sdk_python_live_code"), language: "python" }]} />
      </section>

      <section>
        <h2 id="migration">{t("sdk_python_migration_title")}</h2>
        <p>{t("sdk_python_migration_desc")}</p>
        <CodeTabs tabs={[{ label: "Python", code: t("sdk_python_migration_code"), language: "python" }]} />
      </section>

      <section>
        <h2 id="dbapi">{t("sdk_python_dbapi_title")}</h2>
        <p>{t("sdk_python_dbapi_desc")}</p>
        <CodeTabs tabs={[{ label: "Python", code: t("sdk_python_dbapi_code"), language: "python" }]} />
      </section>

      <section>
        <h2 id="sqlalchemy">{t("sdk_python_sqlalchemy_title")}</h2>
        <p>{t("sdk_python_sqlalchemy_desc")}</p>
        <CodeTabs tabs={[{ label: "Python", code: t("sdk_python_sqlalchemy_code"), language: "python" }]} />
      </section>
    </div>
  );
}
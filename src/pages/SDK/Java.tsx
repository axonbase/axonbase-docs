import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";

export default function Java() {
  const { t } = useTranslation();
  return (
    <div className="page sdk-java-page">
      <h1>{t("sdk_java_title")}</h1>
      <p>{t("sdk_java_intro")}</p>

      <section>
        <h2>{t("sdk_java_connection_title")}</h2>
        <p>{t("sdk_java_connection_desc")}</p>
        <CodeTabs tabs={[{ label: "Java", code: t("sdk_java_connection_code"), language: "java" }]} />
      </section>

      <section>
        <h2>{t("sdk_java_signin_title")}</h2>
        <p>{t("sdk_java_signin_desc")}</p>
        <CodeTabs tabs={[{ label: "Java", code: t("sdk_java_signin_code"), language: "java" }]} />
      </section>

      <section>
        <h2>{t("sdk_java_query_title")}</h2>
        <p>{t("sdk_java_query_desc")}</p>
        <CodeTabs tabs={[{ label: "Java", code: t("sdk_java_query_code"), language: "java" }]} />
      </section>

      <section>
        <h2>{t("sdk_java_crud_title")}</h2>
        <p>{t("sdk_java_crud_desc")}</p>
        <CodeTabs tabs={[{ label: "Java", code: t("sdk_java_crud_code"), language: "java" }]} />
      </section>

      <section>
        <h2>{t("sdk_java_cert_title")}</h2>
        <p>{t("sdk_java_cert_desc")}</p>
        <CodeTabs tabs={[{ label: "Java", code: t("sdk_java_cert_code"), language: "java" }]} />
      </section>

      <section>
        <h2>{t("sdk_java_live_title")}</h2>
        <p>{t("sdk_java_live_desc")}</p>
        <CodeTabs tabs={[{ label: "Java", code: t("sdk_java_live_code"), language: "java" }]} />
      </section>

      <section>
        <h2 id="migration">{t("sdk_java_migration_title")}</h2>
        <p>{t("sdk_java_migration_desc")}</p>
        <CodeTabs tabs={[{ label: "Java", code: t("sdk_java_migration_code"), language: "java" }]} />
      </section>
    </div>
  );
}
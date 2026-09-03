import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";

export default function Php() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1>{t("sdk_php_title")}</h1>
      <p>{t("sdk_php_intro")}</p>

      <section>
        <h2>{t("sdk_installation")}</h2>
        <CodeTabs tabs={[{ label: "Composer", code: "composer require axonbase/sdk", language: "bash" }]} />
      </section>

      <section>
        <h2>{t("sdk_php_connection_title")}</h2>
        <p>{t("sdk_php_connection_desc")}</p>
        <CodeTabs tabs={[{ label: "PHP", code: t("sdk_php_connection_code"), language: "php" }]} />
      </section>

      <section>
        <h2>{t("sdk_php_query_title")}</h2>
        <p>{t("sdk_php_query_desc")}</p>
        <CodeTabs tabs={[{ label: "PHP", code: t("sdk_php_query_code"), language: "php" }]} />
      </section>

      <section>
        <h2>{t("sdk_php_crud_title")}</h2>
        <p>{t("sdk_php_crud_desc")}</p>
        <CodeTabs tabs={[{ label: "PHP", code: t("sdk_php_crud_code"), language: "php" }]} />
      </section>

      <section>
        <h2>{t("sdk_php_session_title")}</h2>
        <p>{t("sdk_php_session_desc")}</p>
        <CodeTabs tabs={[{ label: "PHP", code: t("sdk_php_session_code"), language: "php" }]} />
      </section>

      <section>
        <h2>{t("sdk_php_errors_title")}</h2>
        <p>{t("sdk_php_errors_desc")}</p>
        <CodeTabs tabs={[{ label: "PHP", code: t("sdk_php_errors_code"), language: "php" }]} />
      </section>

      <section>
        <h2 id="migration">{t("sdk_php_migration_title")}</h2>
        <p>{t("sdk_php_migration_desc")}</p>
        <CodeTabs tabs={[{ label: "PHP", code: t("sdk_php_migration_code"), language: "php" }]} />
      </section>
    </div>
  );
}

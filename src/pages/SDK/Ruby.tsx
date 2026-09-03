import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";

export default function Ruby() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1>{t("sdk_ruby_title")}</h1>
      <p>{t("sdk_ruby_intro")}</p>

      <section>
        <h2>{t("sdk_installation")}</h2>
        <CodeTabs tabs={[{ label: "RubyGems", code: "gem install axonbase-sdk", language: "bash" }]} />
      </section>

      <section>
        <h2>{t("sdk_ruby_connection_title")}</h2>
        <p>{t("sdk_ruby_connection_desc")}</p>
        <CodeTabs tabs={[{ label: "Ruby", code: t("sdk_ruby_connection_code"), language: "ruby" }]} />
      </section>

      <section>
        <h2>{t("sdk_ruby_query_title")}</h2>
        <p>{t("sdk_ruby_query_desc")}</p>
        <CodeTabs tabs={[{ label: "Ruby", code: t("sdk_ruby_query_code"), language: "ruby" }]} />
      </section>

      <section>
        <h2>{t("sdk_ruby_crud_title")}</h2>
        <p>{t("sdk_ruby_crud_desc")}</p>
        <CodeTabs tabs={[{ label: "Ruby", code: t("sdk_ruby_crud_code"), language: "ruby" }]} />
      </section>

      <section>
        <h2>{t("sdk_ruby_session_title")}</h2>
        <p>{t("sdk_ruby_session_desc")}</p>
        <CodeTabs tabs={[{ label: "Ruby", code: t("sdk_ruby_session_code"), language: "ruby" }]} />
      </section>

      <section>
        <h2>{t("sdk_ruby_errors_title")}</h2>
        <p>{t("sdk_ruby_errors_desc")}</p>
        <CodeTabs tabs={[{ label: "Ruby", code: t("sdk_ruby_errors_code"), language: "ruby" }]} />
      </section>

      <section>
        <h2 id="migration">{t("sdk_ruby_migration_title")}</h2>
        <p>{t("sdk_ruby_migration_desc")}</p>
        <CodeTabs tabs={[{ label: "Ruby", code: t("sdk_ruby_migration_code"), language: "ruby" }]} />
      </section>
    </div>
  );
}

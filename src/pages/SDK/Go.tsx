import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";

export default function Go() {
  const { t } = useTranslation();
  return (
    <div className="page sdk-go-page">
      <h1>{t("sdk_go_title")}</h1>
      <p>{t("sdk_go_intro")}</p>

      <section>
        <h2>{t("sdk_go_connection_title")}</h2>
        <p>{t("sdk_go_connection_desc")}</p>
        <CodeTabs tabs={[{ label: "Go", code: t("sdk_go_connection_code"), language: "go" }]} />
      </section>

      <section>
        <h2>{t("sdk_go_signin_title")}</h2>
        <p>{t("sdk_go_signin_desc")}</p>
        <CodeTabs tabs={[{ label: "Go", code: t("sdk_go_signin_code"), language: "go" }]} />
      </section>

      <section>
        <h2>{t("sdk_go_query_title")}</h2>
        <p>{t("sdk_go_query_desc")}</p>
        <CodeTabs tabs={[{ label: "Go", code: t("sdk_go_query_code"), language: "go" }]} />
      </section>

      <section>
        <h2>{t("sdk_go_crud_title")}</h2>
        <p>{t("sdk_go_crud_desc")}</p>
        <CodeTabs tabs={[{ label: "Go", code: t("sdk_go_crud_code"), language: "go" }]} />
      </section>

      <section>
        <h2>{t("sdk_go_cert_title")}</h2>
        <p>{t("sdk_go_cert_desc")}</p>
        <CodeTabs tabs={[{ label: "Go", code: t("sdk_go_cert_code"), language: "go" }]} />
      </section>

      <section>
        <h2>{t("sdk_go_live_title")}</h2>
        <p>{t("sdk_go_live_desc")}</p>
        <CodeTabs tabs={[{ label: "Go", code: t("sdk_go_live_code"), language: "go" }]} />
      </section>

      <section>
        <h2 id="migration">{t("sdk_go_migration_title")}</h2>
        <p>{t("sdk_go_migration_desc")}</p>
        <CodeTabs tabs={[{ label: "Go", code: t("sdk_go_migration_code"), language: "go" }]} />
      </section>
    </div>
  );
}
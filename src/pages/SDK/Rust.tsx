import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";

export default function Rust() {
  const { t } = useTranslation();
  return (
    <div className="page sdk-rust-page">
      <h1>{t("sdk_rust_title")}</h1>
      <p>{t("sdk_rust_intro")}</p>

      <section>
        <h2>{t("sdk_rust_connection_title")}</h2>
        <p>{t("sdk_rust_connection_desc")}</p>
        <CodeTabs tabs={[{ label: "Rust", code: t("sdk_rust_connection_code"), language: "rust" }]} />
      </section>

      <section>
        <h2>{t("sdk_rust_signin_title")}</h2>
        <p>{t("sdk_rust_signin_desc")}</p>
        <CodeTabs tabs={[{ label: "Rust", code: t("sdk_rust_signin_code"), language: "rust" }]} />
      </section>

      <section>
        <h2>{t("sdk_rust_query_title")}</h2>
        <p>{t("sdk_rust_query_desc")}</p>
        <CodeTabs tabs={[{ label: "Rust", code: t("sdk_rust_query_code"), language: "rust" }]} />
      </section>

      <section>
        <h2>{t("sdk_rust_crud_title")}</h2>
        <p>{t("sdk_rust_crud_desc")}</p>
        <CodeTabs tabs={[{ label: "Rust", code: t("sdk_rust_crud_code"), language: "rust" }]} />
      </section>

      <section>
        <h2>{t("sdk_rust_cert_title")}</h2>
        <p>{t("sdk_rust_cert_desc")}</p>
        <CodeTabs tabs={[{ label: "Rust", code: t("sdk_rust_cert_code"), language: "rust" }]} />
      </section>

      <section>
        <h2>{t("sdk_rust_live_title")}</h2>
        <p>{t("sdk_rust_live_desc")}</p>
        <CodeTabs tabs={[{ label: "Rust", code: t("sdk_rust_live_code"), language: "rust" }]} />
      </section>

      <section>
        <h2 id="migration">{t("sdk_rust_migration_title")}</h2>
        <p>{t("sdk_rust_migration_desc")}</p>
        <CodeTabs tabs={[{ label: "Rust", code: t("sdk_rust_migration_code"), language: "rust" }]} />
      </section>
    </div>
  );
}
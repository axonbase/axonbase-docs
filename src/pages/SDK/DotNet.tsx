import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";

export default function DotNet() {
  const { t } = useTranslation();
  return (
    <div className="page sdk-dotnet-page">
      <h1>{t("sdk_dotnet_title")}</h1>
      <p>{t("sdk_dotnet_intro")}</p>

      <section>
        <h2>{t("sdk_dotnet_connection_title")}</h2>
        <p>{t("sdk_dotnet_connection_desc")}</p>
        <CodeTabs tabs={[{ label: "C#", code: t("sdk_dotnet_connection_code"), language: "csharp" }]} />
      </section>

      <section>
        <h2>{t("sdk_dotnet_signin_title")}</h2>
        <p>{t("sdk_dotnet_signin_desc")}</p>
        <CodeTabs tabs={[{ label: "C#", code: t("sdk_dotnet_signin_code"), language: "csharp" }]} />
      </section>

      <section>
        <h2>{t("sdk_dotnet_query_title")}</h2>
        <p>{t("sdk_dotnet_query_desc")}</p>
        <CodeTabs tabs={[{ label: "C#", code: t("sdk_dotnet_query_code"), language: "csharp" }]} />
      </section>

      <section>
        <h2>{t("sdk_dotnet_crud_title")}</h2>
        <p>{t("sdk_dotnet_crud_desc")}</p>
        <CodeTabs tabs={[{ label: "C#", code: t("sdk_dotnet_crud_code"), language: "csharp" }]} />
      </section>

      <section>
        <h2>{t("sdk_dotnet_cert_title")}</h2>
        <p>{t("sdk_dotnet_cert_desc")}</p>
        <CodeTabs tabs={[{ label: "C#", code: t("sdk_dotnet_cert_code"), language: "csharp" }]} />
      </section>

      <section>
        <h2>{t("sdk_dotnet_live_title")}</h2>
        <p>{t("sdk_dotnet_live_desc")}</p>
        <CodeTabs tabs={[{ label: "C#", code: t("sdk_dotnet_live_code"), language: "csharp" }]} />
      </section>

      <section>
        <h2 id="migration">{t("sdk_dotnet_migration_title")}</h2>
        <p>{t("sdk_dotnet_migration_desc")}</p>
        <CodeTabs tabs={[{ label: "C#", code: t("sdk_dotnet_migration_code"), language: "csharp" }]} />
      </section>
    </div>
  );
}
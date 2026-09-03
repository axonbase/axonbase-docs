import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";

export default function JDBC() {
  const { t } = useTranslation();
  return (
    <div className="page jdbc-page">
      <h1>{t("jdbc_title")}</h1>
      <p>{t("jdbc_intro")}</p>

      <section>
        <h2>{t("jdbc_url_title")}</h2>
        <p>{t("jdbc_url_desc")}</p>
        <CodeTabs tabs={[{ label: "Text", code: t("jdbc_url_code"), language: "text" }]} />
      </section>

      <section>
        <h2>{t("jdbc_driver_title")}</h2>
        <p>{t("jdbc_driver_desc")}</p>
        <CodeTabs tabs={[{ label: "XML", code: t("jdbc_driver_code"), language: "xml" }]} />
      </section>

      <section>
        <h2>{t("jdbc_datagrip_title")}</h2>
        <p>{t("jdbc_datagrip_desc")}</p>
      </section>

      <section>
        <h2>{t("jdbc_examples_title")}</h2>
        <p>{t("jdbc_examples_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "Java", code: t("jdbc_example_java"), language: "java" },
            { label: "Kotlin", code: t("jdbc_example_kotlin"), language: "kotlin" },
          ]}
        />
      </section>

      <section>
        <h2 id="sql-translate">{t("jdbc_translate_title")}</h2>
        <p>{t("jdbc_translate_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "Java", code: t("jdbc_translate_java"), language: "java" },
            { label: "URL", code: t("jdbc_translate_code"), language: "text" },
          ]}
        />
      </section>

      <section>
        <h2 id="hibernate">{t("jdbc_hibernate_title")}</h2>
        <p>{t("jdbc_hibernate_desc")}</p>
        <h3>Dependência Maven</h3>
        <CodeTabs tabs={[{ label: "XML", code: t("jdbc_hibernate_maven"), language: "xml" }]} />
        <h3>Configuração</h3>
        <CodeTabs tabs={[{ label: "Properties", code: t("jdbc_hibernate_props"), language: "properties" }]} />
        <h3>Entidade</h3>
        <CodeTabs tabs={[{ label: "Java", code: t("jdbc_hibernate_entity"), language: "java" }]} />
        <h3>CRUD</h3>
        <CodeTabs tabs={[{ label: "Java", code: t("jdbc_hibernate_crud"), language: "java" }]} />
      </section>
    </div>
  );
}
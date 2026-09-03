import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";

export default function DataRules() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language.startsWith("pt") ? "pt-br" : "en";
  return (
    <div className="page data-rules-page">
      <h1>{t("data_rules_title")}</h1>
      <p>{t("data_rules_intro")}</p>

      <section>
        <h2>{t("data_rules_how_title")}</h2>
        <p>{t("data_rules_how_desc")}</p>
        <figure style={{ margin: "20px 0", textAlign: "center" }}>
          <img
            src={`/images/data-rules-${locale}.png`}
            alt={t("data_rules_diagram_alt")}
            style={{ maxWidth: "100%", height: "auto", borderRadius: 10, border: "1px solid #d4dde7" }}
          />
        </figure>
        <CodeTabs tabs={[{ label: "AxonQL", code: t("data_rules_how_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("data_rules_create_title")}</h2>
        <p>{t("data_rules_create_desc")}</p>
        <CodeTabs tabs={[{ label: "AxonQL", code: t("data_rules_create_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("data_rules_apply_title")}</h2>
        <p>{t("data_rules_apply_desc")}</p>
        <CodeTabs tabs={[{ label: "AxonQL", code: t("data_rules_apply_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("data_rules_mask_title")}</h2>
        <p>{t("data_rules_mask_desc")}</p>
        <CodeTabs tabs={[{ label: "AxonQL", code: t("data_rules_mask_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("data_rules_demo_title")}</h2>
        <p>{t("data_rules_demo_desc")}</p>
        <CodeTabs tabs={[
          { label: "Setup", code: t("data_rules_demo_setup"), language: "bash" },
          { label: "Filter", code: t("data_rules_demo_filter"), language: "bash" },
          { label: "Mask", code: t("data_rules_demo_mask"), language: "bash" },
          { label: "Drop", code: t("data_rules_demo_drop"), language: "bash" },
        ]} />
      </section>

      <section>
        <h2>{t("data_rules_drop_title")}</h2>
        <p>{t("data_rules_drop_desc")}</p>
        <CodeTabs tabs={[{ label: "AxonQL", code: t("data_rules_drop_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("data_rules_show_title")}</h2>
        <p>{t("data_rules_show_desc")}</p>
        <CodeTabs tabs={[{ label: "AxonQL", code: t("data_rules_show_code"), language: "sql" }]} />
      </section>
    </div>
  );
}

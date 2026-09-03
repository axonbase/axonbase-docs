import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import ColumnarIndexDiagram from "../../components/ColumnarIndexDiagram";

export default function Columnar() {
  const { t } = useTranslation();
  return (
    <div className="page search-columnar-page">
      <h1>{t("search_columnar_title")}</h1>
      <p>{t("search_columnar_subtitle")}</p>

      <section>
        <h2>{t("search_columnar_what_title")}</h2>
        <p>{t("search_columnar_what_desc")}</p>
        <ColumnarIndexDiagram />
      </section>

      <section>
        <h2>{t("search_columnar_advantages_title")}</h2>
        <ul>
          {(t("search_columnar_advantages_list", { returnObjects: true }) as string[]).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t("search_columnar_create_title")}</h2>
        <p>{t("search_columnar_create_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_columnar_create_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_columnar_agg_title")}</h2>
        <p>{t("search_columnar_agg_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_columnar_agg_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_columnar_eq_title")}</h2>
        <p>{t("search_columnar_eq_desc")}</p>
        <CodeTabs tabs={[
          { label: "AxonQL", code: t("search_columnar_eq_code"), language: "sql" },
        ]} />
      </section>

      <section>
        <h2>{t("search_columnar_when_title")}</h2>
        <p>{t("search_columnar_when_desc")}</p>
      </section>
    </div>
  );
}
import { useTranslation } from "react-i18next";
import CodeTabs from "../components/CodeTabs";

export default function SpringData() {
  const { t } = useTranslation();
  return (
    <div className="page spring-data-page">
      <h1>{t("spring_title")}</h1>
      <p>{t("spring_intro")}</p>

      <section>
        <h2>{t("spring_dep_title")}</h2>
        <p>{t("spring_dep_desc")}</p>
        <CodeTabs tabs={[{ label: "XML", code: t("spring_dep_code"), language: "xml" }]} />
      </section>

      <section>
        <h2>{t("spring_annotations_title")}</h2>
        <p>{t("spring_annotations_desc")}</p>
        <CodeTabs tabs={[{ label: "Java", code: t("spring_entity_code"), language: "java" }]} />
      </section>

      <section>
        <h2>{t("spring_repo_title")}</h2>
        <p>{t("spring_repo_desc")}</p>
        <CodeTabs tabs={[{ label: "Java", code: t("spring_repo_code"), language: "java" }]} />
      </section>

      <section>
        <h2>Graph Edges with @AxonEdge</h2>
        <p>Use @AxonEdge para mapear relações de grafo diretamente no campo da entidade. Crie a aresta com template.relate() e verifique a conexão com template.graphConnected().</p>
        <CodeTabs tabs={[{ label: "Java", code: t("spring_edge_code"), language: "java" }]} />
      </section>

      <section>
        <h2>{t("spring_template_title")}</h2>
        <p>{t("spring_template_desc")}</p>
        <CodeTabs tabs={[{ label: "Java", code: t("spring_template_code"), language: "java" }]} />
      </section>
    </div>
  );
}
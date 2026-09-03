import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import GraphTraversalDiagram from "../../components/GraphTraversalDiagram";
import QueryPlannerDiagram from "../../components/QueryPlannerDiagram";

export default function DQL() {
  const { t } = useTranslation();
  const statements = t("sql_dql_statements", { returnObjects: true }) as { name: string; desc: string; example: string }[];
  return (
    <div className="page sql-dql-page">
      <h1>{t("sql_dql_title")}</h1>
      <p>{t("sql_dql_intro")}</p>
      <GraphTraversalDiagram />
      <section>
        <h2>{t("sql_dql_planner_title")}</h2>
        <p>{t("sql_dql_planner_desc")}</p>
        <QueryPlannerDiagram />
        <CodeTabs tabs={[{ label: "SQL", code: t("sql_dql_planner_code"), language: "sql" }]} />
      </section>
      {statements.map((s, i) => (
        <section key={i}>
          <h2>{s.name}</h2>
          <p>{s.desc}</p>
          <CodeTabs
            tabs={[
              { label: "SQL", code: s.example, language: "sql" },
              { label: "Java", code: t("sql_dql_java"), language: "java" },
              { label: "Node", code: t("sql_dql_node"), language: "javascript" },
              { label: "Python", code: t("sql_dql_python"), language: "python" },
              { label: "Go", code: t("sql_dql_go"), language: "go" },
            ]}
          />
        </section>
      ))}
    </div>
  );
}

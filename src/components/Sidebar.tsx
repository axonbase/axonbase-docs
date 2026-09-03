import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const sections = [
  { label: "nav_intro", links: [
    { to: "/docs", label: "nav_home" },
    { to: "/use-cases", label: "nav_use_cases" },
    { to: "/getting-started", label: "nav_getting_started" },
    { to: "/installation", label: "nav_installation" },
  ]},
  { label: "nav_operations", links: [
    { to: "/configuration", label: "nav_configuration" },
    { to: "/cli", label: "nav_cli" },
    { to: "/docker", label: "nav_docker" },
    { to: "/cluster", label: "nav_cluster" },
    { to: "/storage", label: "nav_storage" },
    { to: "/backup", label: "nav_backup" },
  ]},
  { label: "nav_sql", links: [
    { to: "/sql", label: "nav_sql_overview" },
    { to: "/sql/ddl", label: "nav_sql_ddl" },
    { to: "/sql/dml", label: "nav_sql_dml" },
    { to: "/sql/dql", label: "nav_sql_dql" },
    { to: "/sql/functions", label: "nav_sql_functions" },
    { to: "/sql/operators", label: "nav_sql_operators" },
    { to: "/sql/time-travel", label: "nav_sql_time_travel" },
  ]},
  { label: "nav_http", links: [
    { to: "/http", label: "nav_http_overview" },
    { to: "/http/rest", label: "nav_http_rest" },
    { to: "/http/rpc", label: "nav_http_rpc" },
    { to: "/http/graphql", label: "nav_http_graphql" },
    { to: "/http/mcp", label: "nav_http_mcp" },
  ]},
  { label: "nav_sdks", links: [
    { to: "/sdk", label: "nav_sdk_overview" },
    { to: "/sdk/java", label: "nav_sdk_java" },
    { to: "/sdk/node", label: "nav_sdk_node" },
    { to: "/sdk/python", label: "nav_sdk_python" },
    { to: "/sdk/go", label: "nav_sdk_go" },
    { to: "/sdk/dotnet", label: "nav_sdk_dotnet" },
    { to: "/sdk/rust", label: "nav_sdk_rust" },
    { to: "/sdk/php", label: "nav_sdk_php" },
    { to: "/sdk/ruby", label: "nav_sdk_ruby" },
  ]},
  { label: "nav_integration", links: [
    { to: "/database-link", label: "nav_dblink" },
    { to: "/saga", label: "nav_saga" },
    { to: "/data-rules", label: "nav_data_rules" },
    { to: "/ai-audit", label: "nav_ai_audit" },
    { to: "/jdbc", label: "nav_jdbc" },
    { to: "/jdbc#sql-translate", label: "nav_jdbc_translate" },
    { to: "/jdbc#hibernate", label: "nav_jdbc_hibernate" },
    { to: "/spring-data", label: "nav_spring" },
    { to: "/certificate", label: "nav_certificate" },
  ]},
  { label: "nav_search", links: [
    { to: "/search", label: "nav_search" },
    { to: "/search/fulltext", label: "nav_search_ft" },
    { to: "/search/vector", label: "nav_search_vector" },
    { to: "/search/geo", label: "nav_search_geo" },
    { to: "/search/graph", label: "nav_search_graph" },
    { to: "/search/columnar", label: "nav_search_columnar" },
  ]},
  { label: "nav_ops", links: [
    { to: "/security", label: "nav_security" },
    { to: "/observability", label: "nav_observability" },
    { to: "/faq", label: "nav_faq" },
    { to: "/changelog", label: "nav_changelog" },
  ]},
];

export default function Sidebar({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const { t } = useTranslation();
  return (
    <nav className={`sidebar${open ? " open" : ""}`} aria-label="Documentation navigation">
      <div className="sidebar-logo"><span className="brand-mark">A</span> AxonBase <em>Docs</em></div>
      {sections.map((sec) => (
        <div key={sec.label} className="sidebar-section">
          <div className="sidebar-label">{t(sec.label)}</div>
          {sec.links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/docs"}
              className={({ isActive }) => `sidebar-link${isActive ? " active" : ""}`}
              onClick={onNavigate}
            >
              {t(link.label)}
            </NavLink>
          ))}
        </div>
      ))}
    </nav>
  );
}

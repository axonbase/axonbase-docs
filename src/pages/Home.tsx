import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import CodeTabs from "../components/CodeTabs";
import InterfacesDiagram from "../components/InterfacesDiagram";

export default function Home() {
  const { t } = useTranslation();
  const paths = t("home_paths", { returnObjects: true }) as { title: string; desc: string; action: string; path: string }[];
  const architecturePoints = t("home_architecture_points", { returnObjects: true }) as string[];
  const useCases = t("home_use_cases", { returnObjects: true }) as { title: string; desc: string; action: string; path: string }[];
  const resources = t("home_resources", { returnObjects: true }) as { title: string; desc: string; action: string; path: string }[];
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">AXONBASE / JAVA 21+</span>
          <h1>{t("home_title")}</h1>
          <p className="subtitle">{t("home_subtitle")}</p>
          <div className="hero-actions">
            <Link to="/getting-started" className="btn primary">{t("home_get_started")}</Link>
            <Link to="/use-cases" className="btn secondary">{t("home_use_cases_link")}</Link>
          </div>
        </div>
        <InterfacesDiagram
          title="AxonBase interfaces"
          description="Clients connect through SDKs, JDBC, HTTP, and JSON-RPC to the AxonBase engine."
          clientsLabel="Interfaces"
          sdkLabel="SDKs"
          jdbcLabel="JDBC"
          httpLabel="HTTP / RPC"
          coreLabel="AxonBase"
          coreDetail="AxonQL engine"
          walLabel="WAL"
          walDetail="persistent state"
          raftLabel="Raft"
          raftDetail="cluster consensus"
        />
      </section>

      <section className="positioning-banner">
        <div className="positioning-banner-inner">
          <span className="positioning-badge">{t("home_positioning_badge")}</span>
          <p className="positioning-text">{t("home_positioning_text")}</p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Interfaces">
        <span>AxonQL</span><span>REST</span><span>JSON-RPC</span><span>WebSocket</span><span>GraphQL</span><span>MCP</span><span>JDBC</span>
      </section>

      <section className="quick-start-section" aria-labelledby="quick-start-title">
        <div className="quick-start-copy">
          <span className="quick-start-kicker">FIRST QUERY / 60 SEC</span>
          <h2 id="quick-start-title">{t("home_quick_start")}</h2>
          <p>{t("home_quick_start_desc")}</p>
          <Link to="/getting-started" className="quick-start-link">{t("home_get_started")} <span aria-hidden="true">→</span></Link>
        </div>
        <div className="quick-start-code">
          <CodeTabs tabs={[{ label: "Bash", code: t("home_quick_start_code"), language: "bash" }]} />
        </div>
      </section>

      <section className="features-section" aria-labelledby="adoption-paths-title">
        <h2 id="adoption-paths-title">{t("home_paths_title")}</h2>
        <p>{t("home_paths_intro")}</p>
        <div className="feature-grid">
          {paths.map((path) => <FeatureCard key={path.title} title={path.title}>{path.desc} <Link to={path.path}>{path.action}</Link></FeatureCard>)}
        </div>
      </section>

      <section aria-labelledby="product-model-title">
        <h2 id="product-model-title">{t("home_architecture_title")}</h2>
        <p>{t("home_architecture_desc")}</p>
        <ul className="home-architecture-list">{architecturePoints.map((point) => <li key={point}>{point}</li>)}</ul>
      </section>

      <section aria-labelledby="use-cases-title">
        <h2 id="use-cases-title">{t("home_use_cases_title")}</h2>
        <p>{t("home_use_cases_intro")}</p>
        <div className="feature-grid">
          {useCases.map((item) => <FeatureCard key={item.title} title={item.title}>{item.desc} <Link to={item.path}>{item.action}</Link></FeatureCard>)}
        </div>
      </section>

      <section aria-labelledby="resources-title">
        <h2 id="resources-title">{t("home_resources_title")}</h2>
        <div className="feature-grid">
          {resources.map((item) => <FeatureCard key={item.title} title={item.title}>{item.desc} <Link to={item.path}>{item.action}</Link></FeatureCard>)}
        </div>
      </section>
    </div>
  );
}

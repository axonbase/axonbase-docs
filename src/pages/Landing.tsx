import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const connectors = [
  ["Java", "java/java-original.svg"], ["Python", "python/python-original.svg"],
  ["Node.js", "nodejs/nodejs-original.svg"], ["Ruby", "ruby/ruby-original.svg"],
  ["Go", "go/go-original-wordmark.svg"], ["Rust", "rust/rust-original.svg"],
  ["PHP", "php/php-original.svg"], [".NET", "dot-net/dot-net-original.svg"],
];

export default function Landing() {
  const { i18n } = useTranslation();
  const pt = i18n.language.startsWith("pt");
  const copy = pt ? {
    nav: "Documentação", hero: "Dados que acompanham a ambição do seu produto.",
    lead: "AxonBase reúne transações, busca e múltiplos modelos de dados em um único motor para equipes que não querem montar a infraestrutura peça por peça.",
    start: "Ler a documentação", github: "Ver no GitHub", signal: "Java 21+ / código aberto",
    proof: "Uma superfície de dados. Menos serviços para operar.",
    features: [["Modelo único, vários formatos", "Documentos, grafos, tabelas, chave-valor, vetores e dados geoespaciais convivem na mesma consulta."], ["Transações para o mundo distribuído", "Sagas nativas coordenam compensação e consistência entre serviços sem criar um sistema paralelo."], ["Busca pronta para produto", "Índices full-text, vetoriais, colunares e geoespaciais respondem no mesmo lugar em que os dados vivem."]],
    cases: "Feito para sistemas que não cabem em uma tabela", caseItems: [["Produtos com IA", "Contexto, recuperação vetorial e regras de segurança para cada consulta."], ["Operações distribuídas", "Fluxos de pagamento, estoque e logística com sagas e trilhas de auditoria."], ["Plataformas de dados", "Uma API para dados relacionais, documentos, grafos e análises operacionais."]],
    connectorTitle: "Escreva na linguagem da sua equipe.", connectorLead: "SDKs publicados nos principais registries, todos sobre o mesmo protocolo.",
    final: "Comece com uma consulta. Cresça sem trocar de banco.", footer: "Banco de dados multimodelo para produtos que evoluem.",
  } : {
    nav: "Documentation", hero: "Data infrastructure that keeps up with product ambition.",
    lead: "AxonBase brings transactions, search, and multiple data models into one engine for teams that refuse to assemble infrastructure piece by piece.",
    start: "Read the documentation", github: "View on GitHub", signal: "Java 21+ / open source",
    proof: "One data surface. Fewer services to operate.",
    features: [["One model, many shapes", "Documents, graphs, tables, key-value, vectors, and geospatial data work in the same query."], ["Transactions for distributed reality", "Native sagas coordinate compensation and consistency across services without another system to run."], ["Search ready for product", "Full-text, vector, columnar, and geospatial indexes answer where the data already lives."]],
    cases: "Built for systems that outgrow a single table", caseItems: [["AI products", "Context, vector retrieval, and security rules for every query."], ["Distributed operations", "Payment, inventory, and logistics flows with sagas and audit trails."], ["Data platforms", "One API for relational data, documents, graphs, and operational analytics."]],
    connectorTitle: "Write in your team's language.", connectorLead: "SDKs published to the major registries, all over the same protocol.",
    final: "Start with a query. Grow without changing databases.", footer: "A multi-model database for products that evolve.",
  };

  return <main className="landing">
    <nav className="landing-nav"><a className="landing-brand" href="/"><span>A</span>AxonBase</a><div><a href="https://github.com/axonbase/axonbase" target="_blank" rel="noreferrer">GitHub</a><Link to="/docs">{copy.nav}</Link></div></nav>
    <section className="landing-hero">
      <div className="landing-grid" />
      <div className="landing-hero-copy"><p className="landing-kicker">{copy.signal}</p><h1>{copy.hero}</h1><p>{copy.lead}</p><div className="landing-actions"><Link to="/docs" className="landing-primary">{copy.start} <b>→</b></Link><a href="https://github.com/axonbase/axonbase" target="_blank" rel="noreferrer" className="landing-secondary">{copy.github}</a></div></div>
      <div className="landing-engine" aria-label="AxonBase architecture"><div className="engine-label">AXONBASE ENGINE</div><div className="engine-core">Axon<br />Base</div><div className="engine-node node-one">SQL<br /><small>AxonQL</small></div><div className="engine-node node-two">VECTOR<br /><small>search</small></div><div className="engine-node node-three">SAGA<br /><small>transactions</small></div></div>
    </section>
    <section className="landing-proof"><span>{copy.proof}</span><div><b>01</b> engine <b>02</b> protocol <b>03</b> operations</div></section>
    <section className="landing-section landing-features"><p className="landing-index">01 / PLATFORM</p><div className="landing-section-head"><h2>Build less infrastructure.<br /><i>Ship more product.</i></h2></div><div className="landing-feature-list">{copy.features.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="landing-section landing-cases"><p className="landing-index">02 / USE CASES</p><h2>{copy.cases}</h2><div className="landing-case-list">{copy.caseItems.map(([title, text], index) => <article key={title}><div className={`case-orb orb-${index}`} /><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="landing-connectors"><div><p className="landing-index">03 / SDKS</p><h2>{copy.connectorTitle}</h2><p>{copy.connectorLead}</p></div><div className="connector-wall">{connectors.map(([name, icon]) => <div key={name} className="connector"><img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`} alt="" /><span>{name}</span></div>)}</div></section>
    <section className="landing-cta"><p className="landing-kicker">AXONBASE / READY WHEN YOU ARE</p><h2>{copy.final}</h2><Link to="/docs" className="landing-primary">{copy.start} <b>→</b></Link></section>
    <footer className="landing-footer"><span className="landing-brand"><span>A</span>AxonBase</span><p>{copy.footer}</p><a href="https://github.com/axonbase/axonbase" target="_blank" rel="noreferrer">github.com/axonbase/axonbase</a></footer>
  </main>;
}

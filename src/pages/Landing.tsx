import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const connectors = [
  ["Java", "java/java-original.svg", "https://central.sonatype.com/artifact/com.axondatabase/axonbase-sdk-java"], ["Python", "python/python-original.svg", "https://pypi.org/project/axonbase-sdk/"],
  ["Node.js", "nodejs/nodejs-original.svg", "https://www.npmjs.com/package/@axonbase/sdk"], ["Ruby", "ruby/ruby-original.svg", "https://rubygems.org/gems/axonbase-sdk"],
  ["Go", "go/go-original-wordmark.svg", "https://pkg.go.dev/github.com/axonbase/axonbase/axonbase-sdk-go"], ["Rust", "rust/rust-original.svg", "https://crates.io/crates/axonbase-sdk"],
  ["PHP", "php/php-original.svg", "https://packagist.org/packages/axonbase/sdk"], [".NET", "dot-net/dot-net-original.svg", "https://www.nuget.org/packages/AxonBase.Sdk"],
];

export default function Landing() {
  const { i18n } = useTranslation();
  const pt = i18n.language.startsWith("pt");
  const copy = pt ? {
    nav: "Documentação", hero: "Dados que acompanham a ambição do seu produto.",
    lead: "AxonBase reúne transações, busca e múltiplos modelos de dados em um único motor para equipes que não querem montar a infraestrutura peça por peça.",
    start: "Ler a documentação", github: "GitHub", docs: "Documentação", signal: "Java 21+ / código aberto",
    proof: "Uma superfície de dados. Menos serviços para operar.",
    modalTitle: "Um motor. Seis maneiras de modelar seu produto.", modalLead: "Escolha a estrutura que o domínio pede e combine modelos na mesma plataforma.", modal: [["Documentos e tabelas", "Dados flexíveis ou com esquema, sob o mesmo catálogo."], ["Grafos", "Relações e travessias direcionadas para domínios conectados."], ["Chave-valor", "Leituras e gravações diretas por namespace e banco."], ["Vetores", "Embeddings e similaridade HNSW junto dos registros."], ["Texto completo", "BM25, analisadores, relevância e trechos destacados."], ["Geoespacial", "Pontos GeoJSON, índice GEO e distância em metros."]],
    platform: "Recursos que mantêm o produto em movimento.", features: [["DATABASE LINK", "Consulte e faça joins entre bancos AxonBase remotos sem sair da consulta."], ["Sagas distribuídas", "Coordene fluxos independentes com compensação local em caso de cancelamento."], ["Data Rules", "Aplique predicados por linha e mascaramento de campos de forma transparente."], ["Time Travel", "Leia estados anteriores do ledger WAL dentro dos limites de retenção configurados."], ["Segurança de ponta a ponta", "JWT, escopos, TLS, mTLS, certificados, CORS e limites de taxa."], ["Operação observável", "Métricas Prometheus, health checks, logs JSON, backups e replicação Raft."]],
    cases: "Feito para sistemas que não cabem em uma tabela", caseItems: [["Produtos com IA", "Contexto, recuperação vetorial e regras de segurança para cada consulta."], ["Operações distribuídas", "Fluxos de pagamento, estoque e logística com sagas e trilhas de auditoria."], ["Plataformas de dados", "Uma API para dados relacionais, documentos, grafos e análises operacionais."]],
    connectorTitle: "Escreva na linguagem da sua equipe.", connectorLead: "SDKs publicados nos principais registries, todos sobre o mesmo protocolo.",
    final: "Comece com uma consulta. Cresça sem trocar de banco.", footer: "Banco de dados multimodelo para produtos que evoluem.", registry: "Abrir registry",
  } : {
    nav: "Documentation", hero: "Data infrastructure that keeps up with product ambition.",
    lead: "AxonBase brings transactions, search, and multiple data models into one engine for teams that refuse to assemble infrastructure piece by piece.",
    start: "Read the documentation", github: "GitHub", docs: "Documentation", signal: "Java 21+ / open source",
    proof: "One data surface. Fewer services to operate.",
    modalTitle: "One engine. Six ways to model your product.", modalLead: "Choose the structure your domain needs and combine models on the same platform.", modal: [["Documents and tables", "Flexible or schema-full data under the same catalog."], ["Graphs", "Directed relationships and traversals for connected domains."], ["Key-value", "Direct reads and writes per namespace and database."], ["Vectors", "Embeddings and HNSW similarity next to the records."], ["Full-text", "BM25, analyzers, relevance scoring, and highlighted snippets."], ["Geospatial", "GeoJSON points, GEO indexes, and distance in meters."]],
    platform: "Capabilities that keep product moving.", features: [["DATABASE LINK", "Query and join remote AxonBase databases without leaving the query."], ["Distributed Sagas", "Coordinate independent flows with local compensation on cancellation."], ["Data Rules", "Apply row predicates and field masking transparently."], ["Time Travel", "Read earlier WAL-ledger states within configured retention limits."], ["End-to-end security", "JWT, scopes, TLS, mTLS, certificates, CORS, and rate limits."], ["Observable operations", "Prometheus metrics, health checks, JSON logs, backups, and Raft replication."]],
    cases: "Built for systems that outgrow a single table", caseItems: [["AI products", "Context, vector retrieval, and security rules for every query."], ["Distributed operations", "Payment, inventory, and logistics flows with sagas and audit trails."], ["Data platforms", "One API for relational data, documents, graphs, and operational analytics."]],
    connectorTitle: "Write in your team's language.", connectorLead: "SDKs published to the major registries, all over the same protocol.",
    final: "Start with a query. Grow without changing databases.", footer: "A multi-model database for products that evolve.", registry: "Open registry",
  };

  return <main className="landing">
    <nav className="landing-nav"><a className="landing-brand" href="/"><span>A</span>AxonBase</a><div><a className="landing-nav-link" href="https://github.com/axonbase/axonbase" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.03 1.54 1.03.9 1.54 2.35 1.1 2.92.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.9.68 1.82v2.7c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>{copy.github}</a><Link className="landing-nav-link landing-nav-docs" to="/docs"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h11a3 3 0 0 1 3 3v15H8a3 3 0 0 0-3 0V3Zm3 15h9V6H8v12Zm2-9h5v2h-5V9Zm0 4h5v2h-5v-2Z" /></svg>{copy.docs}</Link></div></nav>
    <section className="landing-hero">
      <div className="landing-grid" />
      <div className="landing-hero-copy"><p className="landing-kicker">{copy.signal}</p><h1>{copy.hero}</h1><p>{copy.lead}</p><div className="landing-actions"><Link to="/docs" className="landing-primary">{copy.start} <b>→</b></Link><a href="https://github.com/axonbase/axonbase" target="_blank" rel="noreferrer" className="landing-secondary">{copy.github}</a></div></div>
      <div className="landing-engine" aria-label="AxonBase architecture"><div className="engine-label">AXONBASE ENGINE</div><div className="engine-core">Axon<br />Base</div><div className="engine-node node-one">SQL<br /><small>AxonQL</small></div><div className="engine-node node-two">VECTOR<br /><small>search</small></div><div className="engine-node node-three">SAGA<br /><small>transactions</small></div></div>
    </section>
    <section className="landing-proof"><span>{copy.proof}</span><div><b>01</b> engine <b>02</b> protocol <b>03</b> operations</div></section>
    <section className="landing-section landing-modal"><p className="landing-index">01 / MULTI-MODEL</p><h2>{copy.modalTitle}</h2><p className="landing-modal-lead">{copy.modalLead}</p><div className="landing-model-grid">{copy.modal.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="landing-section landing-features"><p className="landing-index">02 / PLATFORM</p><div className="landing-section-head"><h2>{copy.platform}</h2></div><div className="landing-feature-list landing-feature-list-six">{copy.features.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="landing-section landing-cases"><p className="landing-index">03 / USE CASES</p><h2>{copy.cases}</h2><div className="landing-case-list">{copy.caseItems.map(([title, text], index) => <article key={title}><div className={`case-orb orb-${index}`} /><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="landing-connectors"><div><p className="landing-index">04 / SDKS</p><h2>{copy.connectorTitle}</h2><p>{copy.connectorLead}</p></div><div className="connector-wall">{connectors.map(([name, icon, href]) => <a key={name} href={href} target="_blank" rel="noreferrer" className="connector"><img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`} alt="" /><span>{name}</span><small>{copy.registry} ↗</small></a>)}</div></section>
    <section className="landing-cta"><p className="landing-kicker">AXONBASE / READY WHEN YOU ARE</p><h2>{copy.final}</h2><Link to="/docs" className="landing-primary">{copy.start} <b>→</b></Link></section>
    <footer className="landing-footer"><span className="landing-brand"><span>A</span>AxonBase</span><p>{copy.footer}</p><a href="https://github.com/axonbase/axonbase" target="_blank" rel="noreferrer">github.com/axonbase/axonbase</a></footer>
  </main>;
}

export default function DatabaseLinkDiagram() {
  return (
    <figure className="database-link-diagram" style={{ margin: "20px 0", textAlign: "center" }}>
      <img
        src="/images/diagram_database_link.png"
        alt="DATABASE LINK architecture: local AxonBase connects to remote servers via links"
        style={{ maxWidth: "100%", height: "auto", borderRadius: 10, border: "1px solid #d4dde7" }}
      />
    </figure>
  );
}
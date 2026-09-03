export default function SagaDiagram() {
  return (
    <figure style={{ margin: "20px 0", textAlign: "center" }}>
      <img
        src="/images/diagram_saga.png"
        alt="SAGA distribuída: cliente envia X-Correlation-Id ao orquestrador, que usa DATABASE LINK para quatro bancos e compensa os steps em ordem reversa"
        style={{ maxWidth: "100%", height: "auto", borderRadius: 10, border: "1px solid #d4dde7" }}
      />
    </figure>
  );
}

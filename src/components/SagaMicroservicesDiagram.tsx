type Flow = "success" | "failure";

export default function SagaMicroservicesDiagram({ flow, language, alt }: { flow: Flow; language: string; alt: string }) {
  const locale = language.startsWith("pt") ? "pt-br" : "en";
  return (
    <figure className={`saga-flow-diagram ${flow}`}>
      <img src={`/images/saga-microservices-${flow}-${locale}.png`} alt={alt} />
    </figure>
  );
}

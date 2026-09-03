export default function GettingStartedLifecycleDiagram() {
  const steps = ["Install", "Connect", "Model", "Query", "Ship"];
  return (
    <svg aria-labelledby="getting-started-lifecycle-title getting-started-lifecycle-description" role="img" viewBox="0 0 760 250" width="100%" style={{ display: "block", height: "auto", margin: "1.75rem 0" }} xmlns="http://www.w3.org/2000/svg">
      <title id="getting-started-lifecycle-title">Getting started lifecycle</title>
      <desc id="getting-started-lifecycle-description">The onboarding path progresses from installing AxonBase through connecting, modeling data, querying it, and shipping an application.</desc>
      <defs><linearGradient id="start-surface" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f7f7ff" /><stop offset="1" stopColor="#f3fbff" /></linearGradient><marker id="start-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#635bff" /></marker></defs>
      <rect width="760" height="250" rx="20" fill="url(#start-surface)" /><text x="40" y="42" fill="#635bff" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="1.8">GETTING STARTED / 5 STEPS</text><path d="M110 125H650" fill="none" markerEnd="url(#start-arrow)" stroke="#b9b4ff" strokeWidth="4" />
      {steps.map((step, index) => { const x = 90 + index * 140; return <g key={step} transform={`translate(${x} 125)`}><circle r="34" fill={index === 4 ? "#635bff" : "#fff"} stroke="#635bff" strokeWidth="2.5" /><text y="5" fill={index === 4 ? "#fff" : "#5046cf"} fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="14" fontWeight="800" textAnchor="middle">0{index + 1}</text><text y="62" fill="#102a43" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="800" textAnchor="middle">{step}</text></g>; })}
      <path d="M90 196c99 29 434 29 530 0" fill="none" stroke="#75cbb1" strokeDasharray="4 7" strokeWidth="2" /><text x="380" y="226" fill="#16806d" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle">Each step leaves you with a working foundation</text>
    </svg>
  );
}

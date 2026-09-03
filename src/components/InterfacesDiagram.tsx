type InterfacesDiagramProps = {
  title: string;
  description: string;
  clientsLabel: string;
  sdkLabel: string;
  jdbcLabel: string;
  httpLabel: string;
  coreLabel: string;
  coreDetail: string;
  walLabel: string;
  walDetail: string;
  raftLabel: string;
  raftDetail: string;
};

export default function InterfacesDiagram({
  title,
  description,
  clientsLabel,
  sdkLabel,
  jdbcLabel,
  httpLabel,
  coreLabel,
  coreDetail,
  walLabel,
  walDetail,
  raftLabel,
  raftDetail,
}: InterfacesDiagramProps) {
  return (
    <svg
      viewBox="0 0 760 430"
      role="img"
      aria-labelledby="interfaces-diagram-title interfaces-diagram-description"
      style={{ display: "block", width: "100%", height: "auto", margin: "24px 0 0" }}
    >
      <title id="interfaces-diagram-title">{title}</title>
      <desc id="interfaces-diagram-description">{description}</desc>
      <defs>
        <linearGradient id="interfaces-core" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#635bff" />
          <stop offset="1" stopColor="#302a93" />
        </linearGradient>
        <linearGradient id="interfaces-wal" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#0e3257" />
          <stop offset="1" stopColor="#071d35" />
        </linearGradient>
        <marker id="interfaces-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#829ab1" />
        </marker>
      </defs>

      <rect width="760" height="430" rx="18" fill="#f8fbff" />
      <text x="48" y="48" fill="#486581" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="12" fontWeight="700" letterSpacing="2">{clientsLabel.toUpperCase()}</text>

      <path d="M224 123 H298" fill="none" stroke="#829ab1" strokeWidth="2" markerEnd="url(#interfaces-arrow)" />
      <path d="M224 213 H298" fill="none" stroke="#829ab1" strokeWidth="2" markerEnd="url(#interfaces-arrow)" />
      <path d="M224 303 H298" fill="none" stroke="#829ab1" strokeWidth="2" markerEnd="url(#interfaces-arrow)" />
      <path d="M465 192 H526" fill="none" stroke="#829ab1" strokeWidth="2" markerEnd="url(#interfaces-arrow)" />
      <path d="M382 288 V333" fill="none" stroke="#829ab1" strokeWidth="2" markerEnd="url(#interfaces-arrow)" />

      <g fill="#fff" stroke="#cbd9e7" strokeWidth="1.5">
        <rect x="48" y="88" width="176" height="70" rx="10" />
        <rect x="48" y="178" width="176" height="70" rx="10" />
        <rect x="48" y="268" width="176" height="70" rx="10" />
      </g>
      <g fill="#102a43" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="16" fontWeight="700">
        <text x="72" y="130">{sdkLabel}</text>
        <text x="72" y="220">{jdbcLabel}</text>
        <text x="72" y="310">{httpLabel}</text>
      </g>

      <rect x="298" y="132" width="167" height="156" rx="15" fill="url(#interfaces-core)" />
      <text x="381.5" y="193" fill="#fff" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="22" fontWeight="800" textAnchor="middle">{coreLabel}</text>
      <text x="381.5" y="220" fill="#d8eaff" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="11" textAnchor="middle">{coreDetail}</text>

      <rect x="526" y="157" width="180" height="70" rx="10" fill="#fff" stroke="#cbd9e7" strokeWidth="1.5" />
      <text x="550" y="187" fill="#102a43" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="16" fontWeight="700">{raftLabel}</text>
      <text x="550" y="208" fill="#486581" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="10">{raftDetail}</text>

      <rect x="298" y="333" width="167" height="57" rx="10" fill="url(#interfaces-wal)" />
      <text x="322" y="357" fill="#fff" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="15" fontWeight="700">{walLabel}</text>
      <text x="322" y="375" fill="#bcd6ed" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="10">{walDetail}</text>
    </svg>
  );
}

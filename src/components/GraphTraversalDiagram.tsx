export default function GraphTraversalDiagram() {
  return (
    <svg
      aria-labelledby="graph-traversal-title graph-traversal-description"
      role="img"
      viewBox="0 0 760 320"
      width="100%"
      style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "760px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="graph-traversal-title">Graph relations and traversal</title>
      <desc id="graph-traversal-description">A traversal follows directed relationships from Maya through her team to the project she owns.</desc>
      <defs><marker id="graph-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#0ea5e9" /></marker></defs>
      <rect fill="#f8fafc" height="320" rx="20" width="760" />
      <text fill="#64748b" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" letterSpacing="1.6" x="38" y="43">RELATIONSHIP TRAVERSAL</text>
      <path d="M198 159H300M460 159H562M389 205v43" fill="none" markerEnd="url(#graph-arrow)" stroke="#0ea5e9" strokeWidth="3" />
      <text fill="#0369a1" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" textAnchor="middle" x="249" y="144">MEMBER_OF</text><text fill="#0369a1" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" textAnchor="middle" x="511" y="144">OWNS</text><text fill="#0369a1" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" textAnchor="middle" x="420" y="233">COLLABORATES</text>
      <circle cx="140" cy="159" fill="#0c4a6e" r="58" /><circle cx="140" cy="141" fill="#38bdf8" r="16" /><path d="M112 186c8-20 48-20 56 0" fill="none" stroke="#7dd3fc" strokeLinecap="round" strokeWidth="8" /><text fill="white" fontFamily="ui-sans-serif, system-ui" fontSize="15" fontWeight="700" textAnchor="middle" x="140" y="239">Maya</text>
      <rect fill="#e0f2fe" height="94" rx="18" stroke="#7dd3fc" strokeWidth="2" width="160" x="300" y="112" /><text fill="#0f172a" fontFamily="ui-sans-serif, system-ui" fontSize="16" fontWeight="700" textAnchor="middle" x="380" y="153">Platform team</text><text fill="#0369a1" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" textAnchor="middle" x="380" y="178">TEAM: 42</text>
      <rect fill="#ecfdf5" height="94" rx="18" stroke="#6ee7b7" strokeWidth="2" width="140" x="562" y="112" /><path d="M612 135h40v24h-40z" fill="#10b981" rx="3" /><text fill="#0f172a" fontFamily="ui-sans-serif, system-ui" fontSize="15" fontWeight="700" textAnchor="middle" x="632" y="180">Atlas</text>
      <circle cx="389" cy="271" fill="#fef3c7" r="34" stroke="#fcd34d" strokeWidth="2" /><text fill="#92400e" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="389" y="275">Ravi</text>
      <rect fill="#d1fae5" height="28" rx="14" width="300" x="230" y="65" /><text fill="#047857" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="380" y="84">MAYA → TEAM → PROJECT</text>
    </svg>
  );
}

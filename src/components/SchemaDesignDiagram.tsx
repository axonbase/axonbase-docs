export default function SchemaDesignDiagram() {
  return (
    <svg
      aria-labelledby="schema-design-title schema-design-description"
      role="img"
      viewBox="0 0 760 390"
      width="100%"
      style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "760px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="schema-design-title">Flexible and enforced schema design</title>
      <desc id="schema-design-description">A SCHEMALESS table accepts evolving documents, while a SCHEMAFULL table validates each document against fields defined with DEFINE FIELD.</desc>
      <defs>
        <linearGradient id="schema-surface" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f8fafc" /><stop offset="1" stopColor="#f0fdf4" /></linearGradient>
        <marker id="schema-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#64748b" /></marker>
      </defs>
      <rect fill="url(#schema-surface)" height="390" rx="20" width="760" />
      <text fill="#64748b" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="1.7" x="38" y="42">SCHEMA DESIGN</text>
      <path d="M380 72v248" fill="none" stroke="#cbd5e1" strokeDasharray="5 7" strokeWidth="2" />
      <text fill="#0369a1" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" fontWeight="700" textAnchor="middle" x="202" y="79">SCHEMALESS</text>
      <text fill="#047857" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" fontWeight="700" textAnchor="middle" x="558" y="79">SCHEMAFULL</text>
      <rect fill="#fff" height="202" rx="16" stroke="#7dd3fc" strokeWidth="2" width="294" x="54" y="100" />
      <path d="M82 124h24l8 8v34H82zM106 124v10h10" fill="#e0f2fe" stroke="#0284c7" strokeLinejoin="round" strokeWidth="2" /><text fill="#0f172a" fontFamily="ui-sans-serif, system-ui" fontSize="16" fontWeight="700" x="130" y="145">person:ana</text>
      <rect fill="#f0f9ff" height="34" rx="7" width="238" x="82" y="170" /><text fill="#075985" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" x="98" y="192">name: "Ana"</text>
      <rect fill="#f0f9ff" height="34" rx="7" width="238" x="82" y="213" /><text fill="#075985" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" x="98" y="235">interests: ["graph"]</text>
      <rect fill="#f0f9ff" height="34" rx="7" width="238" x="82" y="256" /><text fill="#075985" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" x="98" y="278">profile: {"{ timezone: \"BRT\" }"}</text>
      <path d="M412 160h46" fill="none" markerEnd="url(#schema-arrow)" stroke="#64748b" strokeWidth="2.5" />
      <rect fill="#ecfdf5" height="62" rx="12" stroke="#6ee7b7" strokeWidth="2" width="234" x="466" y="128" /><text fill="#047857" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" x="486" y="153">DEFINE FIELD email</text><text fill="#047857" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" x="486" y="174">TYPE string ASSERT $value</text>
      <path d="M583 197v27" fill="none" markerEnd="url(#schema-arrow)" stroke="#64748b" strokeWidth="2.5" />
      <rect fill="#fff" height="78" rx="12" stroke="#86efac" strokeWidth="2" width="234" x="466" y="230" /><path d="M490 257l10 10 20-23" fill="none" stroke="#16a34a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /><text fill="#166534" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="700" x="530" y="265">Validated document</text><text fill="#4d7c0f" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" x="530" y="285">email: string</text>
      <rect fill="#e0f2fe" height="30" rx="15" width="206" x="98" y="326" /><text fill="#0369a1" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="201" y="346">Evolve records freely</text>
      <rect fill="#dcfce7" height="30" rx="15" width="206" x="480" y="326" /><text fill="#15803d" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="583" y="346">Enforce data contracts</text>
    </svg>
  );
}

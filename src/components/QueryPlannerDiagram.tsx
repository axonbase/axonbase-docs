export default function QueryPlannerDiagram() {
  return (
    <svg
      aria-labelledby="query-planner-title query-planner-description"
      role="img"
      viewBox="0 0 760 350"
      width="100%"
      style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "760px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="query-planner-title">Query planner access paths</title>
      <desc id="query-planner-description">A SELECT statement is planned through a unique, full-text, vector, geographic, or full scan access path before its projection is returned.</desc>
      <defs><linearGradient id="planner-surface" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f8fafc" /><stop offset="1" stopColor="#fff7ed" /></linearGradient><marker id="planner-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#ea580c" /></marker></defs>
      <rect fill="url(#planner-surface)" height="350" rx="20" width="760" />
      <text fill="#64748b" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="1.7" x="38" y="42">QUERY PLANNER</text>
      <rect fill="#fff" height="58" rx="14" stroke="#fdba74" strokeWidth="2" width="142" x="38" y="142" /><text fill="#9a3412" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="16" fontWeight="700" textAnchor="middle" x="109" y="167">SELECT</text><text fill="#c2410c" fontFamily="ui-sans-serif, system-ui" fontSize="11" textAnchor="middle" x="109" y="185">filters + source</text>
      <path d="M180 171h36M216 72v199M216 72h44M216 122h44M216 171h44M216 220h44M216 270h44" fill="none" markerEnd="url(#planner-arrow)" stroke="#fb923c" strokeLinecap="round" strokeWidth="2.25" />
      <g fontFamily="ui-sans-serif, system-ui"><rect fill="#fff" height="42" rx="10" stroke="#fdba74" strokeWidth="1.5" width="142" x="260" y="51" /><text fill="#9a3412" fontSize="13" fontWeight="700" textAnchor="middle" x="331" y="77">Unique index</text><rect fill="#fff" height="42" rx="10" stroke="#fdba74" strokeWidth="1.5" width="142" x="260" y="101" /><text fill="#9a3412" fontSize="13" fontWeight="700" textAnchor="middle" x="331" y="127">Full-text index</text><rect fill="#fff" height="42" rx="10" stroke="#fdba74" strokeWidth="1.5" width="142" x="260" y="150" /><text fill="#9a3412" fontSize="13" fontWeight="700" textAnchor="middle" x="331" y="176">Vector index</text><rect fill="#fff" height="42" rx="10" stroke="#fdba74" strokeWidth="1.5" width="142" x="260" y="199" /><text fill="#9a3412" fontSize="13" fontWeight="700" textAnchor="middle" x="331" y="225">Geo index</text><rect fill="#fff" height="42" rx="10" stroke="#fdba74" strokeWidth="1.5" width="142" x="260" y="249" /><text fill="#9a3412" fontSize="13" fontWeight="700" textAnchor="middle" x="331" y="275">Full scan</text></g>
      <path d="M402 72h54M402 122h54M402 171h54M402 220h54M402 270h54M456 72v198M456 171h45" fill="none" markerEnd="url(#planner-arrow)" stroke="#fb923c" strokeLinecap="round" strokeWidth="2.25" />
      <rect fill="#fff7ed" height="92" rx="16" stroke="#fb923c" strokeWidth="2" width="184" x="501" y="125" /><path d="M531 150h28M531 164h46M531 178h36" stroke="#ea580c" strokeLinecap="round" strokeWidth="3" /><text fill="#9a3412" fontFamily="ui-sans-serif, system-ui" fontSize="15" fontWeight="700" x="590" y="161">Projection</text><text fill="#c2410c" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" x="590" y="181">name, score, ...</text>
      <rect fill="#ffedd5" height="30" rx="15" width="332" x="214" y="304" /><text fill="#9a3412" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="380" y="324">Choose the most selective applicable path</text>
    </svg>
  );
}

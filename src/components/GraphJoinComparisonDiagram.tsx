export default function GraphJoinComparisonDiagram() {
  return (
    <svg aria-labelledby="graph-compare-title graph-compare-desc" role="img" viewBox="0 0 820 380" width="100%" style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "820px" }} xmlns="http://www.w3.org/2000/svg">
      <title id="graph-compare-title">Graph traversal versus traditional JOIN</title>
      <desc id="graph-compare-desc">Left: traditional SQL with four JOIN hops. Right: one AxonQL graph traversal selecting user record ids.</desc>
      <defs>
        <linearGradient id="gc-bg" x1="0" x2="1"><stop stopColor="#0a1b38" /><stop offset="1" stopColor="#162854" /></linearGradient>
        <marker id="gc-join" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#f43f5e" /></marker>
        <marker id="gc-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#2dd4bf" /></marker>
      </defs>
      <rect fill="url(#gc-bg)" height="380" rx="20" width="820" />
      <text fill="#90a1c5" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" fontWeight="700" letterSpacing="1.6" x="34" y="40">GRAPH TRAVERSAL</text>
      <line x1="405" x2="405" stroke="#33457a" strokeWidth="1" y1="62" y2="330" strokeDasharray="6 5" />

      { /* Left side - Traditional SQL JOIN */ }
      <text fill="#fb7185" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="700" textAnchor="middle" x="205" y="72">Traditional SQL JOIN</text>

      <g fontFamily="ui-monospace, SFMono-Regular, monospace">
        <rect fill="#1e1a3a" height="36" rx="6" stroke="#f43f5e" strokeWidth="1.5" width="100" x="40" y="95" />
        <text fill="#fecdd3" fontSize="11" fontWeight="700" textAnchor="middle" x="90" y="117">users u1</text>

        <path d="M140 113h22" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#gc-join)" />
        <rect fill="#1e1a3a" height="36" rx="6" stroke="#f43f5e" strokeWidth="1.5" width="118" x="162" y="95" />
        <text fill="#fecdd3" fontSize="11" textAnchor="middle" x="221" y="117">JOIN friends f1</text>

        <path d="M280 113h22" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#gc-join)" />
        <rect fill="#1e1a3a" height="36" rx="6" stroke="#f43f5e" strokeWidth="1.5" width="118" x="302" y="95" />
        <text fill="#fecdd3" fontSize="11" textAnchor="middle" x="361" y="117">JOIN friends f2</text>
      </g>

      <path d="M361 131v25s0 14 14 14" stroke="#f43f5e" strokeWidth="2" fill="none" markerEnd="url(#gc-join)" />
      <rect fill="#1e1a3a" height="36" rx="6" stroke="#f43f5e" strokeWidth="1.5" width="100" x="255" y="175" />
      <text fill="#fecdd3" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, monospace" fontWeight="700" textAnchor="middle" x="305" y="197">JOIN users u3</text>

      <rect fill="#1e1a3a" height="28" rx="14" stroke="#fb7185" strokeWidth="1" width="240" x="85" y="233" />
      <text fill="#fda4af" fontSize="10" fontFamily="ui-sans-serif, system-ui" textAnchor="middle" x="205" y="252">WHERE u1.id = 1 AND u3.id != f1.user_id</text>

      <text fill="#fb7185" fontSize="10" fontFamily="ui-monospace, SFMono-Regular, monospace" textAnchor="middle" x="205" y="290">4 JOINs junction-table · sub-query</text>

      { /* Right side - AxonQL graph path */ }
      <text fill="#2dd4bf" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="700" textAnchor="middle" x="615" y="72">AxonQL graph traversal</text>

      <circle cx="530" cy="160" fill="#134e4a" r="40" stroke="#2dd4bf" strokeWidth="2" />
      <text fill="#ccfbf1" fontSize="14" fontFamily="ui-sans-serif, system-ui" fontWeight="700" textAnchor="middle" x="530" y="156">Alice</text>
      <text fill="#99f6e4" fontSize="8" fontFamily="ui-monospace, SFMono-Regular, monospace" textAnchor="middle" x="530" y="172">user:1</text>

      <path d="M570 160h22" stroke="#2dd4bf" strokeWidth="3" markerEnd="url(#gc-arrow)" />
      <rect fill="#134e4a" height="36" rx="6" stroke="#2dd4bf" strokeWidth="1.5" width="92" x="592" y="142" />
      <text fill="#ccfbf1" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, monospace" fontWeight="700" textAnchor="middle" x="638" y="164">{'->friend'}</text>

      <path d="M570 200h30s16 0 16-16l16-16" stroke="#2dd4bf" strokeWidth="2" fill="none" markerEnd="url(#gc-arrow)" strokeDasharray="6 3" />

      <rect fill="#0d3b3a" height="30" rx="6" stroke="#2dd4bf" strokeWidth="1" width="120" x="520" y="244" />
      <text fill="#ccfbf1" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, monospace" textAnchor="middle" x="580" y="263">Result: ["user:2","user:3"]</text>

      <text fill="#2dd4bf" fontSize="10" fontFamily="ui-monospace, SFMono-Regular, monospace" textAnchor="middle" x="615" y="298">{'SELECT VALUE ->friend->user FROM user:1'}</text>

      <rect fill="#172853" height="36" rx="18" width="296" x="262" y="326" />
      <text fill="#c7d2fe" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="700" textAnchor="middle" x="410" y="349">One traversal, no JOINs, instant results</text>
    </svg>
  );
}
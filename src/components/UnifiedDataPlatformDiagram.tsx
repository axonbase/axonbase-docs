export default function UnifiedDataPlatformDiagram() {
  return (
    <svg aria-labelledby="unified-platform-title unified-platform-description" role="img" viewBox="0 0 860 440" width="100%" style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "860px" }} xmlns="http://www.w3.org/2000/svg">
      <title id="unified-platform-title">Unified data platform</title>
       <desc id="unified-platform-description">Full-text search, vector database, geo search, and graph database capabilities converge in AxonBase, which serves a single application.</desc>
      <defs>
        <linearGradient id="udp-background" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#08152f" /><stop offset="1" stopColor="#162454" /></linearGradient>
        <linearGradient id="udp-core" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#5b21b6" /><stop offset="1" stopColor="#06b6d4" /></linearGradient>
        <filter id="udp-glow" height="160%" width="160%" x="-30%" y="-30%"><feGaussianBlur stdDeviation="10" /></filter>
        <marker id="udp-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#22d3ee" /></marker>
      </defs>
      <rect fill="url(#udp-background)" height="440" rx="24" width="860" />
      <path d="M34 72H826M34 382H826" stroke="#334879" strokeWidth="1" />
      <text fill="#8ba4d8" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" fontWeight="700" letterSpacing="1.8" x="44" y="52">UNIFIED DATA PLATFORM</text>
      <text fill="#8ba4d8" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" letterSpacing="1.3" x="44" y="405">ONE QUERY SURFACE. SPECIALIZED DATA ACCESS.</text>
      <circle cx="480" cy="220" fill="#22d3ee" opacity=".15" r="105" filter="url(#udp-glow)" />
      <g fill="none" markerEnd="url(#udp-arrow)" stroke="#22d3ee" strokeLinecap="round" strokeWidth="2.5">
        <path d="M222 126H304Q328 126 344 150L377 198" /><path d="M222 202H362" /><path d="M222 278H304Q328 278 344 254L377 222" /><path d="M222 354H304Q328 354 344 290L377 242" /><path d="M585 220H665" />
      </g>
      <g fontFamily="ui-sans-serif, system-ui">
        <rect fill="#101f45" height="52" rx="10" stroke="#385180" width="210" x="28" y="100" /><circle cx="54" cy="126" fill="#7185ae" r="7" /><text fill="#e4edff" fontSize="15" fontWeight="700" x="74" y="131">Full-Text Search</text>
        <rect fill="#101f45" height="52" rx="10" stroke="#385180" width="210" x="28" y="176" /><circle cx="54" cy="202" fill="#9c7cff" r="7" /><text fill="#e4edff" fontSize="15" fontWeight="700" x="74" y="207">Vector Database</text>
        <rect fill="#101f45" height="52" rx="10" stroke="#385180" width="210" x="28" y="252" /><circle cx="54" cy="278" fill="#22d3ee" r="7" /><text fill="#e4edff" fontSize="15" fontWeight="700" x="74" y="283">Geo Search</text>
        <rect fill="#101f45" height="52" rx="10" stroke="#385180" width="210" x="28" y="328" /><circle cx="54" cy="354" fill="#57e3b3" r="7" /><text fill="#e4edff" fontSize="15" fontWeight="700" x="74" y="359">Graph Database</text>
      </g>
      <rect fill="url(#udp-core)" height="154" rx="24" stroke="#a5f3fc" strokeOpacity=".7" strokeWidth="2" width="208" x="377" y="143" />
      <path d="M454 185h54M454 202h54M454 219h38" stroke="#dffbff" strokeLinecap="round" strokeWidth="4" /><circle cx="432" cy="185" fill="#dffbff" r="4" /><circle cx="432" cy="202" fill="#dffbff" r="4" /><circle cx="432" cy="219" fill="#dffbff" r="4" />
      <text fill="white" fontFamily="ui-sans-serif, system-ui" fontSize="25" fontWeight="800" textAnchor="middle" x="481" y="252">AxonBase</text>
      <text fill="#dffbff" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" letterSpacing="1" textAnchor="middle" x="481" y="273">AXONQL</text>
      <rect fill="#0d2c51" height="98" rx="16" stroke="#22d3ee" strokeWidth="2" width="150" x="665" y="171" />
      <rect fill="#163e68" height="18" rx="4" width="98" x="691" y="191" /><path d="M718 245h44M740 222v46" stroke="#67e8f9" strokeLinecap="round" strokeWidth="3" />
      <text fill="#e6fbff" fontFamily="ui-sans-serif, system-ui" fontSize="15" fontWeight="700" textAnchor="middle" x="740" y="289">Application</text>
    </svg>
  );
}

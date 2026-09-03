export default function RaftClusterDiagram() {
  return (
    <svg
      aria-labelledby="raft-cluster-title raft-cluster-description"
      role="img"
      viewBox="0 0 760 270"
      width="100%"
      style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "760px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="raft-cluster-title">Three-node Raft cluster quorum</title>
      <desc id="raft-cluster-description">A leader replicates a committed log entry to two follower nodes. Two of three nodes form a quorum.</desc>
      <defs>
        <marker id="raft-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#0ea5e9" /></marker>
      </defs>
      <rect fill="#f8fafc" height="270" rx="20" width="760" />
      <text fill="#64748b" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" letterSpacing="1.6" x="38" y="43">RAFT CONSENSUS</text>
      <circle cx="380" cy="157" fill="none" r="125" stroke="#bae6fd" strokeDasharray="5 9" strokeWidth="2" />
      <path d="M310 146 222 116M450 146l88-30" fill="none" markerEnd="url(#raft-arrow)" stroke="#0ea5e9" strokeWidth="2.5" />
      <rect fill="#0c4a6e" height="102" rx="16" width="150" x="305" y="116" />
      <circle cx="341" cy="151" fill="#38bdf8" r="14" />
      <path d="M341 143v16M333 151h16" stroke="#082f49" strokeLinecap="round" strokeWidth="2.5" />
      <text fill="white" fontFamily="ui-sans-serif, system-ui" fontSize="16" fontWeight="700" x="365" y="157">Node A</text>
      <text fill="#7dd3fc" fontFamily="ui-sans-serif, system-ui" fontSize="12" x="327" y="190">LEADER</text>
      <rect fill="white" height="82" rx="14" stroke="#cbd5e1" strokeWidth="2" width="150" x="72" y="70" />
      <text fill="#0f172a" fontFamily="ui-sans-serif, system-ui" fontSize="16" fontWeight="700" x="96" y="105">Node B</text>
      <text fill="#475569" fontFamily="ui-sans-serif, system-ui" fontSize="12" x="96" y="128">FOLLOWER</text>
      <circle cx="190" cy="96" fill="#34d399" r="7" />
      <rect fill="white" height="82" rx="14" stroke="#cbd5e1" strokeWidth="2" width="150" x="538" y="70" />
      <text fill="#0f172a" fontFamily="ui-sans-serif, system-ui" fontSize="16" fontWeight="700" x="562" y="105">Node C</text>
      <text fill="#475569" fontFamily="ui-sans-serif, system-ui" fontSize="12" x="562" y="128">FOLLOWER</text>
      <circle cx="656" cy="96" fill="#34d399" r="7" />
      <rect fill="#d1fae5" height="30" rx="15" width="158" x="301" y="55" />
      <text fill="#047857" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="380" y="75">QUORUM: 2 OF 3</text>
    </svg>
  );
}

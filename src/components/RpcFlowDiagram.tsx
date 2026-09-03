export default function RpcFlowDiagram() {
  return (
    <svg aria-labelledby="rpc-flow-title rpc-flow-description" role="img" viewBox="0 0 760 290" width="100%" style={{ display: "block", height: "auto", margin: "1.75rem 0" }} xmlns="http://www.w3.org/2000/svg">
      <title id="rpc-flow-title">RPC request, response, and session flow</title>
      <desc id="rpc-flow-description">A client opens a session with AxonBase, sends an RPC request, receives a response, and can keep the session alive for subsequent calls.</desc>
      <defs>
        <linearGradient id="rpc-flow-surface" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f8fbff" /><stop offset="1" stopColor="#f4f3ff" /></linearGradient>
        <linearGradient id="rpc-flow-core" x1="0" x2="1"><stop stopColor="#635bff" /><stop offset="1" stopColor="#463eb7" /></linearGradient>
        <marker id="rpc-flow-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#635bff" /></marker>
        <marker id="rpc-flow-return" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#16806d" /></marker>
      </defs>
      <rect width="760" height="290" rx="20" fill="url(#rpc-flow-surface)" />
      <path d="M44 72H716M44 218H716" stroke="#dbe6f0" strokeDasharray="4 8" />
      <text x="40" y="42" fill="#635bff" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="1.8">RPC SESSION / REQUEST RESPONSE</text>
      <g transform="translate(54 100)"><rect width="144" height="86" rx="14" fill="#fff" stroke="#cbd9e7" strokeWidth="2" /><path d="M47 34h36v24H47zM56 66h18" fill="none" stroke="#486581" strokeLinecap="round" strokeWidth="2.5" /><text x="72" y="72" fill="#102a43" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="750" textAnchor="middle">Client</text></g>
      <g transform="translate(308 87)"><rect width="144" height="112" rx="16" fill="url(#rpc-flow-core)" /><path d="M45 39h54M45 55h39M45 71h51" stroke="#dcd9ff" strokeLinecap="round" strokeWidth="3" /><text x="72" y="92" fill="#fff" fontFamily="ui-sans-serif, system-ui" fontSize="15" fontWeight="800" textAnchor="middle">AxonBase</text></g>
      <g transform="translate(562 100)"><rect width="144" height="86" rx="14" fill="#fff" stroke="#b9e7d6" strokeWidth="2" /><ellipse cx="72" cy="33" rx="24" ry="8" fill="#d8f6e9" stroke="#16806d" strokeWidth="2" /><path d="M48 33v25c0 11 48 11 48 0V33" fill="#c4efdc" stroke="#16806d" strokeWidth="2" /><text x="72" y="76" fill="#102a43" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="750" textAnchor="middle">Data store</text></g>
      <path d="M198 124H307" fill="none" markerEnd="url(#rpc-flow-arrow)" stroke="#635bff" strokeWidth="2.5" /><text x="253" y="114" fill="#5046cf" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" fontWeight="700" textAnchor="middle">REQUEST</text>
      <path d="M307 164H198" fill="none" markerEnd="url(#rpc-flow-return)" stroke="#16806d" strokeWidth="2.5" /><text x="253" y="182" fill="#12715f" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" fontWeight="700" textAnchor="middle">RESPONSE</text>
      <path d="M452 143H561" fill="none" markerEnd="url(#rpc-flow-arrow)" stroke="#635bff" strokeWidth="2.5" /><path d="M562 173H453" fill="none" markerEnd="url(#rpc-flow-return)" stroke="#16806d" strokeWidth="2.5" />
      <path d="M126 218v27c0 12 15 18 29 18h450c14 0 29-6 29-18v-27" fill="none" stroke="#829ab1" strokeDasharray="5 5" strokeWidth="2" /><rect x="284" y="246" width="192" height="28" rx="14" fill="#e9e7ff" /><text x="380" y="265" fill="#5046cf" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" fontWeight="700" textAnchor="middle">PERSISTENT SESSION</text>
    </svg>
  );
}

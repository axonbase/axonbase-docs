export default function ColumnarIndexDiagram() {
  return (
    <svg aria-labelledby="col-title col-desc" role="img" viewBox="0 0 820 480" width="100%" style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "820px" }} xmlns="http://www.w3.org/2000/svg">
      <title id="col-title">Columnar index architecture</title>
      <desc id="col-desc">Columnar index stores each column separately with sortable encoding for fast aggregation.</desc>
      <defs>
        <linearGradient id="bg" x1="0" x2="1"><stop stopColor="#071b36" /><stop offset="1" stopColor="#122a57" /></linearGradient>
        <linearGradient id="colg" x1="0" x2="1"><stop stopColor="#0d3b4c" /><stop offset="1" stopColor="#0a2d3a" /></linearGradient>
        <marker id="ar" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#2dd4bf" /></marker>
        <marker id="ar2" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#f59e0b" /></marker>
      </defs>
      <rect fill="url(#bg)" height="480" rx="22" width="820" />
      <text fill="#91a9d5" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="700" letterSpacing="1.7" x="36" y="43">COLUMNAR INDEX</text>

      <text fill="#fbbf24" fontFamily="ui-monospace, monospace" fontSize="11" fontWeight="600" letterSpacing="1" x="40" y="80">ROW-ORIENTED STORAGE (KV)</text>

      <rect fill="#1e293b" height="28" rx="6" stroke="#475569" strokeWidth="1.5" width="740" x="40" y="90" />
      <text fill="#94a3b8" fontFamily="ui-monospace, monospace" fontSize="11" x="52" y="109">doc:0001</text>
      <text fill="#e2e8f0" fontFamily="ui-monospace, monospace" fontSize="11" x="150" y="109">{'{'}"name":"Ana","age":30,"city":"SP","email":"ana@"{'}'}</text>

      <rect fill="#1e293b" height="28" rx="6" stroke="#475569" strokeWidth="1.5" width="740" x="40" y="124" />
      <text fill="#94a3b8" fontFamily="ui-monospace, monospace" fontSize="11" x="52" y="143">doc:0002</text>
      <text fill="#e2e8f0" fontFamily="ui-monospace, monospace" fontSize="11" x="150" y="143">{'{'}"name":"Bob","age":25,"city":"RJ","email":"bob@"{'}'}</text>

      <rect fill="#1e293b" height="28" rx="6" stroke="#475569" strokeWidth="1.5" width="740" x="40" y="158" />
      <text fill="#94a3b8" fontFamily="ui-monospace, monospace" fontSize="11" x="52" y="177">doc:0003</text>
      <text fill="#e2e8f0" fontFamily="ui-monospace, monospace" fontSize="11" x="150" y="177">{'{'}"name":"Eve","age":35,"city":"BH","email":"eve@"{'}'}</text>

      <path d="M720 186V268" fill="none" markerEnd="url(#ar2)" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4,3" />

      <text fill="#2dd4bf" fontFamily="ui-monospace, monospace" fontSize="11" fontWeight="600" letterSpacing="1" x="40" y="236">COLUMNAR INDEX (CI| prefix)</text>

      <rect fill="url(#colg)" height="28" rx="6" stroke="#2dd4bf" strokeWidth="1.5" width="360" x="40" y="248" />
      <text fill="#99f6e4" fontFamily="ui-monospace, monospace" fontSize="10" x="48" y="267">CI|test|dev|users|age_idx|age|T2[30..]n0001</text>

      <rect fill="url(#colg)" height="28" rx="6" stroke="#2dd4bf" strokeWidth="1.5" width="360" x="40" y="280" />
      <text fill="#99f6e4" fontFamily="ui-monospace, monospace" fontSize="10" x="48" y="299">CI|test|dev|users|age_idx|age|T2[25..]n0002</text>

      <rect fill="url(#colg)" height="28" rx="6" stroke="#2dd4bf" strokeWidth="1.5" width="360" x="40" y="312" />
      <text fill="#99f6e4" fontFamily="ui-monospace, monospace" fontSize="10" x="48" y="331">CI|test|dev|users|age_idx|age|T2[35..]n0003</text>

      <rect fill="#2e1a0a" height="68" rx="10" stroke="#f59e0b" strokeWidth="1.5" width="340" x="430" y="250" />
      <text fill="#fbbf24" fontFamily="ui-monospace, monospace" fontSize="10" x="443" y="272">SORTABLE ENCODING</text>
      <text fill="#fde68a" fontFamily="ui-monospace, monospace" fontSize="10" x="443" y="292">TYPE byte + XOR MIN_VALUE long</text>
      <text fill="#fde68a" fontFamily="ui-monospace, monospace" fontSize="10" x="443" y="310">Lexicographic order = numeric order</text>

      <rect fill="url(#colg)" height="82" rx="10" stroke="#2dd4bf" strokeWidth="1.5" width="340" x="430" y="340" />
      <text fill="#2dd4bf" fontFamily="ui-monospace, monospace" fontSize="10" fontWeight="700" x="443" y="362">AGGREGATION</text>
      <text fill="#99f6e4" fontFamily="ui-monospace, monospace" fontSize="11" x="443" y="382">SELECT count(), sum(age)</text>
      <text fill="#99f6e4" fontFamily="ui-monospace, monospace" fontSize="11" x="443" y="400">FROM users;</text>
      <text fill="#ccfbf1" fontFamily="ui-monospace, monospace" fontSize="9" x="443" y="416">Only scans CI|age prefix, no JSON decode</text>
    </svg>
  );
}
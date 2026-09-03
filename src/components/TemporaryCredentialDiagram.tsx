export default function TemporaryCredentialDiagram() {
  return (
    <svg
      aria-labelledby="temporary-credential-title temporary-credential-description"
      role="img"
      viewBox="0 0 900 330"
      width="100%"
      style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "900px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="temporary-credential-title">Temporary credential sign-in flow</title>
      <desc id="temporary-credential-description">
        A client certificate is selected in the browser, proven to AxonBase, exchanged for a temporary axontc credential, used by DataGrip to sign in through JDBC, and kept in a JWT-bound WebSocket session.
      </desc>
      <defs>
        <linearGradient id="temporary-surface" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f8fafc" /><stop offset="1" stopColor="#f4f3ff" /></linearGradient>
        <linearGradient id="temporary-credential" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#635bff" /><stop offset="1" stopColor="#463eb7" /></linearGradient>
        <marker id="temporary-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#635bff" /></marker>
      </defs>
      <rect fill="url(#temporary-surface)" height="330" rx="20" width="900" />
      <text fill="#5046cf" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="1.8" x="40" y="42">CERTIFICATE PROOF TO JDBC SESSION</text>
      <path d="M143 157H212M329 157H398M516 157H585M702 157H771" fill="none" markerEnd="url(#temporary-arrow)" stroke="#8b84ff" strokeWidth="2.5" />
      <g transform="translate(40 99)">
        <rect fill="#fff" height="116" rx="15" stroke="#cbd9e7" strokeWidth="2" width="103" />
        <path d="M36 27h30l10 10v42H36zM66 27v12h10M44 53h24M44 65h18" fill="none" stroke="#486581" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <text fill="#102a43" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="800" textAnchor="middle" x="52" y="90">CLIENT CERT</text>
        <text fill="#486581" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="9" textAnchor="middle" x="52" y="105">PRIVATE KEY</text>
      </g>
      <g transform="translate(212 87)">
        <rect fill="#e0f2fe" height="140" rx="17" stroke="#7dd3fc" strokeWidth="2" width="117" />
        <rect fill="#fff" height="47" rx="6" stroke="#38bdf8" strokeWidth="2" width="65" x="26" y="24" /><circle cx="35" cy="34" fill="#38bdf8" r="3" /><path d="M32 45h53M32 54h36" stroke="#7dd3fc" strokeLinecap="round" strokeWidth="2" />
        <text fill="#0c4a6e" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="800" textAnchor="middle" x="59" y="98">BROWSER</text>
        <text fill="#0369a1" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="9" fontWeight="700" textAnchor="middle" x="59" y="115">CERTIFICATE PROOF</text>
      </g>
      <g transform="translate(398 87)">
        <rect fill="url(#temporary-credential)" height="140" rx="17" width="118" />
        <path d="M39 27h40v49H39zM47 40h24M47 51h24M47 62h16" fill="none" stroke="#dcd9ff" strokeLinecap="round" strokeWidth="2.5" />
        <text fill="#fff" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="800" textAnchor="middle" x="59" y="99">axontc</text>
        <text fill="#dcd9ff" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="9" fontWeight="700" textAnchor="middle" x="59" y="116">TEMPORARY CREDENTIAL</text>
      </g>
      <g transform="translate(585 87)">
        <rect fill="#fff" height="140" rx="17" stroke="#cbd9e7" strokeWidth="2" width="117" />
        <path d="M31 27h55v39H31zM38 38h41M38 47h24" fill="none" stroke="#486581" strokeLinecap="round" strokeWidth="2.5" /><circle cx="50" cy="86" fill="#e9e7ff" r="16" /><path d="M43 86h14M50 79v14" stroke="#5046cf" strokeLinecap="round" strokeWidth="2.5" />
        <text fill="#102a43" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="800" textAnchor="middle" x="59" y="117">DATAGRIP JDBC</text>
      </g>
      <g transform="translate(771 87)">
        <rect fill="#ecfdf5" height="140" rx="17" stroke="#6ee7b7" strokeWidth="2" width="89" />
        <path d="M27 43c0-14 35-14 35 0s-35 14-35 28 35 14 35 0" fill="none" stroke="#16806d" strokeWidth="3" /><circle cx="45" cy="43" fill="#16806d" r="4" /><circle cx="45" cy="71" fill="#16806d" r="4" />
        <text fill="#14532d" fontFamily="ui-sans-serif, system-ui" fontSize="11" fontWeight="800" textAnchor="middle" x="45" y="104">JWT-BOUND</text>
        <text fill="#16806d" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="9" fontWeight="700" textAnchor="middle" x="45" y="120">WEBSOCKET</text>
      </g>
      <path d="M816 254v16c0 12-12 19-25 19H109c-13 0-25-7-25-19v-16" fill="none" stroke="#94a3b8" strokeDasharray="5 7" strokeWidth="2" />
      <text fill="#486581" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="450" y="310">Certificate proof creates a short-lived, session-bound database sign-in.</text>
    </svg>
  );
}

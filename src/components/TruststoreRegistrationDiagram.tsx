export default function TruststoreRegistrationDiagram() {
  return (
    <svg
      aria-labelledby="truststore-registration-title truststore-registration-description"
      role="img"
      viewBox="0 0 900 330"
      width="100%"
      style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "900px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="truststore-registration-title">Truststore registration flow</title>
      <desc id="truststore-registration-description">
        A root certificate is imported into a JKS truststore, held in memory by AxonBase, and used by OID or ICPBRASIL collectors before the collected identity is bound to a user.
      </desc>
      <defs>
        <linearGradient id="truststore-surface" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f7fbff" /><stop offset="1" stopColor="#f1f8f5" /></linearGradient>
        <linearGradient id="truststore-core" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#163f62" /><stop offset="1" stopColor="#0d3155" /></linearGradient>
        <marker id="truststore-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#16806d" /></marker>
      </defs>
      <rect fill="url(#truststore-surface)" height="330" rx="20" width="900" />
      <text fill="#16806d" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="1.8" x="40" y="42">TRUSTSTORE TO IDENTITY BINDING</text>
      <path d="M133 157H212M303 157H382M473 157H552M660 157H739" fill="none" markerEnd="url(#truststore-arrow)" stroke="#54a98f" strokeWidth="2.5" />
      <g transform="translate(40 99)">
        <rect fill="#fff" height="116" rx="15" stroke="#b7dbe9" strokeWidth="2" width="93" />
        <path d="M31 27h31l11 11v43H31zM62 27v12h11M39 55h25M39 66h19" fill="none" stroke="#267da8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <text fill="#102a43" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="800" textAnchor="middle" x="47" y="90">ROOT</text>
        <text fill="#486581" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="9" textAnchor="middle" x="47" y="105">CA CERTIFICATE</text>
      </g>
      <g transform="translate(212 99)">
        <rect fill="#e0f2fe" height="116" rx="15" stroke="#7dd3fc" strokeWidth="2" width="91" />
        <path d="M28 31h35v20H28zM35 38h21M31 67h29M31 77h22" fill="none" stroke="#0369a1" strokeLinecap="round" strokeWidth="2.5" />
        <text fill="#0c4a6e" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="800" textAnchor="middle" x="46" y="91">CREATE JKS</text>
        <text fill="#0369a1" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="9" textAnchor="middle" x="46" y="106">TRUSTSTORE</text>
      </g>
      <g transform="translate(382 87)">
        <rect fill="url(#truststore-core)" height="140" rx="17" width="91" />
        <path d="M29 37h34v43H29zM36 47h20M36 58h20M36 69h13" fill="none" stroke="#a9e9d0" strokeLinecap="round" strokeWidth="2.5" />
        <text fill="#fff" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="800" textAnchor="middle" x="46" y="105">JKS</text>
        <text fill="#d5efff" fontFamily="ui-sans-serif, system-ui" fontSize="11" fontWeight="700" textAnchor="middle" x="46" y="121">IN MEMORY</text>
      </g>
      <g transform="translate(552 87)">
        <rect fill="#ecfdf5" height="140" rx="17" stroke="#6ee7b7" strokeWidth="2" width="108" />
        <circle cx="54" cy="43" fill="#d1fae5" r="22" stroke="#16806d" strokeWidth="2" />
        <path d="M45 43h18M54 34v18" stroke="#16806d" strokeLinecap="round" strokeWidth="2.5" />
        <text fill="#14532d" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="800" textAnchor="middle" x="54" y="92">OID / ICPBRASIL</text>
        <text fill="#16806d" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="9" fontWeight="700" textAnchor="middle" x="54" y="110">COLLECTOR</text>
        <text fill="#486581" fontFamily="ui-sans-serif, system-ui" fontSize="10" textAnchor="middle" x="54" y="126">extract identity</text>
      </g>
      <g transform="translate(739 99)">
        <rect fill="#f0edff" height="116" rx="15" stroke="#b9b4ff" strokeWidth="2" width="121" />
        <circle cx="42" cy="42" fill="#635bff" r="17" /><path d="M42 35a6 6 0 1 0 0 12 6 6 0 0 0 0-12ZM31 57c3-8 19-8 22 0" fill="none" stroke="white" strokeLinecap="round" strokeWidth="2.5" />
        <text fill="#393285" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="800" textAnchor="middle" x="61" y="89">DEFINE USER</text>
        <text fill="#635bff" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="9" fontWeight="700" textAnchor="middle" x="61" y="105">IDENTITY BINDING</text>
      </g>
      <path d="M87 254v16c0 12 12 19 25 19h684c13 0 25-7 25-19v-16" fill="none" stroke="#94a3b8" strokeDasharray="5 7" strokeWidth="2" />
      <text fill="#486581" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="450" y="310">A verified certificate chain becomes an application identity.</text>
    </svg>
  );
}

export default function CertificateChallengeDiagram() {
  return (
    <svg
      aria-labelledby="certificate-challenge-title certificate-challenge-description"
      role="img"
      viewBox="0 0 760 310"
      width="100%"
      style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "760px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="certificate-challenge-title">Certificate challenge flow</title>
      <desc id="certificate-challenge-description">
        A client requests a certificate challenge from AxonBase, proves control of its private key,
        and receives a signed certificate.
      </desc>
      <defs>
        <linearGradient id="challenge-panel" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#111827" />
          <stop offset="1" stopColor="#1e293b" />
        </linearGradient>
        <marker id="challenge-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
          <path d="M0 0L8 4L0 8Z" fill="#38bdf8" />
        </marker>
      </defs>
      <rect fill="#f8fafc" height="310" rx="20" width="760" />
      <text fill="#64748b" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" letterSpacing="1.6" x="38" y="44">CERTIFICATE ISSUANCE</text>
      <path d="M188 145H287M473 145H572" fill="none" markerEnd="url(#challenge-arrow)" stroke="#38bdf8" strokeDasharray="7 7" strokeWidth="2" />
      <rect fill="url(#challenge-panel)" height="128" rx="16" width="150" x="38" y="82" />
      <circle cx="76" cy="120" fill="#38bdf8" r="18" />
      <path d="M76 109v22M66 120h20" stroke="#082f49" strokeLinecap="round" strokeWidth="3" />
      <text fill="white" fontFamily="ui-sans-serif, system-ui" fontSize="16" fontWeight="700" x="62" y="162">Client</text>
      <text fill="#94a3b8" fontFamily="ui-sans-serif, system-ui" fontSize="12" x="62" y="184">private key</text>
      <rect fill="#e0f2fe" height="128" rx="16" stroke="#7dd3fc" strokeWidth="2" width="186" x="287" y="82" />
      <path d="M343 113l37 16v24c0 25-18 38-37 44-19-6-37-19-37-44v-24l37-16Z" fill="#0ea5e9" />
      <path d="m328 151 10 10 21-24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      <text fill="#0f172a" fontFamily="ui-sans-serif, system-ui" fontSize="16" fontWeight="700" textAnchor="middle" x="380" y="178">AxonBase</text>
      <text fill="#0369a1" fontFamily="ui-sans-serif, system-ui" fontSize="12" textAnchor="middle" x="380" y="197">challenge authority</text>
      <rect fill="#ecfdf5" height="128" rx="16" stroke="#6ee7b7" strokeWidth="2" width="150" x="572" y="82" />
      <path d="M624 113h40v48h-40z" fill="#10b981" rx="4" />
      <path d="M632 129h24M632 138h18" stroke="white" strokeLinecap="round" strokeWidth="3" />
      <text fill="#0f172a" fontFamily="ui-sans-serif, system-ui" fontSize="16" fontWeight="700" x="598" y="178">Signed cert</text>
      <text fill="#047857" fontFamily="ui-sans-serif, system-ui" fontSize="12" x="598" y="197">trusted identity</text>
      <rect fill="#e0f2fe" height="26" rx="13" width="116" x="180" y="225" />
      <text fill="#0369a1" fontFamily="ui-sans-serif, system-ui" fontSize="11" fontWeight="700" textAnchor="middle" x="238" y="242">1. REQUEST</text>
      <rect fill="#e0f2fe" height="26" rx="13" width="176" x="292" y="225" />
      <text fill="#0369a1" fontFamily="ui-sans-serif, system-ui" fontSize="11" fontWeight="700" textAnchor="middle" x="380" y="242">2. SIGN CHALLENGE</text>
      <rect fill="#d1fae5" height="26" rx="13" width="116" x="464" y="225" />
      <text fill="#047857" fontFamily="ui-sans-serif, system-ui" fontSize="11" fontWeight="700" textAnchor="middle" x="522" y="242">3. ISSUE</text>
    </svg>
  );
}

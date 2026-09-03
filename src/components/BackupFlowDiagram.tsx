export default function BackupFlowDiagram() {
  return (
    <figure className="backup-flow-diagram">
      <svg
        aria-labelledby="backup-flow-title backup-flow-description"
        role="img"
        viewBox="0 0 900 340"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="backup-flow-title">Backup lifecycle</title>
        <desc id="backup-flow-description">
          Cluster data and write-ahead logs are collected into a dump, optionally encrypted with AES-256-GCM, stored in S3 or MinIO, retained according to policy, and available for restore.
        </desc>
        <defs>
          <linearGradient id="backup-flow-surface" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#071d35" />
            <stop offset="1" stopColor="#153b62" />
          </linearGradient>
          <linearGradient id="backup-flow-storage" x1="0" x2="1">
            <stop stopColor="#776cff" />
            <stop offset="1" stopColor="#4f46e5" />
          </linearGradient>
          <marker id="backup-flow-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
            <path d="M0 0L8 4L0 8Z" fill="#7dd3fc" />
          </marker>
          <filter id="backup-flow-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur result="blur" stdDeviation="8" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <rect fill="url(#backup-flow-surface)" height="340" rx="22" width="900" />
        <path d="M66 93H834M66 247H834" opacity=".11" stroke="#b9e4ff" strokeDasharray="3 10" />
        <text fill="#8ff5c6" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="2" x="45" y="48">BACKUP LIFECYCLE</text>

        <path d="M168 171H224M334 171H390M500 171H556M666 171H722" fill="none" markerEnd="url(#backup-flow-arrow)" stroke="#7dd3fc" strokeWidth="2.5" />

        <g transform="translate(46 117)">
          <rect fill="#0b2a48" height="108" rx="14" stroke="#3b82b6" strokeOpacity=".72" width="122" />
          <path d="M28 57h17l8-17 13 34 8-17h20" fill="none" stroke="#8ff5c6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <text fill="#ffffff" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="700" textAnchor="middle" x="61" y="89">Cluster + WAL</text>
        </g>

        <g transform="translate(224 117)">
          <rect fill="#123b5f" height="108" rx="14" stroke="#5ca8d8" strokeOpacity=".8" width="110" />
          <path d="M37 31h28l15 15v31H37zM65 31v15h15" fill="none" stroke="#d5efff" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M47 61h23M47 71h23" stroke="#8ff5c6" strokeLinecap="round" strokeWidth="2.5" />
          <text fill="#ffffff" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="700" textAnchor="middle" x="55" y="89">Dump</text>
        </g>

        <g transform="translate(390 117)">
          <rect fill="#173b5a" height="108" rx="14" stroke="#76b9e7" strokeDasharray="5 4" strokeOpacity=".9" width="110" />
          <rect fill="#8ff5c6" height="36" rx="7" width="42" x="34" y="34" />
          <path d="M43 34v-7a12 12 0 0 1 24 0v7" fill="none" stroke="#8ff5c6" strokeWidth="4" />
          <circle cx="55" cy="52" fill="#123b5f" r="4" />
          <text fill="#ffffff" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="700" textAnchor="middle" x="55" y="89">AES-256-GCM</text>
          <text fill="#a9cfe9" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="9" textAnchor="middle" x="55" y="103">OPTIONAL</text>
        </g>

        <g transform="translate(556 117)">
          <rect fill="url(#backup-flow-storage)" filter="url(#backup-flow-glow)" height="108" rx="14" width="110" />
          <path d="M30 60c0-8 7-14 15-14 3-10 13-15 23-11 6 2 10 7 11 13 7 0 12 5 12 12z" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <text fill="#ffffff" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="700" textAnchor="middle" x="55" y="89">S3 / MinIO</text>
        </g>

        <g transform="translate(722 117)">
          <rect fill="#0b2a48" height="108" rx="14" stroke="#3b82b6" strokeOpacity=".72" width="132" />
          <path d="M43 41h45M43 57h45M43 73h28" stroke="#8ff5c6" strokeLinecap="round" strokeWidth="3" />
          <circle cx="34" cy="41" fill="#8ff5c6" r="3" /><circle cx="34" cy="57" fill="#8ff5c6" r="3" /><circle cx="34" cy="73" fill="#8ff5c6" r="3" />
          <text fill="#ffffff" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="700" textAnchor="middle" x="66" y="96">Retention</text>
        </g>

        <path d="M788 225v42H106v-42" fill="none" markerEnd="url(#backup-flow-arrow)" stroke="#8ff5c6" strokeDasharray="5 5" strokeWidth="2" />
        <rect fill="#0f3454" height="35" rx="17.5" stroke="#377fac" width="162" x="369" y="250" />
        <text fill="#d5efff" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="1" textAnchor="middle" x="450" y="272">RESTORE ON DEMAND</text>
      </svg>
      <figcaption>From transaction log to recovery-ready copy.</figcaption>
    </figure>
  );
}

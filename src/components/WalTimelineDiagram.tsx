export default function WalTimelineDiagram() {
  return (
    <svg
      aria-labelledby="wal-timeline-title wal-timeline-description"
      role="img"
      viewBox="0 0 760 290"
      width="100%"
      style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "760px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="wal-timeline-title">Write-ahead log time-travel timeline</title>
      <desc id="wal-timeline-description">A write-ahead log records changes over time. Queries can reconstruct a record at a selected point or compare two points.</desc>
      <defs><marker id="wal-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#64748b" /></marker></defs>
      <rect fill="#f8fafc" height="290" rx="20" width="760" />
      <text fill="#64748b" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" letterSpacing="1.6" x="38" y="43">WRITE-AHEAD LOG</text>
      <path d="M77 154H685" fill="none" markerEnd="url(#wal-arrow)" stroke="#64748b" strokeWidth="3" />
      <path d="M149 154v-25M302 154v-25M456 154v-25M610 154v-25" stroke="#64748b" strokeWidth="2" />
      <circle cx="149" cy="154" fill="#38bdf8" r="11" /><circle cx="302" cy="154" fill="#38bdf8" r="11" /><circle cx="456" cy="154" fill="#f59e0b" r="14" /><circle cx="610" cy="154" fill="#38bdf8" r="11" />
      <rect fill="#e0f2fe" height="46" rx="10" width="116" x="91" y="70" /><text fill="#0369a1" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="149" y="90">09:00</text><text fill="#0369a1" fontFamily="ui-sans-serif, system-ui" fontSize="11" textAnchor="middle" x="149" y="106">INSERT</text>
      <rect fill="#e0f2fe" height="46" rx="10" width="116" x="244" y="70" /><text fill="#0369a1" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="302" y="90">09:15</text><text fill="#0369a1" fontFamily="ui-sans-serif, system-ui" fontSize="11" textAnchor="middle" x="302" y="106">UPDATE</text>
       <rect fill="#fef3c7" height="55" rx="10" width="136" x="388" y="61" /><text fill="#92400e" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="456" y="82">09:30</text><text fill="#92400e" fontFamily="ui-sans-serif, system-ui" fontSize="11" textAnchor="middle" x="456" y="101">AT TARGET</text>
      <rect fill="#e0f2fe" height="46" rx="10" width="116" x="552" y="70" /><text fill="#0369a1" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="610" y="90">09:45</text><text fill="#0369a1" fontFamily="ui-sans-serif, system-ui" fontSize="11" textAnchor="middle" x="610" y="106">DELETE</text>
      <path d="M456 180v25" stroke="#f59e0b" strokeDasharray="4 4" strokeWidth="2" /><rect fill="#fffbeb" height="42" rx="10" stroke="#fcd34d" width="282" x="315" y="207" /><text fill="#92400e" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="456" y="233">RECONSTRUCT RECORD AT 09:30</text>
    </svg>
  );
}

export default function StorageLifecycleDiagram() {
  return (
    <div className="storage-lifecycle-diagram">
      <svg aria-labelledby="storage-lifecycle-title storage-lifecycle-description" role="img" viewBox="0 0 760 390" width="100%" xmlns="http://www.w3.org/2000/svg">
        <title id="storage-lifecycle-title">Storage lifecycle</title>
        <desc id="storage-lifecycle-description">An application write updates the in-memory map, appends to the write-ahead log, and is synced to disk. Snapshot compaction creates a checkpoint, while restart replays the log after that checkpoint.</desc>
        <defs>
          <linearGradient id="storage-surface" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f8fbff" /><stop offset="1" stopColor="#eef6ff" /></linearGradient>
          <linearGradient id="storage-disk" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#192b52" /><stop offset="1" stopColor="#314a7c" /></linearGradient>
          <marker id="storage-flow-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#4c69a8" /></marker>
          <marker id="storage-replay-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#0b8d7b" /></marker>
        </defs>
        <rect fill="url(#storage-surface)" height="390" rx="20" width="760" />
        <path d="M32 218H728" stroke="#d7e4f3" strokeWidth="1" />
        <text fill="#7184a3" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="1.8" x="38" y="42">WRITE PATH</text>
        <text fill="#0b8d7b" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="1.8" x="38" y="250">RECOVERY PATH</text>
        <path d="M164 126H190M314 126H340M464 126H490M614 126H638" fill="none" markerEnd="url(#storage-flow-arrow)" stroke="#4c69a8" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M552 175V201" fill="none" markerEnd="url(#storage-flow-arrow)" stroke="#4c69a8" strokeLinecap="round" strokeWidth="2.5" />
        <rect fill="#fff" height="92" rx="14" stroke="#c8d9ee" strokeWidth="2" width="126" x="38" y="80" />
        <path d="M77 109h27l8 17H85zM89 132h23" fill="#e3edff" stroke="#4969a8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><text fill="#183052" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="700" textAnchor="middle" x="101" y="153">APPLICATION</text>
        <rect fill="#fff" height="92" rx="14" stroke="#c8d9ee" strokeWidth="2" width="126" x="190" y="80" />
        <rect fill="#e6f0ff" height="32" rx="6" width="52" x="227" y="101" /><path d="M237 111h32M237 122h22" stroke="#4969a8" strokeLinecap="round" strokeWidth="2" /><text fill="#183052" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="700" textAnchor="middle" x="253" y="153">IN-MEMORY MAP</text>
        <rect fill="#fff" height="92" rx="14" stroke="#c8d9ee" strokeWidth="2" width="126" x="340" y="80" />
        <path d="M380 102h46v31h-46zM390 111h26M390 120h20" fill="#e6f0ff" stroke="#4969a8" strokeLinejoin="round" strokeWidth="2" /><text fill="#183052" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="700" textAnchor="middle" x="403" y="153">WAL APPEND</text>
        <rect fill="url(#storage-disk)" height="92" rx="14" width="126" x="490" y="80" />
        <ellipse cx="553" cy="108" fill="#94b6ff" rx="27" ry="8" /><path d="M526 108v22c0 5 54 5 54 0v-22" fill="#7297e7" /><ellipse cx="553" cy="130" fill="#8caef5" rx="27" ry="8" /><text fill="#fff" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="14" fontWeight="700" textAnchor="middle" x="553" y="153">fsync()</text>
        <rect fill="#e6fbf5" height="92" rx="14" stroke="#83ddc8" strokeWidth="2" width="84" x="638" y="80" />
        <path d="M663 105h34v38h-34zM672 116h16M672 125h16M672 134h10" fill="#b8f0e2" stroke="#0b8d7b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><text fill="#087565" fontFamily="ui-sans-serif, system-ui" fontSize="9" fontWeight="800" textAnchor="middle" x="680" y="151">SNAPSHOT</text><text fill="#087565" fontFamily="ui-sans-serif, system-ui" fontSize="8" fontWeight="800" textAnchor="middle" x="680" y="163">COMPACTION</text>
        <path d="M680 278C635 278 628 325 570 325H238C187 325 174 294 174 284" fill="none" markerEnd="url(#storage-replay-arrow)" stroke="#0b8d7b" strokeDasharray="5 7" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M552 264v20" fill="none" markerEnd="url(#storage-replay-arrow)" stroke="#0b8d7b" strokeLinecap="round" strokeWidth="2.5" />
        <rect fill="#fff" height="66" rx="12" stroke="#9adfcf" strokeWidth="2" width="126" x="490" y="274" />
        <path d="M523 298a18 18 0 1 0 11-13M531 281l4 6-7 1" fill="none" stroke="#0b8d7b" strokeLinecap="round" strokeWidth="2.5" /><text fill="#087565" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" fontWeight="700" textAnchor="middle" x="564" y="313">RESTART REPLAY</text>
        <rect fill="#e6fbf5" height="28" rx="14" width="180" x="284" y="310" /><text fill="#087565" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" fontWeight="700" letterSpacing=".7" textAnchor="middle" x="374" y="328">SNAPSHOT + WAL TAIL</text>
      </svg>
    </div>
  );
}

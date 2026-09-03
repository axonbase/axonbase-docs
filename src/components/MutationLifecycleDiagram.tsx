export default function MutationLifecycleDiagram() {
  return (
    <svg
      aria-labelledby="mutation-lifecycle-title mutation-lifecycle-description"
      role="img"
      viewBox="0 0 760 290"
      width="100%"
      style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "760px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="mutation-lifecycle-title">Mutation lifecycle</title>
      <desc id="mutation-lifecycle-description">CREATE and UPDATE mutations are validated, applied to indexes, stored, then published to live queries and events.</desc>
      <defs><linearGradient id="mutation-surface" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f8fafc" /><stop offset="1" stopColor="#f5f3ff" /></linearGradient><marker id="mutation-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4"><path d="M0 0L8 4L0 8Z" fill="#7c3aed" /></marker></defs>
      <rect fill="url(#mutation-surface)" height="290" rx="20" width="760" />
      <text fill="#64748b" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="1.7" x="38" y="42">MUTATION LIFECYCLE</text>
      <path d="M166 143h31M318 143h31M501 143h31M650 143h31" fill="none" markerEnd="url(#mutation-arrow)" stroke="#8b5cf6" strokeLinecap="round" strokeWidth="2.5" />
      <rect fill="#fff" height="104" rx="16" stroke="#c4b5fd" strokeWidth="2" width="128" x="38" y="91" /><path d="M69 120h28M83 106v28" stroke="#7c3aed" strokeLinecap="round" strokeWidth="3" /><text fill="#4c1d95" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="13" fontWeight="700" textAnchor="middle" x="102" y="153">CREATE</text><text fill="#4c1d95" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" textAnchor="middle" x="102" y="174">UPDATE</text>
      <rect fill="#fff" height="104" rx="16" stroke="#c4b5fd" strokeWidth="2" width="121" x="197" y="91" /><path d="M231 126l9 9 17-21" fill="none" stroke="#7c3aed" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" /><text fill="#4c1d95" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="700" textAnchor="middle" x="258" y="163">Validation</text><text fill="#7c3aed" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" textAnchor="middle" x="258" y="181">ASSERT / TYPE</text>
      <rect fill="#fff" height="104" rx="16" stroke="#c4b5fd" strokeWidth="2" width="152" x="349" y="91" /><path d="M382 116h34v11h-34zM382 134h34v11h-34zM382 152h34v11h-34z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" /><text fill="#4c1d95" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="700" x="429" y="145">Indexes</text><text fill="#7c3aed" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" x="429" y="164">UNIQUE / SEARCH</text>
      <rect fill="#fff" height="104" rx="16" stroke="#c4b5fd" strokeWidth="2" width="118" x="532" y="91" /><ellipse cx="572" cy="121" fill="#ddd6fe" rx="21" ry="7" /><path d="M551 121v25c0 9 42 9 42 0v-25" fill="#c4b5fd" /><ellipse cx="572" cy="146" fill="#ddd6fe" rx="21" ry="7" /><text fill="#4c1d95" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="700" textAnchor="middle" x="591" y="172">Storage</text>
      <rect fill="#f5f3ff" height="104" rx="16" stroke="#a78bfa" strokeWidth="2" width="50" x="681" y="91" /><path d="M697 122h18M697 135h18M697 148h12" stroke="#7c3aed" strokeLinecap="round" strokeWidth="2" /><text fill="#5b21b6" fontFamily="ui-sans-serif, system-ui" fontSize="9" fontWeight="800" textAnchor="middle" x="706" y="169">LIVE</text><text fill="#5b21b6" fontFamily="ui-sans-serif, system-ui" fontSize="9" fontWeight="800" textAnchor="middle" x="706" y="181">EVENT</text>
      <rect fill="#ede9fe" height="30" rx="15" width="396" x="182" y="226" /><text fill="#5b21b6" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="380" y="246">One mutation, consistent records and notifications</text>
    </svg>
  );
}

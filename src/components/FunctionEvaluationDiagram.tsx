export default function FunctionEvaluationDiagram() {
  return (
    <svg
      aria-labelledby="function-evaluation-title function-evaluation-description"
      role="img"
      viewBox="0 0 900 390"
      width="100%"
      style={{ display: "block", height: "auto", margin: "1.75rem 0", maxWidth: "900px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="function-evaluation-title">AxonQL function evaluation</title>
      <desc id="function-evaluation-description">Arguments and field values enter an AxonQL function namespace. The function returns a typed value that becomes a projected field or contributes to an aggregate result.</desc>
      <defs>
        <linearGradient id="function-evaluation-surface" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#f8fbff" />
          <stop offset="1" stopColor="#f4fffb" />
        </linearGradient>
        <linearGradient id="function-evaluation-function" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#172f5b" />
          <stop offset="1" stopColor="#293a82" />
        </linearGradient>
        <marker id="function-evaluation-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
          <path d="M0 0L8 4L0 8Z" fill="#516d91" />
        </marker>
      </defs>

      <rect fill="url(#function-evaluation-surface)" height="390" rx="22" width="900" />
      <text fill="#627d98" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="1.8" x="42" y="45">FUNCTION EVALUATION</text>

      <g transform="translate(42 83)">
        <rect fill="#fff" height="210" rx="16" stroke="#cbd9e7" strokeWidth="2" width="190" />
        <text fill="#102a43" fontFamily="ui-sans-serif, system-ui" fontSize="15" fontWeight="800" x="22" y="36">Inputs</text>
        <text fill="#627d98" fontFamily="ui-sans-serif, system-ui" fontSize="11" x="22" y="56">arguments or field values</text>
        <rect fill="#eef2ff" height="34" rx="8" width="146" x="22" y="78" />
        <text fill="#45409d" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" fontWeight="700" x="35" y="100">price</text>
        <text fill="#627d98" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" textAnchor="end" x="157" y="100">12.6</text>
        <rect fill="#eefbf7" height="34" rx="8" width="146" x="22" y="122" />
        <text fill="#147461" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" fontWeight="700" x="35" y="144">"hello"</text>
        <text fill="#627d98" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" textAnchor="end" x="157" y="144">literal</text>
        <text fill="#829ab1" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" x="22" y="181">math::round(price)</text>
      </g>

      <path d="M232 188H337" fill="none" markerEnd="url(#function-evaluation-arrow)" stroke="#516d91" strokeLinecap="round" strokeWidth="2.5" />
      <text fill="#829ab1" fontFamily="ui-sans-serif, system-ui" fontSize="11" textAnchor="middle" x="284" y="171">evaluate</text>

      <g transform="translate(337 116)">
        <rect fill="url(#function-evaluation-function)" height="145" rx="18" width="225" />
        <path d="M35 45h23l12 14-12 14H35l-12-14z" fill="none" stroke="#91f2ca" strokeWidth="2.5" />
        <text fill="#fff" fontFamily="ui-sans-serif, system-ui" fontSize="16" fontWeight="800" x="84" y="56">AxonQL function</text>
        <text fill="#bcebdc" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" x="84" y="77">namespace::name</text>
        <rect fill="#ffffff1f" height="30" rx="15" width="172" x="27" y="93" />
        <text fill="#d9fff0" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" textAnchor="middle" x="113" y="113">math::round(...)</text>
      </g>

      <path d="M562 188H643" fill="none" markerEnd="url(#function-evaluation-arrow)" stroke="#516d91" strokeLinecap="round" strokeWidth="2.5" />
      <text fill="#829ab1" fontFamily="ui-sans-serif, system-ui" fontSize="11" textAnchor="middle" x="603" y="171">return</text>

      <g transform="translate(643 83)">
        <rect fill="#fff" height="210" rx="16" stroke="#b9e6d5" strokeWidth="2" width="215" />
        <text fill="#102a43" fontFamily="ui-sans-serif, system-ui" fontSize="15" fontWeight="800" x="22" y="36">Typed value</text>
        <rect fill="#dcf8ea" height="35" rx="8" width="171" x="22" y="56" />
        <text fill="#12715f" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="12" fontWeight="700" x="35" y="78">13</text>
        <text fill="#147461" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" textAnchor="end" x="181" y="78">number</text>
        <path d="M108 101v21M108 122H45v16M108 122h63v16" fill="none" stroke="#75cbb1" strokeWidth="2" />
        <text fill="#102a43" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="45" y="166">Projection</text>
        <text fill="#627d98" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" textAnchor="middle" x="45" y="184">rounded_price</text>
        <text fill="#102a43" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="171" y="166">Aggregate</text>
        <text fill="#627d98" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" textAnchor="middle" x="171" y="184">sum / avg / count</text>
      </g>

      <rect fill="#e8f1fb" height="34" rx="17" width="470" x="215" y="329" />
      <text fill="#365778" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" textAnchor="middle" x="450" y="351">Functions turn values into query-ready results</text>
    </svg>
  );
}

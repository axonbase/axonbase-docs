import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";

import bash from "highlight.js/lib/languages/bash";
import csharp from "highlight.js/lib/languages/csharp";
import css from "highlight.js/lib/languages/css";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import go from "highlight.js/lib/languages/go";
import graphql from "highlight.js/lib/languages/graphql";
import ini from "highlight.js/lib/languages/ini";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import kotlin from "highlight.js/lib/languages/kotlin";
import php from "highlight.js/lib/languages/php";
import properties from "highlight.js/lib/languages/properties";
import python from "highlight.js/lib/languages/python";
import ruby from "highlight.js/lib/languages/ruby";
import rust from "highlight.js/lib/languages/rust";
import sql from "highlight.js/lib/languages/sql";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import yaml from "highlight.js/lib/languages/yaml";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("css", css);
hljs.registerLanguage("dockerfile", dockerfile);
hljs.registerLanguage("go", go);
hljs.registerLanguage("graphql", graphql);
hljs.registerLanguage("ini", ini);
hljs.registerLanguage("java", java);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("kotlin", kotlin);
hljs.registerLanguage("php", php);
hljs.registerLanguage("properties", properties);
hljs.registerLanguage("python", python);
hljs.registerLanguage("ruby", ruby);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("yaml", yaml);

const LANG_MAP: Record<string, string> = {
  text: "plaintext",
  csharp: "csharp",
};

interface Tab {
  label: string;
  code: string;
  language?: string;
}

export default function CodeTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const codeRef = useRef<HTMLElement>(null);
  const id = `code-${tabs[active].label.toLowerCase().replace(/\W+/g, "-")}`;

  useEffect(() => {
    if (codeRef.current) {
      try {
        const lang = LANG_MAP[tabs[active].language ?? ""] ?? tabs[active].language ?? "plaintext";
        const result = hljs.highlight(tabs[active].code, { language: lang, ignoreIllegals: true });
        codeRef.current.className = `hljs language-${lang}`;
        codeRef.current.innerHTML = result.value;
      } catch {
        codeRef.current.className = "hljs";
        codeRef.current.textContent = tabs[active].code;
      }
    }
  }, [active, tabs]);

  return (
    <div className="code-tabs">
      <div className="code-tabs-header" role="tablist" aria-label="Code examples">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            className={`code-tab-btn ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            role="tab"
            aria-selected={i === active}
            aria-controls={id}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div id={id} className="code-tab-content" role="tabpanel">
        <pre><code ref={codeRef} /></pre>
      </div>
    </div>
  );
}
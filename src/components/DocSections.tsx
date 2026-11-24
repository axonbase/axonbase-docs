import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CodeTabs from "./CodeTabs";
import RefTable from "./RefTable";

type Block =
  | { type: "p" | "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; code: string; lang: string }
  | { type: "table"; headers: string[]; rows: string[][] };

type Section = { id: string; title: string; blocks: Block[] };

const LABELS: Record<string, string> = { sql: "SQL", bash: "Bash", json: "JSON" };

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case "p":
      return <p key={key}>{block.text}</p>;
    case "h3":
      return <h3 key={key}>{block.text}</h3>;
    case "ul":
      return (
        <ul key={key}>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "code":
      return <CodeTabs key={key} tabs={[{ label: LABELS[block.lang] ?? block.lang, code: block.code, language: block.lang }]} />;
    case "table":
      return <RefTable key={key} headers={block.headers} rows={block.rows} />;
  }
}

/** Pagina de documentacao montada a partir das chaves `${prefix}_title`, `${prefix}_intro` e `${prefix}_sections`. */
export default function DocSections({ prefix, className }: { prefix: string; className: string }) {
  const { t } = useTranslation();
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);
  const sections = t(`${prefix}_sections`, { returnObjects: true }) as Section[];
  return (
    <div className={`page ${className}`}>
      <h1>{t(`${prefix}_title`)}</h1>
      <p>{t(`${prefix}_intro`)}</p>
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.blocks.map(renderBlock)}
        </section>
      ))}
    </div>
  );
}

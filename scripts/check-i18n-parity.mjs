import { readFileSync } from "node:fs";

const load = (f) => JSON.parse(readFileSync(new URL(`../src/i18n/${f}.json`, import.meta.url), "utf8"));
const en = load("en");
const pt = load("pt-BR");

const walk = (v, prefix, out) => {
  if (Array.isArray(v)) {
    out.push(`${prefix}[${v.length}]`);
    v.forEach((x, i) => walk(x, `${prefix}[${i}]`, out));
  } else if (v && typeof v === "object") {
    for (const k of Object.keys(v)) walk(v[k], prefix ? `${prefix}.${k}` : k, out);
  } else {
    out.push(prefix);
  }
  return out;
};

const a = new Set(walk(en, "", []));
const b = new Set(walk(pt, "", []));
const onlyEn = [...a].filter((k) => !b.has(k));
const onlyPt = [...b].filter((k) => !a.has(k));
if (onlyEn.length || onlyPt.length) {
  console.error("only in en:", onlyEn.slice(0, 20), "\nonly in pt-BR:", onlyPt.slice(0, 20));
  process.exit(1);
}
console.log(`i18n parity ok: ${a.size} paths`);

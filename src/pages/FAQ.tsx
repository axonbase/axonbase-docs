import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = t("faq_items", { returnObjects: true }) as { q: string; a: string }[];
  return (
    <div className="page faq-page">
      <h1>{t("faq_title")}</h1>
      <p>{t("faq_intro")}</p>
      <div className="faq-list">
        {items.map((item, i) => (
          <section key={item.q} className={`faq-item${openIndex === i ? " open" : ""}`}>
            <h2>
              <button type="button" aria-expanded={openIndex === i} onClick={() => setOpenIndex((open) => open === i ? null : i)}>
                <span>{item.q}</span><span className="faq-icon" aria-hidden="true">+</span>
              </button>
            </h2>
            <div className="faq-answer" hidden={openIndex !== i}><p>{item.a}</p></div>
          </section>
        ))}
      </div>
    </div>
  );
}

import { useTranslation } from "react-i18next";

export default function SdkParityDiagram() {
  const { t } = useTranslation();
  const connectors = t("sdk_parity_connectors", { returnObjects: true }) as string[];
  const capabilities = t("sdk_parity_capabilities", { returnObjects: true }) as string[];
  const cols = capabilities.length;
  const cellW = 110;
  const labelW = 220;
  const tableW = labelW + cols * cellW;
  const h = 80 + connectors.length * 43;
  const w = Math.max(tableW + 40, 900);
  return (
    <div style={{ overflowX: "auto", margin: "1.75rem 0" }}>
    <svg aria-labelledby="sdk-parity-title sdk-parity-description" role="img" viewBox={`0 0 ${w} ${h}`} width={w} style={{ display: "block", height: "auto" }} xmlns="http://www.w3.org/2000/svg">
      <title id="sdk-parity-title">{t("sdk_parity_title")}</title>
      <desc id="sdk-parity-description">{t("sdk_parity_desc")}</desc>
      <defs><linearGradient id="sdk-surface" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f8fbff" /><stop offset="1" stopColor="#f7f5ff" /></linearGradient></defs>
      <rect width={w} height={h} rx="20" fill="url(#sdk-surface)" />
      <text x="40" y="42" fill="#635bff" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fontWeight="700" letterSpacing="1.8">{t("sdk_parity_badge")}</text>
      <text x="40" y="84" fill="#486581" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" fontWeight="700">{t("sdk_parity_connector_label")}</text>
      {capabilities.map((item, index) => (
        <text key={item} x={labelW + cellW / 2 + index * cellW} y="84" fill="#486581" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" fontWeight="700" textAnchor="middle">{item.toUpperCase()}</text>
      ))}
      {connectors.map((connector, row) => {
        const y = 104 + row * 43;
        return (
          <g key={connector}>
            <rect x="38" y={y} width={w - 76} height="34" rx="8" fill={row % 2 ? "#fff" : "#f1f5fb"} />
            <text x="58" y={y + 22} fill="#102a43" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="750">{connector}</text>
            {capabilities.map((_, column) => (
              <g key={column} transform={`translate(${labelW + cellW / 2 + column * cellW} ${y + 17})`}>
                <circle r="11" fill="#dcf8ea" />
                <path d="M-5 0l4 4 7-8" fill="none" stroke="#16806d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
              </g>
            ))}
          </g>
        );
      })}
      <rect x={w / 2 - 150} y={h - 38} width="300" height="20" rx="10" fill="#e9e7ff" />
      <text x={w / 2} y={h - 24} fill="#5046cf" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" fontWeight="700" textAnchor="middle">{t("sdk_parity_footer")}</text>
    </svg>
    </div>
  );
}

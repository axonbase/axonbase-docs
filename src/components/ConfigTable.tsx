import { useTranslation } from "react-i18next";

export default function ConfigTable({ configs }: { configs: { key: string; env: string; type: string; default: string; desc: string }[] }) {
  const { t } = useTranslation();
  return (
    <table>
      <thead>
        <tr>
          <th>{t("table_key")}</th>
          <th>Env</th>
          <th>{t("table_type")}</th>
          <th>{t("table_default")}</th>
          <th>{t("table_description")}</th>
        </tr>
      </thead>
      <tbody>
        {configs.map((c) => (
          <tr key={c.key}>
            <td>{c.key}</td>
            <td>{c.env}</td>
            <td>{c.type}</td>
            <td>{c.default}</td>
            <td>{c.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
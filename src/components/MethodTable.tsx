import { useTranslation } from "react-i18next";

export default function MethodTable({ methods }: { methods: { method: string; params: string; returns: string; desc: string }[] }) {
  const { t } = useTranslation();
  return (
    <table>
      <thead>
        <tr>
          <th>{t("table_method")}</th>
          <th>{t("table_params")}</th>
          <th>{t("table_returns")}</th>
          <th>{t("table_description")}</th>
        </tr>
      </thead>
      <tbody>
        {methods.map((m) => (
          <tr key={m.method}>
            <td>{m.method}</td>
            <td>{m.params}</td>
            <td>{m.returns}</td>
            <td>{m.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
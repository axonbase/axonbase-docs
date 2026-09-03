import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import SdkParityDiagram from "../../components/SdkParityDiagram";

export default function Overview() {
  const { t } = useTranslation();
  const sdks = t("sdk_overview_list", { returnObjects: true }) as { name: string; desc: string; install: string }[];
  const parity = t("sdk_overview_parity", { returnObjects: true }) as { feature_key: string; java: string; node: string; python: string; go: string; dotnet: string; rust: string; php: string; ruby: string }[];
  const methodGroups = t("sdk_overview_method_groups", { returnObjects: true }) as { name: string; methods: string; desc: string }[];
  return (
    <div className="page sdk-overview-page">
      <h1>{t("sdk_overview_title")}</h1>
      <p>{t("sdk_overview_intro")}</p>
      <SdkParityDiagram />

      <section>
        <h2>{t("sdk_overview_protocol_title")}</h2>
        <p>{t("sdk_overview_protocol_desc")}</p>
      </section>

      <section>
        <h2>{t("sdk_overview_parity_title")}</h2>
        <p>{t("sdk_overview_parity_desc")}</p>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>{t("sdk_overview_feature")}</th>
                <th>Java</th><th>Node.js</th><th>Python</th><th>Go</th><th>.NET</th><th>Rust</th><th>PHP</th><th>Ruby</th>
              </tr>
            </thead>
            <tbody>
              {parity.map((row, i) => (
                <tr key={i}>
                  <td>{t(row.feature_key)}</td><td>{row.java}</td><td>{row.node}</td><td>{row.python}</td>
                  <td>{row.go}</td><td>{row.dotnet}</td><td>{row.rust}</td>
                  <td>{row.php}</td><td>{row.ruby}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>{t("sdk_overview_method_groups_title")}</h2>
        <p>{t("sdk_overview_method_groups_desc")}</p>
        <table>
          <thead><tr><th>{t("table_name")}</th><th>{t("table_method")}</th><th>{t("table_description")}</th></tr></thead>
          <tbody>
            {methodGroups.map((group, i) => <tr key={i}><td>{group.name}</td><td><code>{group.methods}</code></td><td>{group.desc}</td></tr>)}
          </tbody>
        </table>
      </section>

      <section>
        <h2 id="jdbc">{t("sdk_overview_jdbc_title")}</h2>
        <p>{t("sdk_overview_jdbc_desc")}</p>
        <CodeTabs tabs={[{ label: "JDBC", code: t("sdk_overview_jdbc_code"), language: "java" }]} />
        <p><a href="/jdbc#sql-translate">SQL Translation (sql.translate=true)</a> &mdash; <a href="/jdbc#hibernate">Hibernate Dialect</a></p>
      </section>

      <section><h2>{t("sdk_overview_packages_title")}</h2></section>
      {sdks.map((s, i) => (
        <section key={i}>
          <h2>{s.name}</h2>
          <p>{s.desc}</p>
          <CodeTabs tabs={[{ label: s.name, code: s.install, language: "bash" }]} />
        </section>
      ))}
    </div>
  );
}

import { useTranslation } from "react-i18next";
import CertificateChallengeDiagram from "../components/CertificateChallengeDiagram";
import CodeTabs from "../components/CodeTabs";
import TemporaryCredentialDiagram from "../components/TemporaryCredentialDiagram";
import TruststoreRegistrationDiagram from "../components/TruststoreRegistrationDiagram";

export default function Certificate() {
  const { t } = useTranslation();
  return (
    <div className="page certificate-page">
      <h1>{t("cert_title")}</h1>
      <p>{t("cert_intro")}</p>

      <section>
        <h2>{t("cert_root_title")}</h2>
        <p>{t("cert_root_desc")}</p>
      </section>

      <section>
        <h2>{t("cert_root_flow_title")}</h2>
        <TruststoreRegistrationDiagram />
        <p>{t("cert_root_flow_desc")}</p>
      </section>

      <section>
        <h2>{t("cert_truststore_title")}</h2>
        <p>{t("cert_truststore_desc")}</p>
        <CodeTabs tabs={[{ label: "Bash", code: t("cert_truststore_code"), language: "bash" }]} />
      </section>

      <section>
        <h2>{t("cert_register_title")}</h2>
        <p>{t("cert_register_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("cert_register_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("cert_oid_title")}</h2>
        <p>{t("cert_oid_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("cert_oid_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("cert_icp_title")}</h2>
        <p>{t("cert_icp_desc")}</p>
      </section>

      <section>
        <h2>{t("cert_collector_flow_title")}</h2>
        <p>{t("cert_collector_flow_desc")}</p>
      </section>

      <section>
        <h2>{t("cert_user_title")}</h2>
        <p>{t("cert_user_desc")}</p>
        <CodeTabs tabs={[{ label: "SQL", code: t("cert_user_code"), language: "sql" }]} />
      </section>

      <section>
        <h2>{t("cert_mtls_title")}</h2>
        <p>{t("cert_mtls_desc")}</p>
        <CodeTabs tabs={[{ label: "INI", code: t("cert_mtls_code"), language: "ini" }]} />
      </section>

      <section>
        <h2>{t("cert_proof_title")}</h2>
        <CertificateChallengeDiagram />
        <p>{t("cert_proof_desc")}</p>
        <CodeTabs tabs={[{ label: "JSON-RPC", code: t("cert_proof_code"), language: "json" }]} />
      </section>

      <section>
        <h2>{t("cert_temp_flow_title")}</h2>
        <TemporaryCredentialDiagram />
        <p>{t("cert_temp_flow_desc")}</p>
      </section>

      <section>
        <h2>{t("cert_credential_title")}</h2>
        <p>{t("cert_credential_desc")}</p>
        <CodeTabs tabs={[{ label: "URL", code: t("cert_credential_code"), language: "text" }]} />
      </section>
    </div>
  );
}

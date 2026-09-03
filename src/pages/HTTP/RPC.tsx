import { useTranslation } from "react-i18next";
import CodeTabs from "../../components/CodeTabs";
import MethodTable from "../../components/MethodTable";
import RpcFlowDiagram from "../../components/RpcFlowDiagram";

export default function RPC() {
  const { t } = useTranslation();
  const methods = t("http_rpc_methods", { returnObjects: true }) as { method: string; params: string; returns: string; desc: string }[];
  return (
    <div className="page http-rpc-page">
      <h1>{t("http_rpc_title")}</h1>
      <p>{t("http_rpc_intro")}</p>
      <RpcFlowDiagram />

      <section>
        <h2>{t("http_rpc_methods_title")}</h2>
        <MethodTable methods={methods} />
      </section>

      <section>
        <h2>{t("http_rpc_example_title")}</h2>
        <p>{t("http_rpc_example_desc")}</p>
        <CodeTabs
          tabs={[
            { label: "cURL", code: t("http_rpc_example_curl"), language: "bash" },
            { label: "Java", code: t("http_rpc_example_java"), language: "java" },
            { label: "Node", code: t("http_rpc_example_node"), language: "javascript" },
          ]}
        />
      </section>
    </div>
  );
}

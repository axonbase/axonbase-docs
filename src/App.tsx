import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";
import Installation from "./pages/Installation";
import Configuration from "./pages/Configuration";
import CLI from "./pages/CLI";
import Docker from "./pages/Docker";
import Cluster from "./pages/Cluster";
import Storage from "./pages/Storage";
import Backup from "./pages/Backup";
import Auth from "./pages/Auth";
import Security from "./pages/Security";
import Certificate from "./pages/Certificate";
import DatabaseLink from "./pages/DatabaseLink";
import Saga from "./pages/Saga";
import DataRules from "./pages/DataRules";
import AiAudit from "./pages/AiAudit";
import JDBC from "./pages/JDBC";
import SpringData from "./pages/SpringData";
import Observability from "./pages/Observability";
import UseCases from "./pages/UseCases";
import FAQ from "./pages/FAQ";
import Changelog from "./pages/Changelog";
import About from "./pages/About";
import SQLOverview from "./pages/SQL/Overview";
import SQLDDL from "./pages/SQL/DDL";
import SQLDML from "./pages/SQL/DML";
import SQLDQL from "./pages/SQL/DQL";
import SQLFunctions from "./pages/SQL/Functions";
import SQLOperators from "./pages/SQL/Operators";
import SQLTimeTravel from "./pages/SQL/TimeTravel";
import HTTPOverview from "./pages/HTTP/Overview";
import HTTPRest from "./pages/HTTP/Rest";
import HTTPRPC from "./pages/HTTP/RPC";
import HTTPGraphQL from "./pages/HTTP/GraphQL";
import HTTPMCP from "./pages/HTTP/MCP";
import SDKOverview from "./pages/SDK/Overview";
import SDKJava from "./pages/SDK/Java";
import SDKNode from "./pages/SDK/Node";
import SDKPython from "./pages/SDK/Python";
import SDKGo from "./pages/SDK/Go";
import SDKDotNet from "./pages/SDK/DotNet";
import SDKPhp from "./pages/SDK/Php";
import SDKRuby from "./pages/SDK/Ruby";
import SearchOverview from "./pages/Search/Overview";
import SearchFullText from "./pages/Search/FullText";
import SearchVector from "./pages/Search/Vector";
import SearchGeo from "./pages/Search/Geo";
import SearchGraph from "./pages/Search/Graph";
import SearchColumnar from "./pages/Search/Columnar";
import Rust from "./pages/SDK/Rust";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<Layout />}>
        <Route path="/docs" element={<Home />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/cli" element={<CLI />} />
        <Route path="/docker" element={<Docker />} />
        <Route path="/cluster" element={<Cluster />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/backup" element={<Backup />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/security" element={<Security />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/database-link" element={<DatabaseLink />} />
        <Route path="/saga" element={<Saga />} />
        <Route path="/data-rules" element={<DataRules />} />
        <Route path="/ai-audit" element={<AiAudit />} />
        <Route path="/jdbc" element={<JDBC />} />
        <Route path="/spring-data" element={<SpringData />} />
        <Route path="/observability" element={<Observability />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/about" element={<About />} />
        <Route path="/sql" element={<SQLOverview />} />
        <Route path="/sql/ddl" element={<SQLDDL />} />
        <Route path="/sql/dml" element={<SQLDML />} />
        <Route path="/sql/dql" element={<SQLDQL />} />
        <Route path="/sql/functions" element={<SQLFunctions />} />
        <Route path="/sql/operators" element={<SQLOperators />} />
        <Route path="/sql/time-travel" element={<SQLTimeTravel />} />
        <Route path="/http" element={<HTTPOverview />} />
        <Route path="/http/rest" element={<HTTPRest />} />
        <Route path="/http/rpc" element={<HTTPRPC />} />
        <Route path="/http/graphql" element={<HTTPGraphQL />} />
        <Route path="/http/mcp" element={<HTTPMCP />} />
        <Route path="/sdk" element={<SDKOverview />} />
        <Route path="/sdk/java" element={<SDKJava />} />
        <Route path="/sdk/node" element={<SDKNode />} />
        <Route path="/sdk/python" element={<SDKPython />} />
        <Route path="/sdk/go" element={<SDKGo />} />
        <Route path="/sdk/dotnet" element={<SDKDotNet />} />
        <Route path="/sdk/php" element={<SDKPhp />} />
        <Route path="/sdk/ruby" element={<SDKRuby />} />
        <Route path="/sdk/rust" element={<Rust />} />
        <Route path="/search" element={<SearchOverview />} />
        <Route path="/search/fulltext" element={<SearchFullText />} />
        <Route path="/search/vector" element={<SearchVector />} />
        <Route path="/search/geo" element={<SearchGeo />} />
        <Route path="/search/graph" element={<SearchGraph />} />
        <Route path="/search/columnar" element={<SearchColumnar />} />
      </Route>
    </Routes>
  );
}

export default function ArchitectureDiagram() {
  return (
    <div className="architecture-diagram" aria-label="AxonBase architecture overview">
      <div className="diagram-orbit orbit-one" />
      <div className="diagram-orbit orbit-two" />
      <div className="diagram-core"><span>A</span><small>AXONBASE</small></div>
      <div className="diagram-node node-top">AxonQL</div>
      <div className="diagram-node node-right">Raft</div>
      <div className="diagram-node node-bottom">WAL</div>
      <div className="diagram-node node-left">RPC</div>
      <div className="diagram-caption">One engine. Multiple interfaces.</div>
    </div>
  );
}

export default function SearchDockerCompose() {
  const yaml = `services:
  axonbase:
    image: axonbase:latest
    ports: ["8000:8000"]
    environment:
      AXON_PATH: /data
      AXON_BIND: 0.0.0.0
    volumes: [data:/data]

  # Full-text BM25 search against a SEARCH index
  # CREATE person CONTENT {name: "Alice", bio: "Loves hiking and databases"};
  # DEFINE INDEX person_bio ON TABLE person COLUMNS body SEARCH ANALYZER plain;
  # SELECT * FROM person WHERE bio @@ "hiking";

  # Vector HNSW search against a vector index
  # DEFINE INDEX person_vec ON TABLE person COLUMNS embedding HNSW;
  # SELECT * FROM person ORDER BY vector::distance::cosine(embedding, [0.12, -0.34, 0.56]);

  # Geo search with geo::distance
  # SELECT * FROM restaurant WHERE geo::distance(location, geometry::point(-43.17, -22.91)) < 5000;

  # Graph traversal with RELATE and ->
  # RELATE user:ana->orders->restaurant:marquez;
  # SELECT ->orders->restaurant FROM user:ana;
`;

  return (
    <pre className="code-block"><code>{yaml}</code></pre>
  );
}
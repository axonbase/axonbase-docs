import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const model = "fal-ai/nano-banana-pro";
const outputDirectory = resolve("public/images");
const style = `Create a precise technical documentation diagram on a clean white canvas. Use a black sans-serif typeface, dark teal (#064b5f) rounded outlines, blue input arrows, green safe arrows, amber review arrows, red blocking arrows, and thin consistent strokes. Use a 16:9 landscape composition with generous whitespace. Use only the exact requested text, with no extra labels, no logos, no gradients, no shadows, and no decorative elements.`;

const diagrams = [
  {
    file: "ai-audit-workflow-en.png",
    prompt: `${style}

Title at top: "AI AUDIT".
Top-left: a rounded container titled exactly "AI Provider", with a small card reading "OpenAI\nOllama" and a note below it reading "creation only". A blue arrow to the center is labeled exactly "structured\nrules".
Center: a large rounded container titled exactly "AxonBase Engine". Its upper card reads exactly "Audit Catalog", then "materialized rules", then "no production SQL sent". A blue downward arrow connects it to a lower card titled exactly "Audit Gateway", with the text "inspects and classifies", "DELETE FROM orders", and "local decision".
Bottom-left: a simple outlined user icon in a rounded rectangle, with a label card reading exactly "User\naudit assigned". A blue arrow from it to the Audit Gateway is labeled exactly "SQL command".
Right: three vertically aligned rounded outcome cards connected from the Audit Gateway: green card "SAFE\nruns", amber card "WARNING\nopens a case", and red card "DANGER\nblocks".
Footer centered at the bottom: "AI creates the rules. AxonBase makes every runtime decision."`,
  },
  {
    file: "ai-audit-workflow-pt-br.png",
    prompt: `${style}

Title at top: "AI AUDIT".
Top-left: a rounded container titled exactly "Provedor de IA", with a small card reading "OpenAI\nOllama" and a note below it reading "somente na criação". A blue arrow to the center is labeled exactly "regras\nestruturadas".
Center: a large rounded container titled exactly "Motor AxonBase". Its upper card reads exactly "Catálogo do audit", then "regras materializadas", then "nenhum SQL de produção enviado". A blue downward arrow connects it to a lower card titled exactly "Gateway de auditoria", with the text "inspeciona e classifica", "DELETE FROM orders", and "decisão local".
Bottom-left: a simple outlined user icon in a rounded rectangle, with a label card reading exactly "Usuário\naudit atribuído". A blue arrow from it to the Audit Gateway is labeled exactly "comando SQL".
Right: three vertically aligned white rounded outcome cards connected from the Audit Gateway. The green arrow label is exactly "seguro" and reaches an outlined green card "SEGURO\nexecuta". The amber arrow label is exactly "revisão" and reaches an outlined amber card "AVISO\nabre um caso". The red arrow label is exactly "bloqueio" and reaches an outlined red card "PERIGO\nbloqueia". Do not use colored card backgrounds.
Footer centered at the bottom: "A IA cria as regras. O AxonBase toma cada decisão em tempo de execução."`,
  },
];

if (!process.env.FAL_KEY) {
  throw new Error("FAL_KEY is required to generate diagrams.");
}

async function request(input) {
  const response = await fetch(`https://queue.fal.run/${model}`, {
    method: "POST",
    headers: { Authorization: `Key ${process.env.FAL_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!response.ok) {
    throw new Error(`fal.ai request failed: ${response.status} ${await response.text()}`);
  }
  return response.json();
}

async function waitForResult(requestId) {
  const requestUrl = `https://queue.fal.run/${model}/requests/${requestId}`;
  for (;;) {
    const statusResponse = await fetch(`${requestUrl}/status`, { headers: { Authorization: `Key ${process.env.FAL_KEY}` } });
    if (!statusResponse.ok) {
      throw new Error(`fal.ai status failed: ${statusResponse.status} ${await statusResponse.text()}`);
    }
    const status = await statusResponse.json();
    if (status.status === "COMPLETED") {
      const resultResponse = await fetch(requestUrl, { headers: { Authorization: `Key ${process.env.FAL_KEY}` } });
      if (!resultResponse.ok) {
        throw new Error(`fal.ai result failed: ${resultResponse.status} ${await resultResponse.text()}`);
      }
      return resultResponse.json();
    }
    if (status.status === "FAILED") {
      throw new Error(`fal.ai generation failed: ${JSON.stringify(status)}`);
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 2_000));
  }
}

for (const diagram of diagrams) {
  const queued = await request({ prompt: diagram.prompt, aspect_ratio: "16:9", resolution: "2K", output_format: "png" });
  const result = queued.images ? queued : await waitForResult(queued.request_id);
  const imageUrl = result.images?.[0]?.url;
  if (!imageUrl) {
    throw new Error(`fal.ai returned no image for ${diagram.file}: ${JSON.stringify(result)}`);
  }
  const imageResponse = await fetch(imageUrl);
  if (!imageResponse.ok) {
    throw new Error(`could not download ${diagram.file}: ${imageResponse.status}`);
  }
  await writeFile(resolve(outputDirectory, diagram.file), new Uint8Array(await imageResponse.arrayBuffer()));
  console.log(`Generated ${diagram.file}`);
}

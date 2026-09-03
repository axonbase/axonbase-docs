import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const model = "fal-ai/nano-banana-pro";
const outputDirectory = resolve("public/images");

const style = `Create a precise, polished technical documentation diagram in a clean white canvas. Use a black sans-serif typeface, dark teal (#064b5f) rounded outlines, blue input arrows, green database arrows, and thin, consistent strokes. It must be a 16:9 landscape composition with generous whitespace. Use only the exact requested text, with no extra labels, no logos, no gradients, no shadows, no decorative elements.`;

const diagrams = [
  {
    file: "data-rules-en.png",
    prompt: `${style}

Title at top: "DATA RULES".
Left: a simple outlined user icon in a rounded rectangle, with a small label card reading exactly "DATA RULE\nassigned".
Blue arrow to the center, labeled exactly "SELECT *\nFROM orders".
Center: a large rounded container titled exactly "AxonBase Engine". Inside it, a smaller rounded container with the title "Data Rule region_sp" and two centered lines "predicate" and "sales_rep_id = 165".
Green arrow from the center to a right rounded container titled exactly "Database", containing a small rectangular card reading "orders\ntable". The green arrow label is exactly "WHERE\nsales_rep_id = 165".
Below the engine: a rounded result container titled exactly "Result" and a simple two-column table with rows "order | 100", "cpf: | ***", and "credit_card: | ***".
Footer centered at the bottom: "Predicate is ANDed to every query, sensitive fields are masked."`,
  },
  {
    file: "data-rules-pt-br.png",
    prompt: `${style}

Title at top: "REGRAS DE DADOS".
Left: a simple outlined user icon in a rounded rectangle, with a small label card reading exactly "REGRA DE DADOS\natribuída".
Blue arrow to the center, labeled exactly "SELECT *\nFROM orders".
Center: a large rounded container titled exactly "Motor AxonBase". Inside it, a smaller rounded container with the title "Regra de Dados region_sp" and two centered lines "predicado" and "sales_rep_id = 165".
Green arrow from the center to a right rounded container titled exactly "Banco de dados", containing a small rectangular card reading "tabela\norders". The green arrow label is exactly "WHERE\nsales_rep_id = 165".
Below the engine: a rounded result container titled exactly "Resultado" and a simple two-column table with rows "pedido | 100", "cpf: | ***", and "cartão: | ***".
Footer centered at the bottom: "O predicado é aplicado com AND a cada consulta, e campos sensíveis são mascarados."`,
  },
];

if (!process.env.FAL_KEY) {
  throw new Error("FAL_KEY is required to generate diagrams.");
}

async function request(input) {
  const response = await fetch(`https://queue.fal.run/${model}`, {
    method: "POST",
    headers: {
      Authorization: `Key ${process.env.FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error(`fal.ai request failed: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

async function waitForResult(requestId) {
  const requestUrl = `https://queue.fal.run/${model}/requests/${requestId}`;
  const statusUrl = `${requestUrl}/status`;

  for (;;) {
    const statusResponse = await fetch(statusUrl, { headers: { Authorization: `Key ${process.env.FAL_KEY}` } });
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

await mkdir(outputDirectory, { recursive: true });

for (const diagram of diagrams) {
  const queued = await request({
    prompt: diagram.prompt,
    aspect_ratio: "16:9",
    resolution: "2K",
    output_format: "png",
  });
  const result = queued.images ? queued : await waitForResult(queued.request_id);
  const imageUrl = result.images?.[0]?.url;
  if (!imageUrl) {
    throw new Error(`fal.ai returned no image for ${diagram.file}: ${JSON.stringify(result)}`);
  }

  const imageResponse = await fetch(imageUrl);
  if (!imageResponse.ok) {
    throw new Error(`could not download ${diagram.file}: ${imageResponse.status}`);
  }

  const target = resolve(outputDirectory, diagram.file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, new Uint8Array(await imageResponse.arrayBuffer()));
  console.log(`Generated ${target}`);
}

import { createClient } from "@sanity/client";
// @ts-ignore
import blocksToHtml from "@sanity/block-content-to-html";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: true,
  apiVersion: "2023-03-02",
});

export function convertToHtml(portableText: any) {
  return blocksToHtml({ blocks: portableText });
}

export default client;

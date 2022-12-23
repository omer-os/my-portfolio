import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: "245fryc5",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
};
export const client = createClient(config);

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

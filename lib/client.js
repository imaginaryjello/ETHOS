import { SanityClient } from "next-sanity";
import { ImageUrlBuilder } from "next-sanity-image";

export const client = sanityClient({
  projectId: "6dxq1mbr",
  dataset: "production",
  apiVersion: "2024-06-06",
  useCdn: true,
  token: "process.env.NEXT_PUBLIC_SANITY_TOKEN",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

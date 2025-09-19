import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import Image from "next/image";

export const client = createClient({
  projectId: "6dxq1mbr",
  dataset: "production",
  apiVersion: "2024-06-06",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

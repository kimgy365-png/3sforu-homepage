import { SITE_URL } from "@/data/site";
export const dynamic = "force-static";
export default function sitemap() {
  const paths = ["", "about/", "solutions/", "coverage/", "results/", "careers/", "contact/", "privacy/"];
  return paths.map((p) => ({ url: `${SITE_URL}/${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}

import { CANONICAL_SITE_ORIGIN } from "../utils/siteUrl";

export default defineEventHandler((event) => {
  const siteUrl = CANONICAL_SITE_ORIGIN;
  const sitemap = new URL("/sitemap.xml", siteUrl).toString();
  const body = `User-Agent: *
Allow: /

Sitemap: ${sitemap}
`;
  setHeader(event, "content-type", "text/plain; charset=utf-8");
  return body;
});

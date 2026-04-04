import { getSiteUrl } from "../utils/siteUrl";

export default defineEventHandler((event) => {
  const siteUrl = getSiteUrl();
  const sitemap = new URL("/sitemap.xml", siteUrl).toString();
  const body = `User-Agent: *
Allow: /

Sitemap: ${sitemap}
`;
  setHeader(event, "content-type", "text/plain; charset=utf-8");
  return body;
});

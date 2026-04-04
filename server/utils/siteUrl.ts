/** Used by sitemap.xml and robots.txt so URLs stay correct regardless of deploy env (avoids invalid bases and 500s). */
export const CANONICAL_SITE_ORIGIN = "https://telemaster.io";

export function getSiteUrl(): string {
  const explicit =
    process.env.NUXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL;
  const vercelUrl = process.env.VERCEL_URL;

  const raw =
    explicit ||
    (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production"
      ? vercelUrl
      : undefined) ||
    (process.env.NODE_ENV === "production" ? "https://telemaster.io" : undefined) ||
    vercelUrl ||
    "http://localhost:3000";

  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  return `https://${raw}`;
}

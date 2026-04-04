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

export function useSiteUrl(): string {
  const config = useRuntimeConfig();
  const raw =
    config.public.siteUrl ||
    (import.meta.env.PROD ? "https://telemaster.io" : "http://localhost:3000");
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  return `https://${raw}`;
}

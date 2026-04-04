/** Default Open Graph / Twitter card image (1200×630 PNG in `public/`). */
export const DEFAULT_OG_IMAGE_PATH = "/images/og-default.png" as const;

export const DEFAULT_OG_IMAGE_ALT =
  "Telemaster — AI 驱动的 Telegram 运营平台" as const;

export function useDefaultOgImageUrl(): string {
  const siteUrl = useSiteUrl();
  return `${siteUrl}${DEFAULT_OG_IMAGE_PATH}`;
}

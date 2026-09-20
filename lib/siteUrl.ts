/** Canonical production origin — never use localhost in metadata/sitemap. */
export const PRODUCTION_SITE_URL =
  "https://onimusha-way-of-the-sword-wiki.vercel.app";

export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit && !/localhost|127\.0\.0\.1/i.test(explicit)) {
    return explicit;
  }
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/\/$/, "");
  if (vercel && !/localhost|127\.0\.0\.1/i.test(vercel)) {
    return vercel.startsWith("http") ? vercel : `https://${vercel}`;
  }
  return PRODUCTION_SITE_URL;
}

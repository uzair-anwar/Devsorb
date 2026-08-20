/**
 * Canonical site URL. Defaults to the production domain from the site's
 * own contact info; override with NEXT_PUBLIC_SITE_URL (e.g. the
 * .netlify.app URL before the domain goes live).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.devsorb.com";

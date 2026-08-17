/**
 * Base-aware URL builder.
 *
 * GitHub Pages project sites live under a sub-path (`/my-website/`), user sites
 * live at the root (`/`). Routing every internal href and asset src through
 * this helper means switching between the two is a one-line change in
 * astro.config.mjs — nothing in the markup needs rewriting.
 */
const RAW_BASE = import.meta.env.BASE_URL ?? '/';

/** Base with no trailing slash: '' at the root, '/my-website' under a sub-path. */
const BASE = RAW_BASE.replace(/\/+$/, '');

/** Build an internal link or asset path. `url('/qa')`, `url('/images/logos/rockbite.png')`. */
export function url(path = '/'): string {
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${suffix}` || '/';
}

/**
 * True when `href` is the page currently being rendered — used to mark the
 * active nav item. Compares base-stripped paths with trailing slashes ignored,
 * so `/qa`, `/qa/` and `/my-website/qa/` all match the `/qa` route.
 */
export function isActive(currentPathname: string, href: string): boolean {
  const strip = (p: string) => {
    const withoutBase = BASE && p.startsWith(BASE) ? p.slice(BASE.length) : p;
    return withoutBase.replace(/\/+$/, '') || '/';
  };
  return strip(currentPathname) === strip(href);
}

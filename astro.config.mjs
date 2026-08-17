// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

/* ---------------------------------------------------------------------------
 * GITHUB PAGES SETUP — the only two lines you normally need to touch.
 *
 * Deploying to a PROJECT page (https://<user>.github.io/<repo>/):
 *     SITE = 'https://<user>.github.io'
 *     BASE = '/<repo>'
 *
 * Deploying to a USER page (https://<user>.github.io/) or a custom domain:
 *     SITE = 'https://<user>.github.io'   (or 'https://yourdomain.com')
 *     BASE = '/'
 *
 * Every internal link goes through the `url()` helper in src/lib/url.ts, so
 * switching between the two is genuinely just an edit here — no link rewrites.
 * ------------------------------------------------------------------------- */
const SITE = 'https://david-hovhannisyan.github.io';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [react()],
  build: {
    // Emit /qa/index.html rather than /qa.html so paths work on static hosts.
    format: 'directory',
  },
});

import type { CloudflareResponseBody } from 'vite-plugin-cloudflare-functions/worker';

import 'vite-plugin-cloudflare-functions/client';

declare module 'vite-plugin-cloudflare-functions/client' {
  interface PagesResponseBody {
    '/api/:msg': {
      GET: CloudflareResponseBody<typeof import('src/functions/api/[msg]')['onRequestGet']>;
      POST: CloudflareResponseBody<typeof import('src/functions/api/[msg]')['onRequestPost']>;
    };
    '/api/**': {
      ALL: CloudflareResponseBody<typeof import('src/functions/api/_middleware')['onRequest']>;
    };
    '/api/state/:key': {
      GET: CloudflareResponseBody<typeof import('src/functions/api/state/[key]')['onRequestGet']>;
      POST: CloudflareResponseBody<typeof import('src/functions/api/state/[key]')['onRequestPost']>;
    };
  }
}

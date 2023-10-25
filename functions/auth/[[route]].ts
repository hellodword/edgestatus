import { Hono } from 'hono';
import { handle } from 'hono/cloudflare-pages';
// import { compress } from 'hono/compress';
import { timing } from 'hono/timing';
import { logger } from 'hono/logger';
import { secureHeaders } from 'hono/secure-headers';
// import { zValidator } from '@hono/zod-validator';
import { github } from 'worker-auth-providers';
import { StatusCodes } from 'http-status-codes';

import type { Bindings } from '@functions/bindings';
import { customLogger } from '@functions/hono/middleware';

export const basePath = '/auth';

const app = new Hono<{ Bindings: Bindings }>();

/* middleware */
app.use('*', logger(customLogger))
    .use('*', timing())
    // .use('*', compress())
    .use('*', secureHeaders());

app.get('/auth/github/redirect', async (c) => {
    const githubLoginUrl = await github.redirect({
        options: {
            clientId: c.env.GITHUB_CLIENT_ID,
            // scope: ['read:user'],
        },
    });
    return c.redirect(githubLoginUrl, StatusCodes.MOVED_TEMPORARILY);
});

app.get('/auth/github/callback', async (c) => {
    c.req.raw.headers.forEach((v, k) => {
        customLogger('auth github callback', k + ': ' + v);
    });
    customLogger('auth github callback', c.req.url);
    // TODO https://github.com/subhendukundu/worker-auth-providers/issues/35

    const { user: providerUser, tokens } = await github.users({
        options: {
            clientSecret: c.env.GITHUB_CLIENT_SECRET,
            clientId: c.env.GITHUB_CLIENT_ID,
            isLogEnabled: true,
        },
        request: c.req.raw,
    });
    customLogger('auth github callback', providerUser, tokens);
    // TODO
    return c.jsonT({});
});

export const onRequest = handle(app);

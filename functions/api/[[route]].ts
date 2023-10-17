import { Hono } from 'hono';
import { getRuntimeKey } from 'hono/adapter';
import { handle } from 'hono/cloudflare-pages';
// import { compress } from 'hono/compress';
import { timing } from 'hono/timing';
import { logger } from 'hono/logger';
import { secureHeaders } from 'hono/secure-headers';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

import type { Bindings } from '@functions/bindings';

export const customLogger = (message: string, ...rest: string[]) => {
    console.log(message, ...rest);
};

const app = new Hono<{ Bindings: Bindings }>().basePath('/api');

const route = app
    /* middleware */
    // debug
    .use('*', logger(customLogger))
    //
    .use('*', timing())
    .use('*', secureHeaders())
    // .use('*', compress())

    /* route */
    .get('/:msg', (c) => {
        const { msg } = c.req.param();
        customLogger('msg', `get ${msg}`);
        return c.json({
            status: 'OK',
            method: c.req.method,
            data: `Hello ${msg} from ${getRuntimeKey()}!`,
            env: c.env,
        });
    })
    .post(
        '/:msg',
        zValidator(
            'json',
            z.object({
                name: z.string(),
                age: z.number(),
            }),
        ),
        (c) => {
            const { msg } = c.req.param();
            const { name, age } = c.req.valid('json');
            return c.json({
                status: 'OK',
                method: c.req.method,
                data: `Hello ${msg} from ${getRuntimeKey()}!`,
                env: c.env,
                name,
                age,
            });
        },
    )

    .get('/state/:key', async (c) => {
        const { key } = c.req.param();
        const value = await c.env.EDGESTATUS.get(key);

        return c.json({
            key,
            value,
        });
    })
    .post('/state/:key', async (c) => {
        const { key } = c.req.param();
        const value = await c.req.text();

        await c.env.EDGESTATUS.put(key, value);

        return c.json({
            key,
            value,
        });
    });

export type AppType = typeof route;

export const onRequest = handle(app);

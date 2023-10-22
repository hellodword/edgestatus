// import { Hono } from 'hono';
import { getRuntimeKey } from 'hono/adapter';
import { handle } from 'hono/cloudflare-pages';
// import { compress } from 'hono/compress';
import { timing } from 'hono/timing';
import { logger } from 'hono/logger';
import { secureHeaders } from 'hono/secure-headers';
// import { zValidator } from '@hono/zod-validator';
import { OpenAPIHono, createRoute } from '@hono/zod-openapi';

import type { Bindings } from '@functions/bindings';
import { customLogger } from '@functions/hono/middleware';
import { setupOpenapi } from '@functions/hono/openapi';
import {
    SchemaParamsUser,
    SchemaResponseUser,
    SchemaParamsMsg,
    SchemaResponseMsg,
    SchemaBodyMsg,
} from '@functions/types';

export const basePath = '/api';

const app = new OpenAPIHono<{ Bindings: Bindings }>();

/* middleware */
app.use('*', logger(customLogger))
    .use('*', timing())
    // .use('*', compress())
    .use('*', secureHeaders());

setupOpenapi(app);

const openapi = app
    /* users */
    .openapi(
        createRoute({
            method: 'get',
            path: `${basePath}/users/{id}`,
            request: {
                params: SchemaParamsUser,
            },
            responses: {
                200: {
                    content: {
                        'application/json': {
                            schema: SchemaResponseUser,
                        },
                    },
                    description: 'Retrieve the user',
                },
            },
        }),
        (c) => {
            const { id } = c.req.valid('param');
            return c.jsonT({
                id,
                age: 20,
                name: 'Ultra-man',
            });
        },
    )
    /* msg */
    .openapi(
        createRoute({
            method: 'get',
            path: `${basePath}/{msg}`,
            request: {
                params: SchemaParamsMsg,
            },
            responses: {
                200: {
                    content: {
                        'application/json': {
                            schema: SchemaResponseMsg,
                        },
                    },
                    description: 'Return the msg',
                },
            },
        }),
        (c) => {
            const { msg } = c.req.param();
            customLogger('msg', `get ${msg}`);
            return c.jsonT({
                status: 'OK',
                method: c.req.method,
                data: `Hello ${msg} from ${getRuntimeKey()}!`,
            });
        },
    )
    .openapi(
        createRoute({
            method: 'post',
            path: `${basePath}/{msg}`,
            request: {
                params: SchemaParamsMsg,
                body: {
                    description: 'The msg to create',
                    content: {
                        'application/json': {
                            schema: SchemaBodyMsg,
                        },
                    },
                },
            },
            responses: {
                200: {
                    content: {
                        'application/json': {
                            schema: SchemaResponseMsg,
                        },
                    },
                    description: 'Return the msg',
                },
            },
        }),
        (c) => {
            const { msg } = c.req.param();
            const { name, age } = c.req.valid('json');
            return c.jsonT({
                status: 'OK',
                method: c.req.method,
                data: `Hello ${msg} from ${getRuntimeKey()}! Your name is ${name} and age is ${age}.`,
            });
        },
    );

export type AppType = typeof openapi;

export const onRequest = handle(app);

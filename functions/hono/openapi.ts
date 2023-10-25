import { type OpenAPIHono } from '@hono/zod-openapi';
import { StatusCodes } from 'http-status-codes';

import { basePath } from '@functions/api/[[route]]';
import {
    APIDocsTitle,
    HandlerDocs,
    HandlerDocsRedoc,
    HandlerDocsSwagger,
} from '@functions/hono/handler';

export function setupOpenapi(app: OpenAPIHono<any>) {
    const docsRoot = `${basePath}/docs`;

    app.doc(`${docsRoot}/openapi-spec.json`, {
        openapi: '3.0.0',
        info: {
            version: 'v1',
            title: APIDocsTitle,
            description:
                'API documentation powered by [Hono](https://hono.dev), [Swagger UI](https://swagger.io/docs/open-source-tools/swagger-ui/), and [Redoc](https://redocly.com/docs/redoc/).',
            'x-logo': {
                url: `https://placehold.co/260x100/EEE/31343C?font=montserrat&text=${encodeURIComponent(
                    APIDocsTitle,
                )}`,
                altText: `${APIDocsTitle} logo`,
            },
        },
    });

    app.get(`${basePath}`, (c) =>
        c.redirect(`${docsRoot}/`, StatusCodes.MOVED_PERMANENTLY),
    )
        .get(`${basePath}/`, (c) =>
            c.redirect(`${docsRoot}/`, StatusCodes.MOVED_PERMANENTLY),
        )
        .get(`${docsRoot}`, (c) =>
            c.redirect(`${docsRoot}/`, StatusCodes.MOVED_PERMANENTLY),
        )
        .get(`${docsRoot}/`, HandlerDocs(docsRoot))
        .get(`${docsRoot}/redoc`, (c) =>
            c.redirect(`${docsRoot}/redoc/`, StatusCodes.MOVED_PERMANENTLY),
        )
        .get(`${docsRoot}/redoc/`, HandlerDocsRedoc(docsRoot))
        .get(`${docsRoot}/swagger`, (c) =>
            c.redirect(`${docsRoot}/swagger/`, StatusCodes.MOVED_PERMANENTLY),
        )
        .get(`${docsRoot}/swagger/`, HandlerDocsSwagger(docsRoot));
}

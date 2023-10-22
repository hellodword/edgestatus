import { basePath } from '@functions/api/[[route]]';
import { type OpenAPIHono } from '@hono/zod-openapi';
import {
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
            title: 'Sample ToDo list API',
            description:
                'This API exhibits how you can provide a comprehensible API documentation using [Hono](https://hono.dev), [Swagger UI](https://swagger.io/docs/open-source-tools/swagger-ui/), and [Redoc](https://redocly.com/docs/redoc/).',
            'x-logo': {
                url: 'https://placehold.co/260x100/EEE/31343C?font=montserrat&text=Sample%20ToDo%0AAPI',
                altText: 'Sample ToDo API logo',
            },
        },
        tags: [{ name: 'Task', description: 'Manipulation on ToDo list' }],
    });

    app.get(`${docsRoot}`, HandlerDocs(docsRoot))
        .get(`${docsRoot}/redoc`, HandlerDocsRedoc(docsRoot))
        .get(`${docsRoot}/swagger`, HandlerDocsSwagger(docsRoot));
}

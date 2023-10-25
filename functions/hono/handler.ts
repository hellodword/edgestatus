import { type Context } from 'hono';
import { html } from 'hono/html';

export const APIDocsTitle = 'API Docs';

export function HandlerDocs(basePath: string) {
    return (c: Context) =>
        c.html(
            html`<!doctype html>
                <html lang="en">
                    <head>
                        <link
                            rel="stylesheet"
                            href="https://cdn.jsdelivr.net/npm/@picocss/pico@next/css/pico.classless.min.css"
                        />
                    </head>
                    <body>
                        <main>
                            <h1>${APIDocsTitle}</h1>
                            <p>
                                You can find API reference in either${' '}
                                <a href="${basePath}/redoc">Redoc</a> style
                                or${' '}
                                <a href="${basePath}/swagger">Swagger UI</a>
                                style.
                            </p>
                        </main>
                    </body>
                </html>`,
        );
}

export function HandlerDocsSwagger(basePath: string) {
    return (c: Context) =>
        c.html(
            html`<!doctype html>
                <html lang="en">
                    <head>
                        <meta charset="utf-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />
                        <meta name="description" content="SwaggerUI" />
                        <title>${APIDocsTitle} | SwaggerUI</title>
                        <link
                            rel="stylesheet"
                            href="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css"
                        />
                    </head>
                    <body>
                        <div id="swagger-ui"></div>
                        <script
                            src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js"
                            crossorigin
                        ></script>
                        ${html`<script>
                            window.onload = () => {
                                window.ui = SwaggerUIBundle({
                                    url: '${basePath}/openapi-spec.json',
                                    dom_id: '#swagger-ui',
                                });
                            };
                        </script>`}
                    </body>
                </html>`,
        );
}

export function HandlerDocsRedoc(basePath: string) {
    return (c: Context) =>
        c.html(
            html`<!doctype html>
                <html lang="en">
                    <head>
                        <meta charset="utf-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />
                        <meta name="description" content="SwaggerUI" />
                        <title>${APIDocsTitle} | Redoc</title>
                    </head>
                    <body>
                        <redoc spec-url="${basePath}/openapi-spec.json"></redoc>
                        <script src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"></script>
                    </body>
                </html>`,
        );
}

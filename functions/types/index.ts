import { z } from '@hono/zod-openapi';

export const SchemaParamsUser = z.object({
    id: z
        .string()
        .min(3)
        .openapi({
            param: {
                name: 'id',
                in: 'path',
            },
            example: '1212121',
        }),
});

export const SchemaResponseUser = z
    .object({
        id: z.string().openapi({
            example: '123',
        }),
        name: z.string().openapi({
            example: 'John Doe',
        }),
        age: z.number().openapi({
            example: 42,
        }),
    })
    .openapi('User');

export const SchemaParamsMsg = z.object({
    msg: z
        .string()
        .min(3)
        .openapi({
            param: {
                name: 'msg',
                in: 'path',
            },
            example: 'world',
        }),
});

export const SchemaBodyMsg = z.object({
    name: z.string().min(3).openapi({
        description: 'the name',
        example: 'world',
    }),
    age: z.number().openapi({
        description: 'the age',
        example: 123,
    }),
});

export const SchemaResponseMsg = z
    .object({
        status: z.string().openapi({
            example: 'OK',
        }),
        method: z.string().openapi({
            example: 'GET',
        }),
        data: z.string().openapi({
            example: '',
        }),
    })
    .openapi('Msg');

import { Hono } from 'hono'
import { handle } from 'hono/cloudflare-pages'
import { Bindings } from '../bindings'

const app = new Hono<{ Bindings: Bindings }>().basePath('/api')

const route = app
  .get('/:msg', (c) => {
    const { msg } = c.req.param()
    return c.json({
      status: 'OK',
      method: c.req.method,
      data: `Hello ${msg} from Hono!`,
      env: c.env,
    })
  })
  .post('/:msg', (c) => {
    const { msg } = c.req.param()
    return c.json({
      status: 'OK',
      method: c.req.method,
      data: `Hello ${msg} from Hono!`,
      env: c.env,
    })
  })

  .get('/state/:key', async (c) => {
    const { key } = c.req.param()
    const value = await c.env.EDGESTATUS.get(key);

    return c.json({
      key,
      value
    })
  })
  .post('/state/:key', async (c) => {
    const { key } = c.req.param()
    const value = await c.req.text();

    await c.env.EDGESTATUS.put(key, value);

    return c.json({
      key,
      value
    })
  })



export type AppType = typeof route;

export const onRequest = handle(app);
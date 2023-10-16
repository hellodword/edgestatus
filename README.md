# edgestatus


## TODO

- [ ] collector
    - [ ] [agent report](./api.md#report)
    - [ ] workers cron ([queues](https://developers.cloudflare.com/queues/))
- [ ] latest n records ([xksuid](https://github.com/ValeriaVG/xksuid))
- [ ] records pagination
- [ ] chart
- [ ] user manager
    - [ ] [auth](https://github.com/subhendukundu/worker-auth-providers/tree/main/example/functions/api/v1/auth/github)
    - [ ] ~~kv as user white list (with admin page)~~ use D1
    - [ ] private items
    - [ ] share a snapshot status page of public items
- [ ] export/import


---
## ref

- limits

    - https://developers.cloudflare.com/workers/platform/limits/
    - https://developers.cloudflare.com/kv/platform/limits/
    - https://developers.cloudflare.com/pages/platform/limits/
    - https://developers.cloudflare.com/queues/platform/limits/

- cloudflare & websocket

    - https://blog.cloudflare.com/introducing-websockets-in-workers/
        > Our current thinking is that when using WebSockets, you'll be charged for wall clock time whenever a message is being processed by the Durable Object on any WebSocket connection - this charge would be shared across all WebSockets connected to a given Durable Object. When there is no CPU activity on a Durable Object, but any number of WebSocket connections remain established, you'll be billed a much lower active connection charge, per second.
    - https://github.com/AggressivelyMeows/cfw-easy-utils/blob/970990b3f24d60343c3d92b2f6dd5ebd5cb8c2a6/src/websockets.js

- pages & functions & impl

    - https://github.com/search?q=%28path%3A%2F_worker.ts+OR+path%3A%2F_worker.js%29+%2Fcloudflare%2F&type=code
    - https://github.com/stubijs/statuspage
    - https://github.com/maraisr/web-vitals
    - https://github.com/eidam/cf-workers-status-page
    - https://github.com/louislam/uptime-kuma/issues/3026

- kv

    - https://uptimesniper.com/blog
    - https://developers.cloudflare.com/kv/learning/how-kv-works/#consistency
        > Changes may take up to 60 seconds or more to be visible in other global network locations as their cached versions of the data time out

- auth & iam & oidc

    - https://github.com/subhendukundu/worker-auth-providers
    - https://github.com/subhendukundu/worker-auth-providers/tree/main/example/functions/api/v1/auth/github
    - https://mecanik.dev/en/posts/cloudflare-pages-register-login-and-user-system/
    - https://developers.cloudflare.com/pages/platform/functions/plugins/cloudflare-access/
    - https://github.com/search?q=cloudflare+workers+oauth&type=repositories
    - https://github.com/search?q=cloudflare+workers+auth&type=repositories
    - https://github.com/eidam/cf-access-workers-oidc

- protocols

    - https://developers.cloudflare.com/workers/runtime-apis/tcp-sockets/
    - https://blog.cloudflare.com/workers-tcp-socket-api-connect-databases/

- others

    - https://github.com/honojs/examples/tree/cc93499076475b7138b499343b38ad6f34e52b00/pages-stack
    - https://github.com/microfeed/microfeed
    - https://blog.cloudflare.com/zh-cn/production-saas-intro-zh-cn/

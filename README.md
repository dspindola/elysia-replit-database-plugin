# @gyoza/elysia-replit-database-plugin

This is a plugin for Elysia that allows you to use Replit Database.

> Replit Database is a simple, user-friendly key-value store inside of every Repl. No configuration is required; you can get started right away!

## Resources

- [Replit Database](https://docs.replit.com/cloud-services/storage-and-databases/replit-database#what-is-replit-database)
- [Elysia](https://elysiajs.com/at-glance.html)

## Usage

```ts
// server.ts
import { replitDatabasePlugin } from "@gyoza/elysia-replit-database-plugin"
import Client from "@replit/database"

export const app = new Elysia()
    .use(
        replitDatabasePlugin({
            Client,
            option: { prefix: '/kv', url: process.env.REPLIT_DB_URL }
        })
    );
```

```ts
// client.ts
import { app } from "./server"
import { treaty } from "@elysiajs/eden"

const client = treaty(app);

const { data } = await client.kv.list.get();

console.log(data)
```
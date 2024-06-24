import { Elysia } from "elysia";
import { ElysiaReplitDatabaseModel } from "./models";

/**
 * This plugin allows you to use Replit Database as a database.
 * @param config - The configuration for the plugin.
 * @returns {Elysia} A function that takes an Elysia app and returns the app with the plugin added.
 */
export function replitDatabasePlugin(
	/** @type {{ Client: typeof import('@replit/database').default, options: { prefix: string, url: string } }} */config: {
	Client: typeof import('@replit/database').default; options: {
		prefix: string;
		url: string;
	};
}): any {
	return new Elysia().state("client", new config.Client(config.options.url))
		.use(ElysiaReplitDatabaseModel)
		.get(
			"/list",
			({ store, query }) => {
				return store.client.list(query.prefix);
			},
			{
				query: "filter",
			},
		)
		.get(
			"/:key",
			({ store, params, query }) =>
				store.client.get(params.key, {
					raw: query.raw,
				}),
			{
				query: "options",
			},
		)
		.post("/", ({ store, body }) => store.client.setMultiple(body), {
			body: "payload",
		})
		.post("/empty", ({ store }) => {
			return store.client.empty();
		})
		.get("/all", ({ store, query }) => store.client.getAll({ raw: query.raw }), {
			query: "options",
		})
		.delete(
			"/",
			({ store, body }) => store.client.deleteMultiple(...Object.keys(body)),
			{
				body: "payload",
			},
		)
		.delete("/:key", ({ store, params }) => store.client.delete(params.key));
}
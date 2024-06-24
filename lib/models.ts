import { t, type Static, Elysia } from "elysia";

/**
 * @type {Payload} PayloadModel
 */
const PayloadModel = t.Record(
    t.String({
        description: "Database item key",
        error: "Database item key error",
        examples: ["hello", "replit"],
    }),
    t.String({
        description: "Database item value",
        error: "Database item value error",
        examples: ["world", "database"],
    }),
    {
        description: "Database item",
        error: "Database item error",
        default: {
            hello: "world",
            replit: "database",
        },
        examples: [
            {
                hello: "world",
                replit: "database",
            },
        ],
        required: true,
    },
);

/**
 * @type {Query} QueryModel
 */
const QueryModel = t.Object(
    {
        prefix: t.String({
            description: "Query prefix",
            error: "Query prefix error",
            examples: ["replit"],
            default: "",
        }),
    },
    {
        description: "Query options",
        error: "Query options error",
    },
);

/**
 * @type {Options} OptionsModel
 */
const OptionsModel = t.Optional(
    t.Object({
        raw: t.BooleanString({
            description: "Raw response",
            default: "false",
        }),
    }),
);

/**
 * Elysia Replit Database Model
 * @type {typeof ElysiaReplitDatabaseModel} ElysiaReplitDatabaseModel
 * @since 0.1.0
 */
export const ElysiaReplitDatabaseModel = new Elysia()
    .model("payload", PayloadModel)
    .model("filter", QueryModel)
    .model("options", OptionsModel);

export type Payload = Static<typeof PayloadModel>;

export type Query = Static<typeof QueryModel>;

export type Options = Static<typeof OptionsModel>;

import { BuildConfig } from "bun";

export default {
    build: {
        outdir: process.env.BUN_BUILD_OUTDIR,
        entrypoints: ['lib/index.ts'],
        format: process.env.BUN_BUILD_FORMAT,
        target: process.env.BUN_BUILD_TARGET,
        external: [
            "elysia",
            "@elysiajs/database",
        ]
    } satisfies BuildConfig,
    sourcemaps: {
        outdir: '.tmp/sourcemaps',
        entrypoints: [`${process.env.BUN_BUILD_OUTDIR}/index.js`],
        target: process.env.BUN_BUILD_TARGET,
        external: [
            "elysia",
            "@elysiajs/database",
        ]
    } satisfies BuildConfig
}
declare module "bun" {
    interface Env {
        readonly BUN_BUILD_TARGET: BuildConfig['target']
        readonly BUN_BUILD_OUTDIR: BuildConfig['outdir']
        readonly BUN_BUILD_FORMAT: BuildConfig['format']
        readonly BUN_BUILD_SOURCEMAP: BuildConfig['sourcemap']
    }
}
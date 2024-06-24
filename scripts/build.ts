import bunConfig from "../.config/bun.config";
import { objectHash } from "ohash"

await Bun.$`rm -rf .tmp`

const build = await Bun.build(bunConfig.build)

const sourcemaps = await Bun.build(bunConfig.sourcemaps)

console.log(`Built ${build.outputs.length} files`)

const buildHash = objectHash(build.outputs)
const sourcemapsHash = objectHash(sourcemaps.outputs)

await Bun.write('./.tmp/output-hash.txt', JSON.stringify({
    build: buildHash,
    sourcemaps: sourcemapsHash
}))
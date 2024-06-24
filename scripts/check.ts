import packageConfig from "../package.json"
import jsrConfig from "../jsr.json"
import { semver } from "bun"

const versionsMatch = semver.satisfies(jsrConfig.version, packageConfig.version)

if (!versionsMatch) {
  const error = new Error("Versions do not match", {
    cause: {
      jsr: jsrConfig.version,
      package: packageConfig.version
    }
  });

  console.error(error)

  process.exit(1)
}

console.log(`JSR version %s matches package version %s`, jsrConfig.version, packageConfig.version)
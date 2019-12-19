import path from "path";

// eslint-disable-next-line no-unused-vars
import { Config } from "bili";

const config: Config = {
  input: `./src/index.ts`,
  output: {
    moduleName: `commons`,
    minify: true,
    format: [`cjs`, `esm`],
    dir: `./dist`
  },
  plugins: {
    typescript2: {
      cacheRoot: path.join(__dirname, `.rpt2_cache`),
      useTsConfigDeclarationDir: true
    }
  }
};

export default config;

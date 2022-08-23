const { build } = require("esbuild");
const { solidPlugin } = require("esbuild-plugin-solid");

const pkg = require("./package.json");
const dep = {
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

build({
  entryPoints: ["lib/index.tsx"],
  bundle: true,
  format: "cjs",
  external: Object.keys(dep),
  outfile: "cjs/index.js",
  minify: true,
  loader: {
    ".svg": "dataurl",
  },
  logLevel: "info",
  plugins: [solidPlugin()],
}).catch(() => process.exit(1));

build({
  entryPoints: ["lib/index.tsx"],
  bundle: true,
  format: "esm",
  external: Object.keys(dep),
  outfile: "esm/index.js",
  minify: true,
  loader: {
    ".svg": "dataurl",
  },
  logLevel: "info",
  plugins: [solidPlugin()],
}).catch(() => process.exit(1));

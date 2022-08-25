import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [
    solidPlugin({ dev: true }),
    solidSvg(),
    isProd &&
      require("@vitejs/plugin-legacy")({
        targets: ["defaults"],
        polyfills: [
          "es/array",
          "es/array-buffer",
          "es/object",
          "es/string",
          "es/number",
          "es/function",
          "es/map",
          "es/math",
          "es/set",
          "es/promise",
          "es/regexp",
          "es/weak-set",
          "es/weak-map",
          "es/date",
        ],
      }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});

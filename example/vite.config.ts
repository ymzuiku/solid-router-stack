import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";

export default defineConfig({
  plugins: [solidPlugin({ dev: true }), solidSvg()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});

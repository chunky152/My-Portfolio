import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from GitHub Pages under /My-Portfolio/
  base: "/My-Portfolio/",
  build: {
    // Keep CRA's output directory so the Pages workflow needs no changes
    outDir: "build",
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap 5.3 still uses @import/global functions; silence the
        // deprecation noise coming from node_modules
        quietDeps: true,
        silenceDeprecations: ["import", "global-builtin", "color-functions"],
      },
    },
  },
  ssr: {
    // Bundle all deps into the prerender bundle; several (react-bootstrap,
    // dom-helpers, ...) use CJS-style subpath imports Node's ESM loader
    // can't resolve when externalized
    noExternal: true,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});

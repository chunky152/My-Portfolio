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
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});

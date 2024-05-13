import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest-setup.js",
    include: ["src/**/*.test.*", "scripts/**/*.test.*"],
    outputFile: "test-results.xml",
    reporters: ["default", "junit"],
    coverage: {
      include: ["src/components/**/*.svelte", "scripts/**/*.js"],
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100
      }
    }
  }
});

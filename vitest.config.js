import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest-setup.js",
    include: ["**/*.test.*", "scripts/**/*.test.*"],
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

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest-setup.js",
    include: ["**/*.test.*"],
    outputFile: "test-results.xml",
    reporters: ["default", "junit"]
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./")
    }
  }
});

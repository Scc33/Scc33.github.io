import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [svelte({ hot: !process.env.VITEST })],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest-setup.js',
        exclude: ['node_modules', 'tests'],
        coverage: {
            include: ['src/components/**/*.svelte'],
            thresholds: {
                statements: 100,
                branches: 100,
                functions: 100,
                lines: 100,
            }
        }
    },
})
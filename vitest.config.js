import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [svelte({ hot: !process.env.VITEST })],
    test: {
        globals: false,
        environment: 'jsdom',
        setupFiles: ['./vitest-setup.js'],
    },
})
module.exports = {
    env: {
        browser: true,
        es2021: true,
        "vitest-globals/env": true
    },
    plugins: ["vitest"],
    extends: [
        "eslint:recommended",
        'plugin:vitest/all',
        'plugin:svelte/recommended',
        "plugin:vitest-globals/recommended"
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: { "vitest/require-hook": "off" }
}
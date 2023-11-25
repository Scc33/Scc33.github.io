module.exports = {
    env: {
        browser: true,
        es2021: true,
        "vitest-globals/env": true
    },
    plugins: ["vitest"],
    extends: [
        'standard',
        'prettier',
        'plugin:vitest/recommended',
        'plugin:svelte/recommended',
        "plugin:vitest-globals/recommended"
    ],
    overrides: [{
        env: {
            node: true
        },
        files: [
            '.eslintrc.{js,cjs}'
        ],
        parserOptions: {
            sourceType: 'script'
        }
    }],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {}
}
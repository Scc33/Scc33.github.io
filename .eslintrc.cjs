module.exports = {
    env: {
        browser: true,
        es2021: true,
        "vitest/globals": true
    },
    plugins: ["vitest"],
    extends: ['standard', 'prettier', "plugin:vitest/recommended",
        'plugin:svelte/recommended'
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
module.exports = {
    env: {
        browser: true,
        es2021: true,
        "vitest-globals/env": true
    },
    plugins: ["vitest"],
    extends: [
        "eslint:recommended",
        'plugin:svelte/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    overrides: [{
            files: ['tests/**'],
            extends: ['plugin:playwright/recommended']
        },
        {
            files: ['src/**'],
            extends: ['plugin:vitest/all', "plugin:vitest-globals/recommended"]
        }
    ]
}
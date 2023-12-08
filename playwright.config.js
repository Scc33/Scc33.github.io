import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        trace: 'on-first-retry',
    },

    projects: [{
            name: 'chromium',
            use: {...devices['Desktop Chrome'] },
        },

        {
            name: 'firefox',
            use: {...devices['Desktop Firefox'] },
        },

        {
            name: 'webkit',
            use: {...devices['Desktop Safari'] },
        },

        /* Test against mobile viewports. */
        {
            name: 'Mobile Chrome',
            use: {...devices['Pixel 5'] },
        },
        {
            name: 'Mobile Safari',
            use: {...devices['iPhone 12'] },
        },

        /* Test against branded browsers. */
        {
            name: 'Google Chrome',
            use: {...devices['Desktop Chrome'], channel: 'chrome' },
        },
    ],

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
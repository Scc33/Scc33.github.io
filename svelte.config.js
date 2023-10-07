import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        appDir: 'app',
        adapter: adapter()
    },
    preprocess: vitePreprocess()
};
export default config;
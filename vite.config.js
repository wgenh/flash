import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite';

// https://vitejs.dev/config/
export default defineConfig({
	root: "src",
	build: {
		outDir: "out"
	},
	plugins: [svelte(), svelteTesting()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["@vitest/web-worker", "test/setup.js"]
	}
})

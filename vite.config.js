import { defineConfig } from 'vite';
import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import {svelteTesting} from '@testing-library/svelte/vite';


export default defineConfig({
	plugins: [sveltekit(), svelteTesting()],
	resolve: {
	  alias: {
		'$lib': path.resolve(__dirname, './src/lib'),
	  },
	},
	test: {
	  globals: true,
	  environment: 'jsdom',
	  setupFiles: ['@vitest/web-worker', './src/test/setup.js']
	},
  })
  
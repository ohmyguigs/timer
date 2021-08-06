import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-static';
import node from '@sveltejs/adapter-node';
// const node = require('@sveltejs/adapter-node');
// const pkg = require('./package.json');

// /** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: node(),
		// adapter: adapter(),

		// Comment the paths if wants to run in dev mode.
		paths: {
			// base: process.env.NODE_ENV == 'production' ? '/bem-vinde' : '',
			// assets: process.env.NODE_ENV == 'production' ? '/bem-vinde' : '',
			base: '',
			assets: '',
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// vite: {
		// 	ssr: {
		// 		noExternal: Object.keys(pkg.dependencies || {})
		// 	}
		}
};

export default config;

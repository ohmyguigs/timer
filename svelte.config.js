import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static'
// import node from '@sveltejs/adapter-node'
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
		// adapter: node(), // USA ESSDE PRA RODAR LOCAL
		adapter: adapter({ // USA ESSE PRA BUILD PROD
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
    }),

		prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
    },

		// Comment the paths if wants to run in dev mode.
		paths: {
			base: '/timer',
			// assets: '/timer',
			// base: '',
			// assets: '',
		},

		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',

		// vite: {
		// 	ssr: {
		// 		noExternal: Object.keys(pkg.dependencies || {})
		// 	}
		}
};

export default config;

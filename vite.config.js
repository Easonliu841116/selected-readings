import { defineConfig } from 'vite'

export default defineConfig({
	root: './',
	publicDir: 'public',
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/variables.scss";`,
			},
		},
		devSourcemap: true // Enable source maps
	},
})

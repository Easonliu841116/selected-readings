import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/styles/variables.scss";`
			}
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
});

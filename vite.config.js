import { defineConfig } from 'vite';
import { resolve } from 'path'

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
			'@': resolve(__dirname, './src')
		}
	},
	build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        news: resolve(__dirname, 'news/index.html'),
      }
    }
  },
});

import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (dir: string) => {
	return resolve(process.cwd(), '.', dir)
}

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
	const root = process.cwd()
	const env = loadEnv(mode, root)

	return {
		server: {
			host: '127.0.0.1',
		},
		root: root,
		resolve: {
			// 路径别名
			alias: [
				// /@/xxxx => src/xxxx
				{
					find: '@',
					replacement: pathResolve('src') + '/'
				},
				// /#/xxxx => types/xxxx
				{
					find: '#',
					replacement: pathResolve('types') + '/'
				}
			]
		},
		plugins: [
			vue(),
		],
		css: {
			preprocessorOptions: {
				scss: {
					charset: false
				}
			}
		},
		build: {
			brotliSize: false,
			chunkSizeWarningLimit: 1000
		}
	}
})

import { defineConfig } from '@tanstack/start/config'
import { cloudflare } from 'unenv'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	vite: {
		plugins: [tsConfigPaths({ projects: ['./tsconfig.json'] })],
	},
	server: {
		compatibilityDate: '2025-01-01',
		preset: 'cloudflare-pages',
		unenv: cloudflare,
		output: {
			dir: '{{ rootDir }}/dist',
			publicDir: '{{ output.dir }}/public',
			serverDir: '{{ output.dir }}/worker',
		},
		rollupConfig: {
			external: ['node:async_hooks'],
		},
	},
	tsr: {
		appDirectory: './src',
		generatedRouteTree: './src/routeTree.gen.ts',
		routesDirectory: './src/routes',
		routeToken: 'layout',
	},
	routers: {
		client: {
			entry: './src/client.tsx',
		},
		// api: {
		// 	vite: {
		// 		ssr: {
		// 			noExternal: ['react-dropzone'],
		// 		},
		// 	},
		// },
		ssr: {
			entry: './src/ssr.tsx',
		},
	},
})

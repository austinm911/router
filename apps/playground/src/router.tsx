import { QueryClient } from '@tanstack/react-query'
import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'
import { DefaultCatchBoundary } from './components/DefaultCatchBoundary'
import { NotFound } from './components/NotFound'
import { routeTree } from './routeTree.gen'

export function createRouter() {
	const queryClient = new QueryClient()

	return routerWithQueryClient(
		createTanStackRouter({
			routeTree,
			defaultSsr: false,
			context: { queryClient },
			defaultPreload: 'intent',
			defaultPreloadDelay: 200,
			defaultPreloadStaleTime: 0, // let react query handle stale time
			// defaultErrorComponent: DefaultCatchBoundary,
			// defaultNotFoundComponent: () => <NotFound />,
		}),
		queryClient,
	)
}

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof createRouter>
	}
}

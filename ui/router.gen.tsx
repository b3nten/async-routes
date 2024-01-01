import rootRoute from "./screens/__root";
import {
	Route,
	Router,
	lazyFn,
	lazyRouteComponent,
} from "@tanstack/react-router";

const IndexRoute = new Route({
	path: "/",
	component: lazyRouteComponent(() => import("./screens/~index")),
});

const AboutRoute = new Route({
	path: "/about",
	component: lazyRouteComponent(() => import("./screens/~about")),
	loader: lazyFn(() => import("./screens/~about")),
});

// OR

const AboutRoute = new AsyncFileRouteDefinition({
	path: "/about",
	route: () => lazyRoute(() => import("./screens/~about")),
});

const routeTree = rootRoute.addChildren([IndexRoute, AboutRoute]);

export const createRouter = () => new Router({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}

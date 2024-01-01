import rpc from "#vono/rpc"

const aboutRoute = new AsyncFileRoute({
  loader: async () => {
    return rpc.api.about.$get().then((res) => res.json())
  },
	component: UI,
});

export default aboutRoute;

function UI() {
  const data = aboutRoute.useLoaderData()
  return <div className="p-2">Hello from About! {JSON.stringify(data)}</div>;
}
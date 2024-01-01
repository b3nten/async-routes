import { Route } from "@tanstack/react-router";
import rootRoute from "./__root";

const route = new AsyncFileRoute({
	component: UI,
});

export default route;

function UI() {
  return (
    <div>
      <h3>Vono x Tanstack</h3>
    </div>
  );
}
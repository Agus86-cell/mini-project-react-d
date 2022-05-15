import Home from "./pages/Home";
import SnackView from "./pages/SnackView";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/snack/:id",
    component: SnackView,
  },
];

export default routes;

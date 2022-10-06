import { createRouters, setNavigationAnimation } from "solid-router-stack";
import { tw } from "twind";

setNavigationAnimation("moveTop");

document.body.className = tw`bg-gray-800`;

export const routers = createRouters({
  Welcome: {
    // render: () => import("./Welcome"),
    path: "/welcome",
    render: () => import("./Welcome"),
    // sync: true,
    preload: ["Login"],
  },
  Login: {
    render: () => import("./Login"),
    path: "/login",
    preload: ["Dashboard"],
  },
  Dashboard: {
    render: () => import("./Dashboard"),
    path: "/dashboard",
  },
});

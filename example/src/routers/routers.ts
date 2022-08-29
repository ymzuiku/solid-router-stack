import { createRouters } from "solid-router-stack";
import { tw } from "twind";
import Welcome from "./Welcome";

document.body.className = tw`bg-gray-800`;

export const routers = createRouters({
  Welcome: {
    // render: () => import("./Welcome"),
    path: "/welcome",
    render: Welcome,
    async: true,
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

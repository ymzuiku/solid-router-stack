import { createRouters, setNavigationAnimation } from "solid-router-stack";
import { tw } from "twind";
import Welcome from "./Welcome";

setNavigationAnimation("moveTop");

document.body.className = tw`bg-gray-800`;

export const routers = createRouters({
  Welcome: {
    render: Welcome,
    async: true,
    path: "/welcome",
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

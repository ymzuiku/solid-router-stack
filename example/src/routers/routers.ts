import { tw } from "twind";
import { createRouters, useAnimationNavigation } from "../../../lib";
import Welcome from "./Welcome";

useAnimationNavigation("moveTop");

document.body.className = tw`bg-gray-800`;

export const routers = createRouters({
  Welcome: {
    render: Welcome,
    async: true,
    path: "/welcome",
  },
  Login: {
    render: () => import("./Login"),
    path: "/login",
  },
  Dashboard: {
    render: () => import("./Dashboard"),
    path: "/dashboard",
  },
});

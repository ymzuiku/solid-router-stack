import { tw } from "twind";
import {
  createRouters,
  moveLeftCss,
  useAnimationNavigation,
} from "../../../lib";
import Welcome from "./Welcome";

useAnimationNavigation(moveLeftCss);

document.body.className = tw`bg-gray-700`;

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

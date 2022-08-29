/* @refresh reload */
import { render } from "solid-js/web";
import { historyProxy } from "solid-router-stack";
import { tw } from "twind";

import "./index.css";
import { routers } from "./routers/routers";

document.getElementById("root")!.className = tw`w-full h-full bg-gray-800`;

render(
  () => <routers.Routers root={routers.Welcome} hash />,
  document.getElementById("root") as HTMLElement
);

historyProxy.beforeChange((url) => {
  return url;
});

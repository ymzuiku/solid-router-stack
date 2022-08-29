/* @refresh reload */
import { render } from "solid-js/web";

import { stackOptions } from "solid-router-stack";
import "./index.css";
import { routers } from "./routers/routers";

stackOptions.className = "bg-gray-800";

render(
  () => <routers.Routers root={routers.Welcome} hash />,
  document.getElementById("root") as HTMLElement
);

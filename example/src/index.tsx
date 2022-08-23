/* @refresh reload */
import { render } from "solid-js/web";

import "twind/shim";

import "./index.css";
import { routers } from "./routers/routers";

render(
  () => <routers.Routers root={routers.Welcome} hash />,
  document.getElementById("root") as HTMLElement
);

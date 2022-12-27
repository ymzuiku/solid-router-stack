import type { JSX } from "solid-js/jsx-runtime";
import type { RouterItem } from "./types";

export const stackOptions = {
  navigationDuration: 0,
  className: "",
  style: {} as JSX.CSSProperties,
  notFound: {
    sync: true,
    render: () => <div>Not found page</div>,
  } as RouterItem,
  fallback: <div></div>,
};

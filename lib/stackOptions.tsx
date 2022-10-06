import type { RouterItem } from "./types";

export const stackOptions = {
  navigationDuration: 0,
  className: "",
  notFound: {
    sync: true,
    render: () => <div>Not found page</div>,
  } as RouterItem,
  fallback: <div></div>,
};

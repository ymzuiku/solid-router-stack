import type { RouterItem } from "./types";

export const stackOptions = {
  navigationDuration: 250,
  notFound: {
    async: true,
    render: () => <div>Not found page</div>,
  } as RouterItem,
  fallback: <div></div>,
};

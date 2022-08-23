import type { RouterItem } from "./types";

export const stackOptions = {
  navigationDuration: 0,
  notFound: {
    async: true,
    render: () => <div>Not found page</div>,
  } as RouterItem,
};

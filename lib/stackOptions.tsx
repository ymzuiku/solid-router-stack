import type { RouterItem } from "./types";

export const stackOptions = {
  prefix: "#",
  classBefore: "",
  classNow: "",
  classAfter: "",
  navigationDuration: 0,
  notFound: {
    async: true,
    render: () => <div>Not found page</div>,
  } as RouterItem,
};

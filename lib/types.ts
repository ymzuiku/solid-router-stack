import { historyProxy } from "./historyProxy";

export interface RouterNavigate {
  push: (state?: Record<string, unknown>) => void;
  replace: (state?: Record<string, unknown>) => void;
  clearTo: (state?: Record<string, unknown>) => void;
  async?: boolean;
  preload?: () => RouterNavigate[];
  preloadAll?: boolean;
}

export interface Router {
  path: string;
  render: any;
  async?: boolean;
  preload?: () => RouterNavigate[];
  preloadAll?: boolean;
}

export interface RouterItem extends Router, RouterNavigate {
  Component: (props?: any) => any;
  className: string;
  push: (state?: Record<string, unknown>) => void;
  replace: (state?: Record<string, unknown>) => void;
  clearTo: (state?: Record<string, unknown>) => void;
}

export type RoutersComonent = (props: {
  root: any;
  hash?: boolean;
  ignoreFull?: boolean;
}) => any;

export interface Routers {
  search: typeof historyProxy.search;
  nowUrl: typeof historyProxy.nowUrl;
  nowFullUrl: typeof historyProxy.nowFullUrl;
  listen: typeof historyProxy.listen;
  beforeChange: typeof historyProxy.beforeChange;
  searchUrlToObject: typeof historyProxy.searchUrlToObject;
  getStack: () => typeof historyProxy.stack;
  Routers: RoutersComonent;
  goBack: (state?: Record<string, unknown>) => void;
}

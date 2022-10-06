export interface RouterNavigate {
  push: (state?: Record<string, unknown>, ignoreAnime?: boolean) => void;
  pushSingle: (state?: Record<string, unknown>, ignoreAnime?: boolean) => void;
  replace: (state?: Record<string, unknown>, ignoreAnime?: boolean) => void;
  clearTo: (state?: Record<string, unknown>, ignoreAnime?: boolean) => void;
  path: string;
  sync?: boolean;
  preload?: string[];
  preloadAll?: boolean;
  Component: (props?: Record<string, unknown> & { sub?: string }) => any;
}

export interface Router {
  path: string;
  render: any;
  sync?: boolean;
  preload?: string[];
  preloadAll?: boolean;
}

export interface RouterItem extends Router, RouterNavigate {
  Component: (props?: any) => any;
  className: string;
  push: (state?: Record<string, unknown>, ignoreAnime?: boolean) => void;
  pushSingle: (state?: Record<string, unknown>, ignoreAnime?: boolean) => void;
  replace: (state?: Record<string, unknown>, ignoreAnime?: boolean) => void;
  clearTo: (state?: Record<string, unknown>, ignoreAnime?: boolean) => void;
}

export type RoutersComonent = (props: {
  root: any;
  hash?: boolean;
  ignoreFull?: boolean;
  virtualHistory?: boolean;
}) => any;

export interface Routers {
  Routers: RoutersComonent;
  goBack: (state?: Record<string, unknown>) => void;
}

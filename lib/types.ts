import { Stack } from "./historyProxy";

export interface NavigateOptions {
  animation?: "left" | "top" | "scale";
  duration?: number;
  [key: string]: unknown;
}

export interface RouterNavigate {
  push: (
    state?: Record<string, unknown> | null,
    meta?: NavigateOptions
  ) => void;
  replace: (
    state?: Record<string, unknown> | null,
    meta?: NavigateOptions
  ) => void;
  clearTo: (
    state?: Record<string, unknown> | null,
    meta?: NavigateOptions
  ) => void;
  async?: boolean;
  preload?: string[];
  preloadAll?: boolean;
}

export interface Router {
  path: string;
  render: any;
  async?: boolean;
  preload?: string[];
  preloadAll?: boolean;
}

export interface RouterItem extends Router, RouterNavigate {
  Component: (props?: any) => any;
  className: string;
  push: (
    state?: Record<string, unknown> | null,
    meta?: NavigateOptions
  ) => void;
  replace: (
    state?: Record<string, unknown> | null,
    meta?: NavigateOptions
  ) => void;
  clearTo: (
    state?: Record<string, unknown> | null,
    meta?: NavigateOptions
  ) => void;
}

export type RoutersComonent = (props: {
  root: any;
  hash?: boolean;
  ignoreFull?: boolean;
  virtualHistory?: boolean;
}) => any;

export interface Routers {
  Routers: RoutersComonent;
  goBack: (state?: Record<string, unknown>) => Stack | null;
}

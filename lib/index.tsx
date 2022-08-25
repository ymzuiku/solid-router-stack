import {
  Accessor,
  createRoot,
  createSignal,
  For,
  lazy,
  Setter,
  Suspense,
} from "solid-js";

import { historyProxy } from "./historyProxy";
import { stackOptions } from "./stackOptions";
import type {
  Router,
  RouterItem,
  RouterNavigate,
  Routers,
  RoutersComonent,
} from "./types";
export * from "./baseCss";
export * from "./createPropsSignal";
export * from "./setNavigationAnimation";
export { historyProxy };

const classNow = "solid-router-stack-now";
const classBefore = "solid-router-stack-before";
const classLeave = "solid-router-stack-leave";
const classAfter = "solid-router-stack-after";

export const createRouters = <T extends Record<string, Router>>(
  p: T
): Record<keyof T, RouterNavigate> & Routers => {
  const routers = { ...p } as any as Record<string, RouterItem>;
  const [stack, setStack] = createRoot(() =>
    createSignal<
      {
        url: Accessor<string>;
        setUrl: Setter<string>;
        path: Accessor<string>;
        setPath: Setter<string>;
        css: Accessor<string>;
        setCss: Setter<string>;
        top: Accessor<boolean>;
        setTop: Setter<boolean>;
        params: Accessor<Record<string, string>>;
        setParams: Setter<Record<string, string>>;
      }[]
    >([])
  );

  const pushStask = () => {
    const list = stack();
    const item = list[list.length - 1];
    if (item) {
      item.setTop(false);
    }

    const s = historyProxy.stack[historyProxy.stack.length - 1];
    const [url, setUrl] = createSignal(s.url);
    const [path, setPath] = createSignal(s.path);
    const [css, setCss] = createSignal("");
    const [top, setTop] = createSignal(true);
    const [params, setParams] = createSignal<Record<string, string>>(s.params);
    setStack([
      ...stack(),
      {
        url,
        setUrl,
        path,
        setPath,
        css,
        setCss,
        top,
        setTop,
        params,
        setParams,
      },
    ]);
  };
  const popStask = () => {
    const s = historyProxy.stack[historyProxy.stack.length - 1];
    const list = stack();
    if (list.length > 1) {
      const item = list[list.length - 2];
      item.setTop(true);
      item.setUrl(s.url);
      item.setPath(s.path);
      item.setParams(s.params);
      setStack([...list]);
    }
    setTimeout(() => {
      list.pop();
      setStack([...list]);
    }, stackOptions.navigationDuration);
  };
  const replaceStask = () => {
    const s = historyProxy.stack[historyProxy.stack.length - 1];
    const list = stack();
    const item = list[list.length - 1];
    item.setUrl(s.url);
    item.setParams(s.params);
    setStack([...list]);
  };

  const setNowStackClass = (className: string) => {
    if (stackOptions.navigationDuration == 0) {
      return;
    }
    const list = stack();
    const item = list[list.length - 1];
    if (item) {
      item.setCss(className);
    }
  };
  const setLastStackClass = (className: string) => {
    if (stackOptions.navigationDuration == 0) {
      return;
    }
    const list = stack();
    const item = list[list.length - 2];
    if (item) {
      item.setCss(className);
    }
  };

  let lastLen = 0;
  let ignoreAnime = false;
  historyProxy.listen(() => {
    const nowLen = historyProxy.stack.length;
    if (nowLen > lastLen) {
      // push
      pushStask();
      if (ignoreAnime) {
        setNowStackClass(classNow);
        setLastStackClass(classAfter);
      } else {
        setNowStackClass(classBefore);
        requestAnimationFrame(() => {
          setLastStackClass(classAfter);
          setNowStackClass(classNow);
        });
      }
    } else if (lastLen !== nowLen && nowLen >= 1) {
      // pop, 并且不是最后一个
      setNowStackClass(classLeave);
      setLastStackClass(classNow);
      popStask();
      if (ignoreAnime) {
        setNowStackClass(classNow);
      } else {
        setTimeout(() => {
          setNowStackClass(classNow);
        }, stackOptions.navigationDuration);
      }
    } else {
      // pop, 且是最后一个
      replaceStask();
      setNowStackClass(classNow);
    }

    lastLen = nowLen;

    if (ignoreAnime) {
      requestAnimationFrame(() => {
        ignoreAnime = false;
      });
    }
  });

  let isVirtualHistory = false;
  const goBack = (state?: Record<string, unknown>) => {
    if (isVirtualHistory) {
      historyProxy.gobackNotHistory(state);
    } else {
      historyProxy.goBack(state);
    }
  };

  const setItem = (item: RouterItem) => {
    if (item.async) {
      (item as any).Component = item.render;
    } else {
      (item as any).Component = lazy(item.render);
    }
    item.push = (state) => {
      if (isVirtualHistory) {
        historyProxy.pushNotHistory(historyProxy.parasmUrl(item.path, state));
      } else {
        historyProxy.push(historyProxy.parasmUrl(item.path, state));
      }
    };
    item.replace = (state) => {
      historyProxy.replace(historyProxy.parasmUrl(item.path, state));
    };
    item.clearTo = (state) => {
      ignoreAnime = true;
      historyProxy.clearTo(historyProxy.parasmUrl(item.path, state));
    };
  };
  setItem(stackOptions.notFound);
  Object.keys(routers).forEach((k) => {
    const item = routers[k];
    setItem(item);
  });

  const routerMaps: Record<string, RouterItem> = {};
  const needPreloadAll: RouterItem[] = [];
  Object.keys(routers).map((k) => {
    const router = routers[k];
    if (router) {
      routerMaps[router.path] = router;
      if (!router.async) {
        needPreloadAll.push(router);
      }
    }
  });

  function preload(router: RouterItem) {
    if (router.preloadAll) {
      needPreloadAll.forEach((r) => {
        r.render();
      });
    } else if (router.preload && router.preload.length) {
      // 200 毫秒后预加载其他页面
      setTimeout(() => {
        router.preload!.forEach((k) => {
          const r = routers[k];
          if (r && !r.async) {
            r.render();
          }
        });
      }, 200);
    }
  }

  const RoutersComonent: RoutersComonent = ({
    root,
    hash,
    ignoreFull,
    virtualHistory,
  }) => {
    historyProxy.useHash = !!hash;
    isVirtualHistory = !!virtualHistory;

    const nowUrl = historyProxy.nowUrl();
    const nowParams = historyProxy.searchUrlToObject(historyProxy.nowFullUrl());
    ignoreAnime = true;

    if (nowUrl !== "/" && nowUrl !== root.path) {
      root.push();
      const nowRouter = routerMaps[nowUrl] || stackOptions.notFound;
      ignoreAnime = true;
      nowRouter.push({ ...nowParams });
    } else {
      root.push(nowParams);
    }

    const [getW, setW] = createSignal(
      typeof window !== "undefined" ? window.innerWidth : 0
    );
    const [getH, setH] = createSignal(
      typeof window !== "undefined" ? window.innerHeight : 0
    );

    if (!ignoreFull) {
      if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
          setW(window.innerWidth);
          setH(window.innerHeight);
        });
      }
    }
    return (
      <For each={stack()}>
        {(item, i) => {
          const router = routerMaps[item.path()] || stackOptions.notFound;
          preload(router);
          const Component = router.Component;
          return (
            <div
              data-path={item.path}
              class={item.css()}
              style={{
                "pointer-events": item.top() ? "auto" : "none",
                position: "fixed",
                "z-index": i() * 10,
                top: "0px",
                left: "0px",
                width: ignoreFull ? void 0 : getW() + "px",
                height: ignoreFull ? void 0 : getH() + "px",
                background: "inherit",
              }}
            >
              {router.async ? (
                <Component stackTop={item.top()} {...item.params()} />
              ) : (
                <Suspense fallback={stackOptions.fallback}>
                  <Component stackTop={item.top()} {...item.params()} />
                </Suspense>
              )}
            </div>
          );
        }}
      </For>
    );
  };

  return {
    ...routers,
    goBack,
    Routers: RoutersComonent,
  } as any;
};

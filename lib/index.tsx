import {
  Accessor,
  createRoot,
  createSignal,
  For,
  lazy,
  Setter,
} from "solid-js";

import { historyProxy, Stack } from "./historyProxy";
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
export { stackOptions };

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
        stackShow: Accessor<boolean>;
        setStackShow: Setter<boolean>;
        // url: Accessor<string>;
        // setUrl: Setter<string>;
        path: Accessor<string>;
        setPath: Setter<string>;
        css: Accessor<string>;
        setCss: Setter<string>;
        stackTop: Accessor<boolean>;
        setStackTop: Setter<boolean>;
        params: Accessor<Record<string, string>>;
        setParams: Setter<Record<string, string>>;
      }[]
    >([])
  );

  const createStack = (s: Stack) => {
    const [path, setPath] = createSignal(s.path);
    const [css, setCss] = createSignal("");
    const [stackTop, setStackTop] = createSignal(true);
    const [stackShow, setStackShow] = createSignal(false);
    const [params, setParams] = createSignal<Record<string, string>>(s.params);
    return {
      path,
      setPath,
      css,
      setCss,
      stackTop,
      setStackTop,
      params,
      setParams,
      stackShow,
      setStackShow,
    };
  };

  const pushSingleStask = () => {
    const list = stack();
    const item = list[list.length - 1];
    if (item) {
      item.setStackTop(false);
    }

    const s = historyProxy.stack[historyProxy.stack.length - 1];
    const nextStack = createStack(s);
    setStack([...stack().filter((v) => v.path() !== s.path), nextStack]);
  };

  const pushStask = () => {
    const list = stack();
    const item = list[list.length - 1];
    if (item) {
      item.setStackTop(false);
    }

    const s = historyProxy.stack[historyProxy.stack.length - 1];
    const nextStack = createStack(s);
    setStack([...stack(), nextStack]);
  };
  const popStask = () => {
    const s = historyProxy.stack[historyProxy.stack.length - 1];
    const list = stack();
    if (list.length > 1) {
      const item = list[list.length - 2];
      item.setStackTop(true);
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
    const list = stack();
    list.pop()!;
    const s = historyProxy.stack[historyProxy.stack.length - 1];
    const nextStack = createStack(s);
    nextStack.setStackShow(true);
    setStack([...list, nextStack]);
  };
  const clearStask = () => {
    setStack([]);
    pushStask();
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

  const setNowShow = (isShow: boolean) => {
    const list = stack();
    const item = list[list.length - 1];
    if (item) {
      item.setStackShow(isShow);
    }
  };
  const setLastShow = (isShow: boolean) => {
    const list = stack();
    const item = list[list.length - 2];
    if (item) {
      item.setStackShow(isShow);
    }
  };

  let lastLen = 0;
  let ignoreAnime = false;
  historyProxy.listen((_path, statsType) => {
    const nowLen = historyProxy.stack.length;
    if (statsType === "pushSingleState") {
      pushSingleStask();
      if (ignoreAnime) {
        setNowShow(true);
        setLastShow(false);
        setNowStackClass(classNow);
        setLastStackClass(classAfter);
      } else {
        setNowShow(true);
        setTimeout(() => {
          setLastShow(false);
        }, stackOptions.navigationDuration);
        setNowStackClass(classBefore);
        requestAnimationFrame(() => {
          setLastStackClass(classAfter);
          setNowStackClass(classNow);
        });
      }
    } else if (statsType === "clearState") {
      clearStask();
      if (ignoreAnime) {
        setNowShow(true);
        setLastShow(false);
        setNowStackClass(classNow);
        setLastStackClass(classAfter);
      } else {
        setNowShow(true);
        setTimeout(() => {
          setLastShow(false);
        }, stackOptions.navigationDuration);
        setNowStackClass(classBefore);
        requestAnimationFrame(() => {
          setLastStackClass(classAfter);
          setNowStackClass(classNow);
        });
      }
    } else if (nowLen > lastLen) {
      // push
      pushStask();
      if (ignoreAnime) {
        setNowShow(true);
        setLastShow(false);
        setNowStackClass(classNow);
        setLastStackClass(classAfter);
      } else {
        setNowShow(true);
        setTimeout(() => {
          setLastShow(false);
        }, stackOptions.navigationDuration);
        setNowStackClass(classBefore);
        requestAnimationFrame(() => {
          setLastStackClass(classAfter);
          setNowStackClass(classNow);
        });
      }
    } else if (lastLen !== nowLen && nowLen >= 1) {
      setNowShow(true);
      setLastShow(true);
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
      setNowShow(true);
      setLastShow(true);
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
  const goBack = (
    state?: Record<string, unknown>,
    tempIgnoreAnime?: boolean
  ) => {
    if (tempIgnoreAnime) {
      ignoreAnime = true;
    }
    historyProxy.goBack(state, isVirtualHistory);
  };

  const setItem = (item: RouterItem) => {
    if (item.async) {
      (item as any).Component = item.render;
    } else {
      const LazyComponent = lazy(item.render);
      (item as any).Component = (p: any) => {
        return <LazyComponent {...p} />;
      };
    }
    item.push = (state, tempIgnoreAnime) => {
      if (tempIgnoreAnime) {
        ignoreAnime = true;
      }
      historyProxy.push(
        historyProxy.parasmUrl(item.path, state),
        isVirtualHistory
      );
    };
    item.pushSingle = (state, tempIgnoreAnime) => {
      if (tempIgnoreAnime) {
        ignoreAnime = true;
      }
      historyProxy.pushSingle(historyProxy.parasmUrl(item.path, state));
    };
    item.replace = (state, tempIgnoreAnime) => {
      if (tempIgnoreAnime) {
        ignoreAnime = true;
      }
      historyProxy.replace(historyProxy.parasmUrl(item.path, state));
    };
    item.clearTo = (state, tempIgnoreAnime) => {
      if (tempIgnoreAnime) {
        ignoreAnime = true;
      }
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
      if (!router.sync) {
        needPreloadAll.push(router);
      }
    }
  });

  function preload(router: RouterItem) {
    if (router.preloadAll) {
      needPreloadAll.forEach((r) => {
        r.render().then((v: any) => {
          r.Component = v.default;
          r.sync = true;
        });
      });
    } else if (router.preload && router.preload.length) {
      // 200 毫秒后预加载其他页面
      setTimeout(() => {
        router.preload!.forEach((k) => {
          const r = routers[k];
          if (r && !r.sync) {
            r.render().then((v: any) => {
              r.Component = v.default;
              r.sync = true;
            });
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
      root.push(void 0, true);
      const nowRouter = routerMaps[nowUrl] || stackOptions.notFound;
      nowRouter.push({ ...nowParams });
    } else {
      root.push(nowParams, true);
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
              data-path={item.path()}
              classList={{
                [item.css()]: true,
                [stackOptions.className]: true,
              }}
              style={{
                "pointer-events": item.stackTop() ? "auto" : "none",
                position: "fixed",
                "z-index": i() * 10,
                top: "0px",
                left: "0px",
                width: ignoreFull ? void 0 : getW() + "px",
                height: ignoreFull ? void 0 : getH() + "px",
              }}
            >
              <Component
                stackLength={stack().length}
                stackTop={item.stackTop()}
                stackShow={item.stackShow()}
                {...item.params()}
              />
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

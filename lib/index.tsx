import {
  createRoot,
  createSignal,
  For,
  lazy,
  Suspense,
  SuspenseList,
} from "solid-js";
import { createStore } from "solid-js/store";
import { historyProxy, Stack } from "./historyProxy";
import { isIOSWechat } from "./isIOSWechat";
import { stackOptions } from "./stackOptions";
import type {
  Router,
  RouterItem,
  RouterNavigate,
  Routers,
  RoutersComonent,
} from "./types";
export * from "./baseCss";
export * from "./setNavigationAnimation";

const classNow = "solid-router-stack-now";
const classBefore = "solid-router-stack-before";
const classLeave = "solid-router-stack-leave";
const classAfter = "solid-router-stack-after";

export const createRouters = <T extends Record<string, Router>>(
  p: T
): Record<keyof T, RouterNavigate> & Routers => {
  const routers = { ...p } as any as Record<string, RouterItem>;
  const [stack, setStack] = createRoot(() =>
    createStore<{
      list: (Stack & { className?: string; stackTop?: boolean })[];
    }>({
      list: historyProxy.stack,
    })
  );

  const setNowStackClass = (className: string) => {
    setStack("list", stack.list.length - 1, { className } as any);
  };
  const setLastStackClass = (className: string) => {
    if (stack.list.length > 1) {
      setStack("list", stack.list.length - 2, { className } as any);
    }
  };

  const setStackTop = () => {
    const lastReal = historyProxy.stack[historyProxy.stack.length - 1];
    const nextParams = lastReal
      ? { ...historyProxy.searchUrlToObject(lastReal.url) }
      : {};
    setStack("list", stack.list.length - 1, "params", nextParams);
  };

  let lastLen = 0;
  let ignoreAnime = false;
  historyProxy.listen(() => {
    const nowLen = historyProxy.stack.length;
    if (stackOptions.navigationDuration > 0) {
      if (nowLen > lastLen) {
        // push
        setStack("list", [...historyProxy.stack]);
        setStack("list", stack.list.length - 1, { stackTop: true } as any);
        if (stack.list.length > 1) {
          setStack("list", stack.list.length - 2, { stackTop: false } as any);
        }
        if (ignoreAnime) {
          setNowStackClass(classNow);
          setLastStackClass(classAfter);
        } else {
          setNowStackClass(classBefore);
          requestAnimationFrame(() => {
            setLastStackClass(classAfter);
            setNowStackClass(classNow);
            setStackTop();
          });
        }
      } else if (lastLen !== nowLen && nowLen >= 1) {
        // pop, 并且不是最后一个
        setStack("list", stack.list.length - 2, { stackTop: true } as any);
        if (stack.list.length > 2) {
          setStack("list", stack.list.length - 3, { stackTop: false } as any);
        }
        setNowStackClass(classLeave);
        setLastStackClass(classNow);
        if (ignoreAnime) {
          setStack("list", [...historyProxy.stack]);
          setStack("list", stack.list.length - 1, { stackTop: true } as any);
        } else {
          setTimeout(() => {
            setStack("list", [...historyProxy.stack]);
            setStack("list", stack.list.length - 1, { stackTop: true } as any);
            setNowStackClass(classNow);
            setStackTop();
          }, stackOptions.navigationDuration);
        }
      } else {
        // pop, 且是最后一个
        setStack("list", [...historyProxy.stack]);
        setStack("list", stack.list.length - 1, { stackTop: true } as any);
        if (stack.list.length > 1) {
          setStack("list", stack.list.length - 2, { stackTop: false } as any);
        }
        setNowStackClass(classNow);
        setStackTop();
      }
    } else {
      setStack("list", [...historyProxy.stack]);
      setStack("list", stack.list.length - 1, { stackTop: true } as any);
      if (stack.list.length > 1) {
        setStack("list", stack.list.length - 2, { stackTop: false } as any);
      }
      setNowStackClass(classNow);
      setStackTop();
    }

    lastLen = nowLen;

    if (ignoreAnime) {
      requestAnimationFrame(() => {
        ignoreAnime = false;
      });
    }
  });

  const goBack = (state?: Record<string, unknown>) => {
    if (isIOSWechat()) {
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
      if (isIOSWechat()) {
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

  const RoutersComonent: RoutersComonent = ({ root, hash, ignoreFull }) => {
    historyProxy.useHash = !!hash;
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
      <div style={{ background: "inherit" }}>
        <SuspenseList revealOrder="forwards" tail="collapsed">
          <For each={stack.list}>
            {(item, i) => {
              const router = routerMaps[item.path] || stackOptions.notFound;
              preload(router);
              const Component = router.Component;

              return (
                <div
                  data-path={item.path}
                  class={item.className}
                  style={{
                    "pointer-events": item.stackTop ? "auto" : "none",
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
                    <Component stackTop={item.stackTop} {...item.params} />
                  ) : (
                    <Suspense fallback={stackOptions.fallback}>
                      <Component stackTop={item.stackTop} {...item.params} />
                    </Suspense>
                  )}
                </div>
              );
            }}
          </For>
        </SuspenseList>
      </div>
    );
  };

  return {
    ...routers,
    goBack,
    history: {
      search: historyProxy.search,
      nowUrl: historyProxy.nowUrl,
      nowFullUrl: historyProxy.nowFullUrl,
      searchUrlToObject: historyProxy.searchUrlToObject,
      listen: historyProxy.listen,
      beforeChange: historyProxy.beforeChange,
      getStack: () => historyProxy.stack,
    },
    Routers: RoutersComonent,
  } as any;
};

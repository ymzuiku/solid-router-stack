import { createRoot, createSignal, For, lazy } from "solid-js";
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
import { useAnimationNavigation } from "./useAnimationNavigation";

export { useAnimationNavigation };

function fixUrl(url: string, state?: Record<string, unknown>) {
  if (state) {
    return (
      stackOptions.prefix +
      url +
      "?" +
      new URLSearchParams(state as any).toString()
    );
  }
  return stackOptions.prefix + url;
}

export const createRouter = <T extends Record<string, Router>>(
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

  let lastLen = 0;
  let ignoreAnime = false;
  historyProxy.listen(() => {
    const nowLen = historyProxy.stack.length;
    const last = historyProxy.stack[historyProxy.stack.length - 1];
    if (stackOptions.navigationDuration > 0) {
      if (nowLen > lastLen) {
        // push
        setStack("list", [...historyProxy.stack]);
        setStack("list", stack.list.length - 1, { stackTop: true } as any);
        if (stack.list.length > 1) {
          setStack("list", stack.list.length - 2, { stackTop: false } as any);
        }
        if (ignoreAnime) {
          setNowStackClass(stackOptions.classNow);
          setLastStackClass(stackOptions.classAfter);
        } else {
          setNowStackClass(stackOptions.classBefore);
          requestAnimationFrame(() => {
            setNowStackClass(stackOptions.classNow);
            setLastStackClass(stackOptions.classAfter);
          });
        }
      } else if (lastLen !== nowLen) {
        // pop, 并且不是最后一个
        setStack("list", stack.list.length - 2, { stackTop: true } as any);
        if (stack.list.length > 2) {
          setStack("list", stack.list.length - 3, { stackTop: false } as any);
        }
        setNowStackClass(stackOptions.classBefore);
        setLastStackClass(stackOptions.classNow);
        if (ignoreAnime) {
          setStack("list", [...historyProxy.stack]);
        } else {
          setTimeout(() => {
            setStack("list", [...historyProxy.stack]);
          }, stackOptions.navigationDuration);
        }
      } else {
        // pop, 且是最后一个
        setNowStackClass(stackOptions.classNow);
        setLastStackClass(stackOptions.classAfter);
        setStack("list", [...historyProxy.stack]);
        setStack("list", stack.list.length - 1, { stackTop: true } as any);
        if (stack.list.length > 1) {
          setStack("list", stack.list.length - 2, { stackTop: false } as any);
        }
      }
    } else {
      setStack("list", [...historyProxy.stack]);
      setStack("list", stack.list.length - 1, { stackTop: true } as any);
      if (stack.list.length > 1) {
        setStack("list", stack.list.length - 2, { stackTop: false } as any);
      }
    }

    lastLen = nowLen;
    if (last.tempData) {
      setStack("list", historyProxy.stack.length - 1, {
        params: { ...last.params },
        tempData: { ...last.tempData },
      } as any);
    }
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
        historyProxy.pushNotHistory(fixUrl(item.path, state));
      } else {
        historyProxy.push(fixUrl(item.path, state));
      }
    };
    item.replace = (state) => {
      historyProxy.replace(fixUrl(item.path, state));
    };
    item.clearTo = (state) => {
      historyProxy.clearTo(fixUrl(item.path, state));
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
      routerMaps[stackOptions.prefix + router.path] = router;
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
    } else if (router.preload) {
      // 200 毫秒后预加载其他页面
      setTimeout(() => {
        const list = router.preload!() as RouterItem[];
        list.forEach((r) => {
          if (!r.async) {
            r.render();
          }
        });
      }, 200);
    }
  }

  const RoutersComonent: RoutersComonent = ({ root }) => {
    const nowUrl = historyProxy.nowUrl();
    const nowParams = historyProxy.searchUrlToObject(
      stackOptions.prefix + historyProxy.nowFullUrl()
    );
    ignoreAnime = true;
    root.push();
    if (nowUrl !== "/" && nowUrl !== root.path) {
      const nowRouter =
        routerMaps[stackOptions.prefix + nowUrl] || stackOptions.notFound;
      ignoreAnime = true;
      nowRouter.push({ ...nowParams, stackAnime: "noPush" });
    }

    const [getW, setW] = createSignal(
      typeof window !== "undefined" ? window.innerWidth : 0
    );
    const [getH, setH] = createSignal(
      typeof window !== "undefined" ? window.innerHeight : 0
    );
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setW(window.innerWidth);
        setH(window.innerHeight);
      });
    }

    return (
      <>
        <For each={stack.list}>
          {(item, i) => {
            const router = routerMaps[item.path] || stackOptions.notFound;
            preload(router);

            return (
              <div
                data-path={item.path}
                class={item.className}
                style={{
                  "pointer-events":
                    i() < stack.list.length - 1 ? "none" : "auto",
                  position: "fixed",
                  "z-index": i() * 10,
                  top: "0px",
                  left: "0px",
                  width: getW() + "px",
                  height: getH() + "px",
                  background: "#fff",
                }}
              >
                <router.Component
                  stackTop={item.stackTop}
                  {...item.params}
                  {...item.tempData}
                />
              </div>
            );
          }}
        </For>
      </>
    );
  };

  return {
    ...routers,
    goBack,
    search: historyProxy.search,
    nowUrl: historyProxy.nowUrl,
    nowFullUrl: historyProxy.nowFullUrl,
    searchUrlToObject: historyProxy.searchUrlToObject,
    listen: historyProxy.listen,
    beforeChange: historyProxy.beforeChange,
    getStack: () => historyProxy.stack,
    Routers: RoutersComonent,
  } as any;
};

import {
  Accessor,
  createRoot,
  createSignal,
  For,
  lazy,
  Setter,
  Suspense,
} from "solid-js";

import { historyProxy, Stack } from "./historyProxy";
import "./setNavigationAnimation";
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
export { historyProxy };

const classNow = "solid-router-stack-now-";
const classBefore = "solid-router-stack-before-";
const classLeave = "solid-router-stack-leave-";
const classAfter = "solid-router-stack-after-";

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
        duration: Accessor<number>;
        setDuration: Setter<number>;
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
    const [duration, setDuration] = createSignal(0);
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
        duration,
        setDuration,
      },
    ]);
  };

  const popStask = (duration: number) => {
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
    }, duration);
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
  const setDurationStyle = (duration: number) => {
    if (stackOptions.navigationDuration == 0) {
      return;
    }
    const list = stack();
    const item1 = list[list.length - 1];
    if (item1) {
      item1.setDuration(duration);
    }
    const item2 = list[list.length - 2];
    if (item2) {
      item2.setDuration(duration);
    }
  };

  let lastLen = 0;

  historyProxy.listen((type, stack, popStack) => {
    const nowLen = historyProxy.stack.length;
    const isBack = popStack && (type === "popstate" || type === "backState");
    const animation = isBack ? popStack.meta.animation : stack.meta.animation;
    const duration =
      ((isBack ? popStack.meta.duration : stack.meta.duration) as number) || 0;
    if (nowLen > lastLen) {
      // push
      pushStask();
      setDurationStyle(duration);
      if (!animation || !duration) {
        setNowStackClass("");
      } else {
        setNowStackClass(classBefore + animation);
        requestAnimationFrame(() => {
          setLastStackClass(classAfter + animation);
          setNowStackClass(classNow + animation);
        });
      }
    } else if (lastLen !== nowLen && nowLen >= 1) {
      // pop, 并且不是最后一个
      popStask(duration);
      setDurationStyle(duration);
      if (!animation || !duration) {
        setNowStackClass("");
      } else {
        setNowStackClass(classLeave + animation);
        setLastStackClass(classNow + animation);
        setTimeout(() => {
          setNowStackClass(classNow + animation);
        }, duration);
      }
    } else {
      // pop, 且是最后一个
      replaceStask();
      setDurationStyle(0);
      setNowStackClass("");
    }

    lastLen = nowLen;
  });

  let isVirtualHistory = false;
  const goBack = (state?: Record<string, unknown>) => {
    let stack: Stack | null;
    if (isVirtualHistory) {
      stack = historyProxy.gobackNotHistory(state);
    } else {
      stack = historyProxy.goBack(state);
    }
    if (stack && state) {
      stack.meta.animation = state.animation;
      stack.meta.durtaion = state.durtaion;
    }
    return stack;
  };

  const setItem = (item: RouterItem) => {
    if (item.async) {
      (item as any).Component = item.render;
    } else {
      (item as any).Component = lazy(item.render);
    }
    item.push = async (state, meta) => {
      let stack: Stack;
      if (isVirtualHistory) {
        stack = await historyProxy.pushNotHistory(
          state ? historyProxy.parasmUrl(item.path, state) : item.path,
          meta
        );
      } else {
        stack = await historyProxy.push(
          state ? historyProxy.parasmUrl(item.path, state) : item.path,
          meta
        );
      }
      if (state) {
        stack.meta.animation = state.animation;
        stack.meta.durtaion = state.duration;
      }
      return stack;
    };
    item.replace = async (state, meta) => {
      const stack = await historyProxy.replace(
        state ? historyProxy.parasmUrl(item.path, state) : item.path,
        meta
      );
      if (state) {
        stack.meta.animation = state.animation;
        stack.meta.durtaion = state.duration;
      }
      return stack;
    };
    item.clearTo = async (state, meta) => {
      const stack = await historyProxy.clearTo(
        state ? historyProxy.parasmUrl(item.path, state) : item.path,
        meta
      );
      if (state) {
        stack.meta.animation = state.animation;
        stack.meta.durtaion = state.duration;
      }
      return stack;
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

    if (nowUrl !== "/" && nowUrl !== root.path) {
      root.push();
      const nowRouter = routerMaps[nowUrl] || stackOptions.notFound;
      nowRouter.push({
        params: nowParams,
      });
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
          const getDuration = () => {
            const duration = item.duration();
            if (duration) {
              return duration + "ms";
            }
            return "none";
          };
          return (
            <div
              data-path={item.path()}
              class={item.css()}
              style={{
                "pointer-events": item.top() ? "auto" : "none",
                position: "fixed",
                "z-index": i() * 10,
                top: "0px",
                left: "0px",
                width: ignoreFull ? void 0 : getW() + "px",
                height: ignoreFull ? void 0 : getH() + "px",
                "transition-duration": getDuration(),
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

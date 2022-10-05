// 此文件要保持存粹，仅仅做 history 和 stack 的管理和事件监听

// popstate: 修改url，点击返回
type State =
  | "popstate"
  | "pushState"
  | "pushSingleState"
  | "replaceState"
  | "backState"
  | "clearState";
export interface Stack {
  url: string;
  path: string;
  time: number;
  index: number;
  params: Record<string, string>;
}
type Event = (path: string, typed: State, stack: Stack[]) => void;

const events = [] as Event[];

export const listen = (event: Event) => {
  events.push(event);
};

type BeforeEvent = (url: string, path: string) => string | Promise<string>;
const beforeChangeEvent = [] as BeforeEvent[];

export const beforeChange = (event: BeforeEvent) => {
  beforeChangeEvent.push(event);
};

const newStack = (url: string): Stack => {
  if (!url) {
    url = nowFullUrl();
  }
  return {
    url,
    path: url.split("?")[0],
    params: searchUrlToObject(url) || {},
    time: Date.now(),
    index: historyProxy.stack.length,
  };
};

[
  "popstate",
  "pushState",
  "pushSingleState",
  "replaceState",
  "backState",
  "clearState",
].forEach((v) => {
  window.addEventListener(v, () => {
    let url = nowUrl();
    if (v === "popstate") {
      const oldStack = historyProxy.stack[historyProxy.stack.length - 2];
      if (!oldStack || url !== oldStack.path) {
        historyProxy.stack.pop();
        historyProxy.stack.push(newStack(""));
      } else {
        historyProxy.stack.pop();
        if (historyProxy.stack.length === 0) {
          const stack = newStack("");
          historyProxy.stack.push(stack);
        }
      }
    }
    const lastStack = historyProxy.stack[historyProxy.stack.length - 1];
    events.forEach((e) => {
      e(lastStack ? lastStack.path : "", v as State, historyProxy.stack);
    });
  });
});

const baseGoBack = (data?: Record<string, unknown>) => {
  const len = historyProxy.stack.length;
  if (len == 1) {
    return "";
  }
  historyProxy.stack.pop();
  if (!historyProxy.stack.length) {
    historyProxy.stack.push(newStack(""));
  }
  let stack = historyProxy.stack[historyProxy.stack.length - 1];

  let url = stack.path;
  if (historyProxy.useHash) {
    url = "/#" + stack.path;
  }
  url = parasmUrl(url, {
    ...searchUrlToObject(stack.url),
    ...data,
  });
  stack.params = searchUrlToObject(url) || {};
  stack.url = url;
  return url;
};

const push = async (url: string, ignoreHistory?: boolean) => {
  for (const e of beforeChangeEvent) {
    url = await Promise.resolve(e(url, urlToPath(url)));
  }
  historyProxy.stack.push(newStack(url));
  if (historyProxy.useHash) {
    url = "/#" + url;
  }
  history.pushState(null, "", url);
  if (ignoreHistory) {
    window.dispatchEvent(new Event("replaceState"));
  } else {
    window.dispatchEvent(new Event("pushState"));
  }
};

// push a page, if have old page, remove old
const pushSingle = async (url: string) => {
  for (const e of beforeChangeEvent) {
    url = await Promise.resolve(e(url, urlToPath(url)));
  }
  const stack = newStack(url);
  historyProxy.stack = historyProxy.stack.filter((v) => {
    return v.path !== stack.path;
  });
  historyProxy.stack.push(stack);
  if (historyProxy.useHash) {
    url = "/#" + url;
  }
  history.pushState(null, "", url);
  window.dispatchEvent(new Event("pushSingleState"));
};

const replace = async (url: string) => {
  for (const e of beforeChangeEvent) {
    url = await Promise.resolve(e(url, urlToPath(url)));
  }
  if (historyProxy.stack.length > 0) {
    historyProxy.stack.pop();
  }
  historyProxy.stack.push(newStack(url));
  if (historyProxy.useHash) {
    url = "/#" + url;
  }

  history.replaceState(null, "", url);
  window.dispatchEvent(new Event("replaceState"));
};

const goBack = (data?: Record<string, unknown>, ignoreHistory?: boolean) => {
  const url = baseGoBack(data);
  if (url == "") {
    return;
  }
  history.replaceState(null, "", url);
  if (ignoreHistory) {
    window.dispatchEvent(new Event("replaceState"));
  } else {
    window.dispatchEvent(new Event("backState"));
  }
};

const clearTo = (url: string) => {
  historyProxy.stack = [newStack(url)];
  history.replaceState(null, "", url);
  window.dispatchEvent(new Event("clearState"));
};

function search() {
  const [url1, url2] = location.href.split("#");
  return new URLSearchParams(
    [url1.split("?")[1], url2.split("?")[1]].join("&")
  );
}

function urlToPath(url: string) {
  return url.split("?")[0];
}

function nowUrl() {
  if (!location.hash) {
    return "/";
  }
  const list = location.hash.split("#");
  if (list.length < 2) {
    return "/";
  }

  return list[1].split("?")[0];
}
function nowFullUrl() {
  if (!location.hash) {
    return "/";
  }
  const list = location.hash.split("#");
  if (list.length < 2) {
    return "/";
  }

  return list[1];
}

function parasmUrl(url: string, state?: Record<string, unknown>) {
  if (state) {
    const realState: Record<string, unknown> = {};
    Object.keys(state).forEach((k) => {
      const v = state[k];
      if (v !== void 0 && v !== "") {
        realState[k] = v;
      }
    });
    const p = new URLSearchParams(realState as any).toString();
    if (p) {
      return url + "?" + p;
    }
    return url;
  }
  return url;
}

function searchUrlToObject(url: string): Record<string, string> | undefined {
  const [url1, url2] = url.split("#");
  const obj = new URLSearchParams(
    [url1.split("?")[1], url2 ? url2.split("?")[1] : ""].join("&")
  );
  const out: Record<string, string> = {};
  let hasProps = false;
  for (const [k, v] of obj.entries()) {
    hasProps = true;
    if (v !== void 0 && v !== "") {
      out[k] = v;
    }
  }
  if (!hasProps) {
    return void 0;
  }
  return out;
}

export const historyProxy = {
  search,
  nowUrl,
  urlToPath,
  nowFullUrl,
  push,
  pushSingle,
  replace,
  goBack,
  clearTo,
  listen,
  beforeChange,
  searchUrlToObject,
  parasmUrl,
  /** 当路径返回路径为最后一个时，可以修改返回路径 */
  onLastBack: (stack: Stack): string => {
    return stack.url;
  },
  newStack,
  stack: [] as Stack[],
  useHash: false,
};

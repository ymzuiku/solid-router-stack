// 此文件要保持存粹，仅仅做 history 和 stack 的管理和事件监听

// popstate: 修改url，点击返回
type State = "popstate" | "pushState" | "replaceState" | "backState";
export interface Stack {
  url: string;
  path: string;
  time: number;
  index: number;
  params: Record<string, string>;
  // tempData 是一种临时数据，当页面返回时可以带会，如果发起push，replace，都会清理历史 tempData
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tempData?: Record<string, any>;
}
type Event = (path: string, typed: State, stack: Stack[]) => void;

const events = [] as Event[];

export const listen = (event: Event) => {
  events.push(event);
};

type BeforeEvent = (path: string) => string;
const beforeChangeEvent = [] as BeforeEvent[];

export const beforeChange = (event: BeforeEvent) => {
  beforeChangeEvent.push(event);
};

["popstate", "pushState", "replaceState", "backState"].forEach((v) => {
  window.addEventListener(v, () => {
    if (v === "popstate") {
      historyProxy.stack.pop();
    }
    const lastStack = historyProxy.stack[historyProxy.stack.length - 1];
    events.forEach((e) => {
      e(lastStack ? lastStack.path : "", v as State, historyProxy.stack);
    });
  });
});

const newStack = (url: string): Stack => {
  return {
    url,
    path: url.split("?")[0],
    params: searchUrlToObject(url) || {},
    time: Date.now(),
    index: historyProxy.stack.length,
  };
};

const push = (url: string) => {
  beforeChangeEvent.forEach((e) => {
    url = e(url);
  });
  historyProxy.stack.forEach((s) => {
    s.tempData = void 0;
  });
  historyProxy.stack.push(newStack(url));
  if (historyProxy.useHash) {
    url = "/#" + url;
  }
  history.pushState(null, "", url);
  window.dispatchEvent(new Event("pushState"));
};

const pushNotHistory = (url: string) => {
  beforeChangeEvent.forEach((e) => {
    url = e(url);
  });
  historyProxy.stack.forEach((s) => {
    s.tempData = void 0;
  });
  historyProxy.stack.push(newStack(url));
  if (historyProxy.useHash) {
    url = "/#" + url;
  }
  history.replaceState(null, "", url);
  window.dispatchEvent(new Event("replaceState"));
};

const replace = (url: string, data?: Record<string, unknown>) => {
  beforeChangeEvent.forEach((e) => {
    url = e(url);
  });
  historyProxy.stack.forEach((s) => {
    s.tempData = void 0;
  });
  if (historyProxy.stack.length > 0) {
    historyProxy.stack.pop();
  }
  historyProxy.stack.push(newStack(url));
  if (historyProxy.useHash) {
    url = "/#" + url;
  }
  if (data) {
    const last = historyProxy.stack[historyProxy.stack.length - 1];
    last.tempData = data;
  }
  history.replaceState(null, "", url);
  window.dispatchEvent(new Event("replaceState"));
};

const baseGoBack = (data?: Record<string, unknown>) => {
  const len = historyProxy.stack.length;
  if (len > 1) {
    historyProxy.stack.pop();
  }
  let stack = historyProxy.stack[historyProxy.stack.length - 1];
  if (len === 1) {
    const oldTime = stack.time;
    const oldUrl = stack.url;
    stack = newStack(historyProxy.onLastBack(stack));
    if (oldUrl === stack.url) {
      stack.time = oldTime;
    }
    historyProxy.stack[historyProxy.stack.length - 1] = stack;
  }

  let url = stack.url;
  if (historyProxy.useHash) {
    url = "/#" + stack.url;
  }
  if (data) {
    historyProxy.stack[historyProxy.stack.length - 1].tempData = data;
  }
  return url;
};

const goBack = (data?: Record<string, unknown>) => {
  const url = baseGoBack(data);
  history.replaceState(null, "", url);
  window.dispatchEvent(new Event("backState"));
};

const gobackNotHistory = (data?: Record<string, unknown>) => {
  const url = baseGoBack(data);
  history.replaceState(null, "", url);
  window.dispatchEvent(new Event("replaceState"));
};

const clearTo = (url: string) => {
  historyProxy.stack = [newStack(url)];
  replace(url);
};

function search() {
  const [url1, url2] = location.href.split("#");
  return new URLSearchParams(
    [url1.split("?")[1], url2.split("?")[1]].join("&")
  );
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

function searchUrlToObject(url: string): Record<string, string> {
  const [url1, url2] = url.split("#");
  const obj = new URLSearchParams(
    [url1.split("?")[1], url2.split("?")[1]].join("&")
  );
  const out: Record<string, string> = {};
  for (const [k, v] of obj.entries()) {
    out[k] = v;
  }
  return out;
}

export const historyProxy = {
  search,
  nowUrl,
  nowFullUrl,
  push,
  pushNotHistory,
  replace,
  goBack,
  gobackNotHistory,
  clearTo,
  listen,
  beforeChange,
  searchUrlToObject,
  /** 当路径返回路径为最后一个时，可以修改返回路径 */
  onLastBack: (stack: Stack): string => {
    return stack.url;
  },
  newStack,
  stack: [] as Stack[],
  useHash: false,
};

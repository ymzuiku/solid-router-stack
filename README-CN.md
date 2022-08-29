# 🏂🏽 solid-router-stack

## 桌面端路由和移动端路由的区别

桌面端路由的特点是仅渲染当前匹配的路由, 而移动端路由的特点是页面是一个栈, 历史页面会进行保留.

这款 solid-router-stack 就是使用这种机制, 它可以减少返回页面后, 需要重绘制当前页面的开销. 并且可以监听如果栈下的页面回到前台, 进行一系列的事件处理.

[View DEMO](https://solid-router-stack.gewulian.com)


特性:

- 类似移动端导航, 保留页面堆栈在DOM中
- 自动懒加载页面
- 当你进入到指定页面时, 轻松的预加载相关页面
- 自动读取 URL params 到页面的 Props 中


# 快速开始

创建一个路由列表, 渲染到视图中:

```tsx
import { render } from "solid-js/web";
import { createRouter } from "solid-router-stack";
import Welcome from "./welcome";

export const routers = createRouter({
  Welcome: {
    render: Welcome,
    // not use lazy import
    async: true,
  },
  Login: {
    render: () => import("./sign/Login"),
    // preload other pages
    preload: ["User"],
  },
  User: {
    render: () => import("./user"),
  },
});

// Set page background:
stackOptions.className = "bg-gray-800";

render(
  () => <routers.Routers root={routers.Welcome} hash />,
  document.getElementById("root");
);

```

## 使用导航

刚刚创建的 routers 内包含了所有页面的导航方法, 比起直接使用 URL, 它更容易维护, 其中入参对象会以 URL params 的形式传递到新页面或返回的旧页面.


```tsx
import { routers } from "./routers";

function Welcome() {
  const handlePushProduct = () => {
    routers.user.push();
  };
  const handleReleaseProduct = () => {
    routers.user.replace({ id: "123" });
  };
  const handleClearToProduct = () => {
    routers.user.clearTo();
  };
  const handleGoBack = () => {
    routers.goBack();
  };
  return (
    <div>
      <div onClick={handlePushProduct}>push product</div>
      <div onClick={handleReleaseProduct}>release product</div>
      <div onClick={handleClearToProduct}>clear all stack and push product</div>
      <div onClick={handleGoBack}>go back</div>
    </div>
  );
}

export default Welcome;
```


## 使用 URL Params

当你进入页面时, 或者从返回到当前页面时, 页面的 Props 对象会更新, 你可以直接使用它, 由于 Solid 的特性它会自动监听变化.

不同于传统页面返回, stack页面返回时, 它不会重新渲染. 所以我们需要更新 props 以决定我们是否有需要重绘的行为.


```tsx
// params in props
import { createPropsSignal } from "solid-router-stack";

// params.dog in props
function App(props) {
  const [dog, setDog] = createPropsSignal(props, "dog")
  return (
    <div>
      {dog()}
    </div>
  );
}
```

## 页面导航动画

您可以设置多种页面导航动画

```tsx
import { setNavigationAnimation } from "solid-router-stack";

// like application
setNavigationAnimation("moveTop");
```


## 不希望某个页面持久在DOM中

你可以利用 `<Show when={props.stackTop} />` 改变当前页面的内容是否持久在 DOM 中

```tsx
const Page: Component = (props) => {
  return (
    <Show when={props.stackTop}>
      <div>the page</div>
    </Show>
  );
};
```

## 导航事件监听

添加监听方法, 它会获取 fromUrl 和 toUrl, 您可以通过返回一个新的 URL 来替换原本应该导航的 toUrl

```tsx
import { historyProxy } from "solid-router-stack";

historyProxy.beforeChange((url, path) => {
  if (path === "/user") {
    return "/login";
  }
  return url;
});
```

## 使用虚拟 history

下面的例子, 使用虚拟 history 在 iOS Wechat 应用中, 这样导航路由 history 不会增加, iOS 微信页面底部就不会有导航按钮.

```tsx
export function isIOSWechat(): boolean {
  const ua = navigator.userAgent.toLocaleLowerCase();
  return  new RegExp("(iphone|ipod|ipad)").test(ua) && new RegExp("(micromessenger)").test(ua);
}

render(
  () => <routers.Routers root={routers.Welcome} hash virtualHistory={isIOSWechat()} />,
  document.getElementById("root");
);
```
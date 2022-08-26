# 🏂🏽 solid-router-stack

[查看中文文档](./README-CN.md)

A solid router, mobile first.

[View DEMO](https://solid-router-stack.gewulian.com)

Features:

- Like navigation, page is keep in dom
- Auto lazy load pages
- Easy preload some pages when entry a page
- Auto use URL params input page's props
- Tiny, only `3kb` in gzip

# Example

## Create routers

```tsx
import { render } from "solid-js/web";
import { createRouters } from "solid-router-stack";
import Welcome from "./welcome";

export const routers = createRouters({
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

// page background inherit the parent background:
document.getElementById("root").style.background = "#fff";

render(
  () => <routers.Routers root={routers.Welcome} hash />,
  document.getElementById("root");
);

```

## Use Navigaion

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
      <div onclick={handlePushProduct}>push product</div>
      <div onclick={handleReleaseProduct}>release product</div>
      <div onclick={handleClearToProduct}>clear all stack and push product</div>
      <div onclick={handleGoBack}>go back</div>
    </div>
  );
}

export default Welcome;
```

## Use params

When sub page back, you can do something:


```tsx
import { createPropsSignal } from "solid-router-stack";

// params.dog in props
function App(props:{dog:string, age: number}) {
  const [dog, setDog] = createPropsSignal(props, "dog")
  return (
    <div>
      <input oninput={e=>setDog(e.currentTarget.value)} />
      <div>change and load: {dog()}</div>
      <div>only load: {p.age}</div>
    </div>
  );
}
```


## Not keep page

`props.stackTop` is when stack page is stack top, you can use `<Show when={props.stackTop} />` change Not keep page:

```tsx
const Page: Component = (props) => {
  return (
    <Show when={props.stackTop}>
      <div>the page</div>
    </Show>
  );
};
```

## Animation navigation, like application

```tsx
import { setNavigationAnimation } from "solid-router-stack";

// like application
setNavigationAnimation("moveTop");
```

## Events listen

When use history change:

```tsx
import { historyProxy } from "solid-router-stack";

historyProxy.beforeChange((url) => {
  if (v.indexOf("/user") === 0) {
    return "/login";
  }
  return url;
});
```


## Use virtual history

Use virtual history in iOS Wechat application, history stack only one.

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
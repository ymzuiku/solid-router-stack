# 🏂🏽 solid-router-stack

A solid router, mobile first.

features:

- Like navigation, page is keep in dom
- Auto split code pages
- Easy preload some pages when entry a page

## Example

```tsx
import { createRouter } from "solid-router-stack";
import Welcome from "./welcome";

export const routers = createRouter({
  welcome: {
    render: Welcome,
    // not use lazy import
    async: true,
  },
  user: {
    render: () => import("./user"),
  },
  login: {
    render: () => import("./sign/Login"),
    // preload other pages
    preload: () => [paths.welcome, paths.login],
  },
});
```

## Use Navigaion

```tsx
import { routers } from "./routers";

function App() {
  const handlePushProduct = () => {
    routers.welcome.push();
  };
  const handleReleaseProduct = () => {
    routers.welcome.replace({ id: "123" });
  };
  const handleClearToProduct = () => {
    routers.welcome.clearTo();
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
      <routers.Router />
    </div>
  );
}
```

## Use params

When sub page back, you can do something:

```tsx
const handlePush = () => {
  routers.somePage.push({dog:"im push"});
};

const handleGoBack = () => {
  routers.goBack({dog:"im go back"});
};

// params in props
function App(p: {dog}) {
  return (
    <div>
      {p.dog}
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
      <div onclick={() => routers.goBack({ fish: new Date().toISOString() })}>go back</div>
      <div>fish page aaaaaaaaaa</div>
      <div onclick={() => routers.hello_dog.replace()}>replace to dog</div>
    </Show>
  );
};
```

## Animation navigation, like application

```tsx
import { useAnimationNavigation } from "solid-router-stack";

// like iOS application
useAnimationNavigation("moveLeft");

// like Android application
useAnimationNavigation("moveUp");
```

## Events listen

When use history change:

```tsx
import { routers } from "./routers";

routers.listen(({ fromUrl, toUrl, kind, index }) => {
  console.log(fromUrl, toUrl, kind, index); // /hello, /next, "push", 2
  return toUrl;
});
```

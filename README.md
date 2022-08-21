# solid-router-stack

A react router, mobile first.

features:

- Like navigation, page is keep in dom
- Auto split code pages
- Easy preload some pages when entry a page

## Example

```tsx
import { createRouter } from "solid-router-stack";

export const routers = createRouter({
  welcome: {
    render: () => import("./welcome"),
    // leave this page, auto remove in dom
    notKeep: true,
  },
  user: {
    render: () => import("./welcome"),
  },
  login: {
    render: () => import("./sign/Login"),
    preload: () => [paths.welcome, paths.login],
  },
});
```

Use history:

```tsx
import { routers } from "./routers";

function App() {
  const handlePushProduct = () => {
    routers.push.welcome();
  };
  const handleReleaseProduct = () => {
    routers.replace.welcome({ id: "123" });
  };
  const handleClearToProduct = () => {
    routers.clearTo.welcome();
  };
  const handleGoBack = () => {
    gewuRoute.back();
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

### useHistoryChange

When sub page back, you can do something:

```tsx
function App() {
  const his = useHistoryChange();
  if (his.isBack) {
    console.log("I need fetch new data.");
  }
  return (
    <div>
      {his.isBack}
      {his.last}
      {his.stack}
    </div>
  );
}
```

### Events listen

When use history change:

```tsx
import { routers } from "./routers";

routers.listen(({ fromUrl, toUrl, kind, index }) => {
  console.log(fromUrl, toUrl, kind, index); // /hello, /next, "push", 2
  return toUrl;
});
```

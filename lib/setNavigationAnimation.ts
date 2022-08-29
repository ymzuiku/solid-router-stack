import { moveLeftCss, moveTopCss, scaleCss } from "./baseCss";

const setCustomNavigationAnimation = () => {
  if (typeof window !== "undefined") {
    [moveLeftCss, moveTopCss, scaleCss].forEach((css) => {
      const sty = document.createElement("style");
      sty.id = "solid-router-stack-css";
      sty.innerHTML = css(240);
      document.head.append(sty);
    });
  }
};

setCustomNavigationAnimation();

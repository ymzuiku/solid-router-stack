import { moveLeftCss, moveTopCss } from "./baseCss";
import { stackOptions } from "./stackOptions";

export const customAnimationNavigation = (
  animeCss: string,
  navigationDuration = 250
) => {
  Object.assign(stackOptions, {
    navigationDuration,
  });

  if (typeof window !== "undefined") {
    if (!document.getElementById("solid-router-stack-css")) {
      const sty = document.createElement("style");
      sty.id = "solid-router-stack-css";
      sty.innerHTML = animeCss;
      document.head.append(sty);
    }
  }
};

export const useAnimationNavigation = (type: "moveTop" | "moveLeft") => {
  customAnimationNavigation(type == "moveTop" ? moveTopCss : moveLeftCss);
};

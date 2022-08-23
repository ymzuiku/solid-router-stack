import { stackOptions } from "./stackOptions";

export const useAnimationNavigation = (
  animeCss: string,
  navigationDuration = 200
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

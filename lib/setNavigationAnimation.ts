import { moveLeftCss, moveTopCss, scaleCss } from "./baseCss";
import { stackOptions } from "./stackOptions";

export const setCustomNavigationAnimation = (
  animeCss: string,
  navigationDuration = 260
) => {
  Object.assign(stackOptions, {
    navigationDuration,
  });

  if (typeof window !== "undefined") {
    const sty = document.getElementById("solid-router-stack-css");
    if (sty) {
      sty.innerHTML = animeCss;
    } else {
      const sty = document.createElement("style");
      sty.id = "solid-router-stack-css";
      sty.innerHTML = animeCss;
      document.head.append(sty);
    }
  }
};

const moveMap = {
  moveTop: moveTopCss,
  moveLeft: moveLeftCss,
  scale: scaleCss,
};

export const setNavigationAnimation = (
  type: "moveTop" | "moveLeft" | "scale" | "auto" | "none",
  duration = 150
) => {
  if (type === "none") {
    stackOptions.navigationDuration = 0;
    const sty = document.getElementById("solid-router-stack-css");
    if (sty) {
      sty.remove();
    }
  } else if (type === "auto") {
    if (typeof window == "undefined") {
      setCustomNavigationAnimation(moveTopCss(duration), duration + 10);
    } else {
      setCustomNavigationAnimation(
        window.innerWidth > window.innerHeight
          ? moveTopCss(duration)
          : moveLeftCss(duration + 10),
        260
      );
    }
  } else {
    setCustomNavigationAnimation(moveMap[type](duration), duration + 10);
  }
};

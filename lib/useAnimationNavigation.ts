import { stackOptions } from "./stackOptions";

export const baseCss = `
.solid-router-stack-now-up {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
}
.solid-router-stack-before-up {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  opacity: 0;
  transform: translateY(10vh);
}
.solid-router-stack-after-up {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  transform: translateY(-5vh);
}
.solid-router-stack-now-left {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
}
.solid-router-stack-before-left {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  opacity: 0;
  transform: translateX(10vh);
}
.solid-router-stack-after-left {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  transform: translateX(-5vh);
}
`;

const createBaseCss = () => {
  if (typeof window !== "undefined") {
    if (!document.getElementById("solid-router-stack-css")) {
      const sty = document.createElement("style");
      sty.id = "solid-router-stack-css";
      sty.innerHTML = baseCss;
      document.head.append(sty);
    }
  }
};

export const useAnimationNavigation = (type: "moveUp" | "moveLeft") => {
  Object.assign(stackOptions, {
    classBefore:
      type === "moveUp"
        ? "solid-router-stack-before-up"
        : "solid-router-stack-before-left",
    classNow:
      type === "moveUp"
        ? "solid-router-stack-now-up"
        : "solid-router-stack-now-left",
    classAfter:
      type === "moveUp"
        ? "solid-router-stack-after-up"
        : "solid-router-stack-after-left",
    navigationDuration: 200,
  });
  createBaseCss();
};

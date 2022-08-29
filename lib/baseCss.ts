export const moveTopCss = (t: number) => {
  const transition = `transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;
  return `
.solid-router-stack-now-top {
  ${transition}
}
.solid-router-stack-before-top {
  ${transition}
  will-change: transform, opacity;
  transform: translateY(7vh);
}
.solid-router-stack-leave-top {
  ${transition}
  will-change: transform, opacity;
  opacity: 0;
  transform: translateY(15vh);
  pointer-events: none !important;
}
.solid-router-stack-after-top {
  ${transition}
  will-change: transform, opacity;
  transform: translateY(-5vh);
  pointer-events: none !important;
}
`;
};

export const moveLeftCss = (t: number) => {
  const transition = `transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;
  return `
.solid-router-stack-now-left {
  ${transition}
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-before-left {
  ${transition}
  will-change: transform, opacity;
  transform: translateX(100vw);
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-leave-left {
  ${transition}
  will-change: transform, opacity;
  transform: translateX(100vw);
  box-shadow: 0px -10px 20px rgba(0,0,0,0.12);
  pointer-events: none !important;
}
.solid-router-stack-after-left {
  ${transition}
  will-change: transform, opacity;
  transform: translateX(-30vw);
  pointer-events: none !important;
}
`;
};

export const scaleCss = (t: number) => {
  const transition = `transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;
  return `
.solid-router-stack-now-scale {
  ${transition}
}
.solid-router-stack-before-scale {
  ${transition}
  will-change: transform, opacity;
  opacity: 0;
  transform: scale(0.8);
}
.solid-router-stack-leave-scale {
  ${transition}
  will-change: transform, opacity;
  transform: scale(0.8);
  opacity: 0;
  pointer-events: none !important;
}
.solid-router-stack-after-scale {
  ${transition}
  will-change: transform, opacity;
  transform: scale(1.05);
  pointer-events: none !important;
}
`;
};

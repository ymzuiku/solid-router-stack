export const moveTopCss = `
.solid-router-stack-now {
  transition: transform 200ms ease-out, opacity 200ms ease-out;
}
.solid-router-stack-before {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 200ms ease-out;
  opacity: 0.7;
  transform: translateY(10vh);
}
.solid-router-stack-leave {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 200ms ease-out;
  opacity: 0;
  transform: translateY(15vh);
  pointer-events: none !important;
}
.solid-router-stack-after {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 200ms ease-out;
  transform: translateY(-5vh);
  pointer-events: none !important;
}
`;

export const moveLeftCss = `
.solid-router-stack-now {
  transition: transform 200ms ease-out;
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-before {
  will-change: transform, opacity;
  transition: transform 200ms ease-out;
  transform: translateX(100vw);
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-leave {
  will-change: transform, opacity;
  transition: transform 200ms ease-out;
  transform: translateX(100vw);
  box-shadow: 0px -10px 20px rgba(0,0,0,0.12);
  pointer-events: none !important;
}
.solid-router-stack-after {
  will-change: transform, opacity;
  transition: transform 200ms ease-out;
  transform: translateX(-30vw);
  pointer-events: none !important;
}
`;

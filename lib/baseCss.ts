export const moveTopCss = `
.solid-router-stack-now {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
}
.solid-router-stack-before {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  opacity: 0.7;
  transform: translateY(10vh);
}
.solid-router-stack-leave {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  opacity: 0;
  transform: translateY(10vh);
}
.solid-router-stack-after {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  transform: translateY(-5vh);
}
`;

export const moveLeftCss = `
.solid-router-stack-now {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
}
.solid-router-stack-before {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  transform: translateX(100vw);
}
.solid-router-stack-leave {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  transform: translateX(100vw);
}
.solid-router-stack-after {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  transform: translateX(-30vw);
}
`;

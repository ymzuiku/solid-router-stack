import { Accessor, createEffect, createSignal, Setter } from "solid-js";

export function createPropsSignal<T, K extends keyof T>(
  props: T,
  key: K,
  defaultValue?: T[K]
): [Accessor<T[K]>, Setter<T[K]>] {
  const [get, set] = createSignal(props[key] || defaultValue);
  createEffect(() => {
    set((props as any)[key] || defaultValue);
  });
  return [get, set] as any;
}

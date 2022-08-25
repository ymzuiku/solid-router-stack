import { Component, createSignal, For, mergeProps } from "solid-js";
import { tw } from "twind";
import Github from "./github.svg";

import { createPropsSignal, setNavigationAnimation } from "solid-router-stack";
import Logo from "../logo.svg";
import { buttonCss } from "./classlist";
import { routers } from "./routers";

const Welcome: Component<{ name: string; stackTop: boolean }> = (p) => {
  p = mergeProps({ name: "" }, p);
  const [getName, setName] = createPropsSignal(p, "name", "");
  const [getMove, setMove] = createSignal("moveTop");

  return (
    <div class={tw`h-full overflow-y-auto`}>
      <header
        class={tw`text-white flex-1 w-full flex flex-col items-center justify-center py-10`}
      >
        <a
          class={tw`text-white w-20 h-20 mb-10`}
          target="_blank"
          href="https://github.com/ymzuiku/solid-router-stack"
        >
          <Github />
        </a>
        <h1>Change navigation animation type:</h1>
        <select
          value={getMove()}
          class={tw`bg-red-500 p-2 mt-4 rounded-md text-white`}
          onchange={(e) => {
            setMove(e.currentTarget.value);
            setNavigationAnimation(e.currentTarget.value as any);
          }}
        >
          <option value="moveTop">Animation: Move Top</option>
          <option value="moveLeft">Animation: Move Left</option>
          <option value="scale">Animation: Scale</option>
          <option value="none">Animation: None</option>
        </select>
        <p class={tw`mt-10`}>Input name, and jump next page.</p>
        <input
          class={tw`bg-gray-900 my-3 rounded-lg p-2 focus:ring-0 outline-none focus:ring-4 ring-gray-600`}
          placeholder="Please input your name"
          value={getName()}
          oninput={(v) => setName(v.currentTarget.value)}
        />
        <button
          onclick={() => routers.Login.push({ name: getName() })}
          class={buttonCss}
        >
          Next Page
        </button>
        <p class={tw`mt-10`}>Scroll view and go back page</p>
        <For each={Array(6).fill(0)}>
          {() => (
            <div
              class={tw`animate-spin duration-500 w-40 h-40 mx-auto`}
              style={{ "animation-duration": "8s" }}
            >
              <Logo />
            </div>
          )}
        </For>
        <button
          onclick={() => routers.Login.push({ name: getName() })}
          classList={{ [buttonCss]: true, [tw`my-10`]: true }}
        >
          Next Page
        </button>
      </header>
    </div>
  );
};

export default Welcome;

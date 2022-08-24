import { Component, createEffect, createSignal, For } from "solid-js";
import { tw } from "twind";

import { setNavigationAnimation } from "solid-router-stack";
import logo from "../logo.svg";
import { buttonCss } from "./classlist";
import { routers } from "./routers";

const Welcome: Component = (p: { name?: string }) => {
  const [getName, setName] = createSignal("");
  const [getMove, setMove] = createSignal("moveTop");

  createEffect(() => {
    setName(p.name || "");
  });

  return (
    <div class={tw`h-full overflow-y-auto`}>
      <header
        class={tw`bg-gray-800 text-white flex-1 w-full flex flex-col items-center justify-center py-10`}
      >
        <h1>Change navigation animation type:</h1>
        <select
          value={getMove()}
          class={tw`bg-red-500 p-2 rounded-md text-white`}
          onchange={(e) => {
            setMove(e.currentTarget.value);
            setNavigationAnimation(e.currentTarget.value as any);
          }}
        >
          <option value="moveTop">Move Top</option>
          <option value="moveLeft">Move Left</option>
          <option value="scale">Scale</option>
          <option value="none">None</option>
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
        <For each={Array(4).fill(0)}>
          {() => (
            <img
              src={logo}
              class={tw`animate-spin duration-500 w-40 h-40 mx-auto`}
              style={{ "animation-duration": "8s" }}
              alt="logo"
            />
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

import { Component, createEffect, createSignal, For } from "solid-js";
import { tw } from "twind";

import { setNavigationAnimation } from "solid-router-stack";
import logo from "../logo.svg";
import { buttonCss } from "./classlist";
import { routers } from "./routers";

const github = `<svg height="100%" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="100%" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="currentColor"></path>
</svg>`;

const Welcome: Component = (p: { name?: string }) => {
  const [getName, setName] = createSignal("");
  const [getMove, setMove] = createSignal("moveTop");

  createEffect(() => {
    setName(p.name || "");
  });

  return (
    <div class={tw`h-full overflow-y-auto`}>
      <header
        class={tw`text-white flex-1 w-full flex flex-col items-center justify-center py-10`}
      >
        <a
          class={tw`text-white w-20 h-20 mb-10`}
          ref={(r) => (r.innerHTML = github)}
          target="_blank"
          href="https://github.com/ymzuiku/solid-router-stack"
        ></a>
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
        <For each={Array(10).fill(0)}>
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

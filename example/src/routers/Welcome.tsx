import { Component, createSignal, For, mergeProps } from "solid-js";
import { tw } from "twind";
import Github from "./github.svg";

import { createPropsSignal } from "solid-router-stack";
import Logo from "../logo.svg";
import { buttonCss } from "./classlist";
import { routers } from "./routers";

const Welcome: Component<{ name: string; stackTop: boolean }> = (p) => {
  p = mergeProps({ name: "" }, p);
  const [getName, setName] = createPropsSignal(p, "name", "");
  const [getMove, _setMove] = createSignal("top");
  const [getDuration, _setDuration] = createSignal("250");
  sessionStorage.setItem("move", "top");
  sessionStorage.setItem("duration", "250");
  const setMove = (v: string) => {
    _setMove(v);
    sessionStorage.setItem("move", v);
    if (!v) {
      setDuration("0");
    }
  };
  const setDuration = (v: string) => {
    _setDuration(v);
    sessionStorage.setItem("duration", v);
  };

  return (
    <div class={tw`bg-gray-800 h-full overflow-y-auto`}>
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
          }}
        >
          <option value="top">Animation: Move Top</option>
          <option value="left">Animation: Move Left</option>
          <option value="scale">Animation: Scale</option>
          <option value="">Animation: None</option>
        </select>
        <div class={tw`flex flex-row space-x-3 items-center`}>
          <div class={tw`w-32`}>Duration: {getDuration()}</div>
          <input
            type="range"
            min="0"
            max="5000"
            class={tw`bg-gray-700 rounded-full my-4`}
            value={getDuration()}
            oninput={(e) => setDuration(e.currentTarget.value)}
          />
        </div>
        <p class={tw`mt-10`}>Input name, and jump next page.</p>
        <input
          class={tw`bg-gray-900 my-3 rounded-lg p-2 focus:ring-0 outline-none focus:ring-4 ring-gray-600`}
          placeholder="Please input your name"
          value={getName()}
          oninput={(v) => setName(v.currentTarget.value)}
        />
        <button
          onclick={() =>
            routers.Login.push(null, {
              animation: sessionStorage.getItem("move") as any,
              duration: Number(sessionStorage.getItem("duration")) || 0,
            })
          }
          class={buttonCss}
        >
          Next Page
        </button>
        <p class={tw`mt-10`}>Scroll view and go back page</p>
        <For each={Array(6).fill(0)}>
          {() => (
            <div
              class={tw`animate-spin duration-500 w-60 h-60 mx-auto`}
              style={{ "animation-duration": "8s" }}
            >
              <Logo />
            </div>
          )}
        </For>
        <button
          onclick={() =>
            routers.Login.push(
              { name: getName() },
              {
                animation: sessionStorage.getItem("move") as any,
                duration: Number(sessionStorage.getItem("duration")) || 0,
              }
            )
          }
          classList={{ [buttonCss]: true, [tw`my-10`]: true }}
        >
          Next Page
        </button>
      </header>
    </div>
  );
};

export default Welcome;

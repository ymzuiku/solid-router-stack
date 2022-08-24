import { Component, createEffect, createSignal } from "solid-js";
import { tw } from "twind";

import logo from "../logo.svg";
import { buttonCss } from "./classlist";
import { routers } from "./routers";

const Welcome: Component = (p: { name?: string }) => {
  const [name, setName] = createSignal("");
  createEffect(() => {
    setName(p.name || "");
  });
  return (
    <header
      class={tw`bg-gray-800 text-white h-full w-full flex flex-col items-center justify-center`}
    >
      <img
        src={logo}
        class={tw`animate-spin duration-500 w-40 h-40 `}
        style={{ "animation-duration": "8s" }}
        alt="logo"
      />
      <p>Input name, and jump next page.</p>
      <input
        class={tw`bg-gray-900 my-3 rounded-lg p-2 focus:ring-0 outline-none focus:ring-4 ring-gray-600`}
        placeholder="Please input your name"
        value={name()}
        oninput={(v) => setName(v.currentTarget.value)}
      />
      <button
        onclick={() => routers.Login.push({ name: name() })}
        class={buttonCss}
      >
        Next Page
      </button>
    </header>
  );
};

export default Welcome;

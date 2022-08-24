import { Component, createSignal } from "solid-js";
import { tw } from "twind";
import { buttonCss } from "./classlist";

import { routers } from "./routers";

const item = tw`px-6 my-3 max-w-[400px] w-full`;

const Login: Component = (p: { name?: string }) => {
  const [name, setName] = createSignal(p.name || "");
  const [yourClass, setYourClass] = createSignal("");
  return (
    <div class={tw`bg-gray-800 text-white h-full w-full`}>
      <button
        onclick={() => routers.goBack({ name: name() })}
        classList={{ [tw`top-6 absolute left-6`]: true, [buttonCss]: true }}
      >
        Go Back
      </button>
      <header
        class={tw`bg-gray-800 text-white h-full w-full flex flex-col items-center justify-center`}
      >
        <h1>Login</h1>
        <div class={item}>
          <p>Your name, change it and go back:</p>
          <input
            class={tw`bg-gray-900 my-1 w-full rounded-lg p-2 focus:ring-0 outline-none focus:ring-4 ring-gray-600`}
            placeholder="Please input your name"
            value={name()}
            oninput={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div class={item}>
          <p>Your class:</p>
          <input
            class={tw`bg-gray-900 my-1 w-full rounded-lg p-2 focus:ring-0 outline-none focus:ring-4 ring-gray-600`}
            placeholder="Please input your class"
            oninput={(e) => setYourClass(e.currentTarget.value)}
          />
        </div>
        <button
          onclick={() =>
            routers.Dashboard.push({ name: name(), yourClass: yourClass() })
          }
          class={buttonCss}
        >
          Login
        </button>
      </header>
    </div>
  );
};

export default Login;

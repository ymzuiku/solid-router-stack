import { Component, createSignal, Show } from "solid-js";
import { createPropsSignal } from "solid-router-stack";
import { tw } from "twind";
import { buttonCss } from "./classlist";

import { routers } from "./routers";

const item = tw`px-6 my-3 max-w-[400px] w-full`;

const Login: Component<{
  stackLength: number;
  name: string;
  stackShow: boolean;
}> = (p) => {
  const [name, setName] = createPropsSignal(p, "name", "");
  const [yourClass, setYourClass] = createSignal("");
  return (
    <Show when={p.stackShow}>
      <div class={tw`bg-gray-800 text-white h-full w-full`}>
        <Show when={p.stackLength > 1}>
          <button
            onclick={() => routers.goBack({ name: name() })}
            classList={{ [tw`top-6 absolute left-6`]: true, [buttonCss]: true }}
          >
            Go Back
          </button>
        </Show>
        <header
          class={tw`text-white h-full w-full flex flex-col items-center justify-center`}
        >
          <h1>Login (this page use no keep)</h1>
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
          <div class={tw`flex flex-row space-x-2`}>
            <button
              onclick={() =>
                routers.Dashboard.push({
                  name: name(),
                  yourClass: yourClass(),
                })
              }
              class={buttonCss}
            >
              Login
            </button>
            <button
              onclick={() =>
                routers.Dashboard.replace({
                  name: name(),
                  yourClass: yourClass(),
                })
              }
              class={buttonCss}
            >
              Replace Login
            </button>
          </div>
          <div class={tw`flex flex-row mt-2 space-x-2`}>
            <button
              onclick={() =>
                routers.Welcome.push({
                  name: name(),
                  yourClass: yourClass(),
                })
              }
              class={buttonCss}
            >
              Push Welcome ageain
            </button>
            <button
              onclick={() =>
                routers.Welcome.pushSingle({
                  name: name(),
                  yourClass: yourClass(),
                })
              }
              class={buttonCss}
            >
              Move Welcome to top
            </button>
          </div>
        </header>
      </div>
    </Show>
  );
};

export default Login;

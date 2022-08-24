import { Component } from "solid-js";
import { tw } from "twind";
import { buttonCss } from "./classlist";
import { routers } from "./routers";

const Dashboard: Component = (p: { name?: string; yourClass?: string }) => {
  return (
    <div class={tw`bg-gray-800 text-white h-full w-full`}>
      <button
        onclick={() => routers.goBack()}
        classList={{ [tw`top-6 absolute left-6`]: true, [buttonCss]: true }}
      >
        Go Back
      </button>
      <header
        class={tw`bg-gray-800 text-white h-full w-full flex flex-col items-center justify-center`}
      >
        <p>Your input data:</p>
        <input
          disabled
          class={tw`opacity-60 bg-gray-900 my-3 rounded-lg p-2 focus:ring-0 outline-none focus:ring-4 ring-gray-600`}
          placeholder="Please input your name"
          value={p.name || ""}
        />
        <input
          disabled
          class={tw`opacity-60 bg-gray-900 my-3 rounded-lg p-2 focus:ring-0 outline-none focus:ring-4 ring-gray-600`}
          placeholder="Please input your name"
          value={p.yourClass || ""}
        />
      </header>
    </div>
  );
};

export default Dashboard;

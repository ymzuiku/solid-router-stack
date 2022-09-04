import { Component } from "solid-js";
import { tw } from "twind";
import { buttonCss } from "./classlist";
import { routers } from "./routers";

const Dashboard: Component<{ name: string; yourClass: string }> = (p) => {
  return (
    <div class={tw`text-white h-full w-full`}>
      <button
        onclick={() => routers.goBack()}
        classList={{ [tw`top-6 absolute left-6`]: true, [buttonCss]: true }}
      >
        Go Back
      </button>
      <header
        class={tw`text-white h-full w-full flex flex-col items-center justify-center`}
      >
        <p>Your input data:</p>
        <div
          class={tw`opacity-60 bg-gray-900 my-3 rounded-lg p-2 focus:ring-0 outline-none focus:ring-4 ring-gray-600`}
        >
          {p.name || "No data"}
        </div>
        <div
          class={tw`opacity-60 bg-gray-900 my-3 rounded-lg p-2 focus:ring-0 outline-none focus:ring-4 ring-gray-600`}
        >
          {p.yourClass || "No data"}
        </div>
        <button
          onclick={() => routers.Welcome.clearTo()}
          classList={{ [buttonCss]: true, [tw`my-10`]: true }}
        >
          Go back to root
        </button>
      </header>
    </div>
  );
};

export default Dashboard;

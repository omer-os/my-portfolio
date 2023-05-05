import MouseMovmentGradient from "./MouseMovmentGradient";

export default {
  title: "MouseMovmentGradient",
  component: MouseMovmentGradient,
};

export const Default = () => {
  return (
    <MouseMovmentGradient className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl">
      <h3 className="text-base font-semibold leading-7 text-sky-500">Byline</h3>
      <div className="mt-2 flex items-center gap-x-2">
        <span className="text-5xl font-bold tracking-tight text-white">
          Hero
        </span>
      </div>
      <p className="mt-6 text-base leading-7 text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis illum
        eum ullam nostrum atque quam.
      </p>
    </MouseMovmentGradient>
  );
};

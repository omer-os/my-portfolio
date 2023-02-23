import React from "react";

export default function BackgroundGradient() {
  return (
    <div>
      <div className="flex -z-10 absolute top-40 left-20">
        <div className="blob absolute top-0 md:left-[10vw] sm:left-[3vw] -left-20 w-[60vmin] h-[60vmin]">
          <div className="z-10 bg-black/70 absolute backdrop-blur-[4em] -left-[7em] -top-[7em] -right-[7em] -bottom-[7em] "></div>
        </div>
      </div>
    </div>
  );
}

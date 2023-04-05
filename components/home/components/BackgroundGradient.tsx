import Image from "next/image";
import React from "react";

export default function BackgroundGradient() {
  return (
    <div>
      <div className="absolute flex -z-10 top-32 sm:top-18 left-10">
        <div className="absolute top-0 sm:-top-24 lg:left-[8vw]  sm:left-[1vw] -left-20 w-[70vmin] sm:w-[70vmin] h-[60vmin]">
          <Image
            alt="backgrounf blob animation"
            src="/blobanimation.svg"
            width={1000}
            height={1000}
          />

          <div className="z-10 bg-black/70 absolute backdrop-blur-[3em] -left-[7em] -top-[7em] -right-[7em] -bottom-[7em] "></div>
        </div>
      </div>
    </div>
  );
}

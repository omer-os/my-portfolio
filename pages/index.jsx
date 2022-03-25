import Image from "next/image";
import React from "react";
import meImg from "../public/images/me.jpg";

export default function index() {
  return (
    <div className="text-white flex items-center justify-center p-5 h-full gap-[4em]">
      <div className="flex g">
        <div className="flex flex-col gap-4 max-w-[18em]">
          <div className="text-5xl font-bold">Hello 👋</div>
          <div className="text-2xl">
            I'm a Full Stack Developer and ux/ui designer.
          </div>
        </div>
      </div>

      <div className="right w-60 z-[1] relative">
        <Image
          layout="responsive"
          src={meImg}
          alt="me"
          width={250}
          height={350}
        />
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import LinkChips from "./LinkChips";

export default function MenuBurgerButton({
  links,
}: {
  links: { name: string; link: string }[];
}) {
  const [OpenSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="md:hidden">
      <div
        onClick={() => setOpenSidebar(!OpenSidebar)}
        className="md:hidden active:scale-90 transition-all active:bg-zinc-900 p-3 rounded-full cursor-pointer relative z-50 !fill-white"
      >
        {OpenSidebar ? (
          <IoMdClose size={20} />
        ) : (
          <AiOutlineMenu size={20} fill="white" color="white" />
        )}
      </div>
      <div
        className={`fixed top-0 w-full h-screen bg-black z-40 flex flex-col -left-full transition-all
        ${OpenSidebar && "!left-0"}
        
        items-center justify-center gap-3
        `}
      >
        {links.map((i) => (
          <LinkChips key={i.name} link={i} />
        ))}
      </div>
    </div>
  );
}

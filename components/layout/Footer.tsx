import Link from "next/link";
import React from "react";
import { ImGithub, ImInstagram, ImLinkedin } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="flex flex-col items-center p-4 border-t dark:border-zinc-800 border-zinc-300">
      <div className="flex gap-4 w-max">
        <Link
          href="http://github.com/omer-os/"
          className="flex items-center justify-center w-10 h-8 rounded ring-1 ring-zinc-600"
        >
          <ImGithub size={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/omar-chatin/"
          className="flex items-center justify-center w-10 h-8 rounded ring-1 ring-zinc-600"
        >
          <ImLinkedin size={20} />
        </Link>
        <Link
          href="https://www.instagram.com/omar.chatin/"
          className="flex items-center justify-center w-10 h-8 rounded ring-1 ring-zinc-600"
        >
          <RiInstagramFill size={20} />
        </Link>
      </div>
      <div className="mt-4 text-center">
        @2023 all rights reserved by{" "}
        <Link className="text-xs text-blue-600 underline" href="/">
          @omer-os
        </Link>{" "}
      </div>
    </div>
  );
}

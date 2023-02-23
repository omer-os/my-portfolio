import Link from "next/link";
import React from "react";
import { ImGithub, ImInstagram, ImLinkedin } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="p-4 border-t border-zinc-800 flex flex-col items-center">
      <div className="flex gap-4 w-max">
        <Link
          href="http://github.com/omer-os/"
          className="flex items-center justify-center ring-1 ring-zinc-600 w-10 h-8 rounded"
        >
          <ImGithub size={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/omar-chatin/"
          className="flex items-center justify-center ring-1 ring-zinc-600 w-10 h-8 rounded"
        >
          <ImLinkedin size={20} />
        </Link>
        <Link
          href="https://www.instagram.com/omar.chatin/"
          className="flex items-center justify-center ring-1 ring-zinc-600 w-10 h-8 rounded"
        >
          <RiInstagramFill size={20} />
        </Link>
      </div>
      <div className="text-center mt-4">
        @2023 all rights reserved by{" "}
        <Link className="underline text-xs text-blue-600" href="/">
          @omer-os
        </Link>{" "}
      </div>
    </div>
  );
}

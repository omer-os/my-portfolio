import Link from "next/link";
import React from "react";
import { ImGithub, ImInstagram, ImLinkedin } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import SimpleChip from "../common/chips/SimpleChip";

export default function Footer() {
  return (
    <div className="flex flex-col items-center p-4 border-t dark:border-zinc-800 border-zinc-300">
      <div className="flex gap-4 w-max">
        
        {[
          {
            href: "http://github.com/omer-os/",
            icon: <ImGithub size={20} />,
          },
          {
            href: "https://www.linkedin.com/in/omar-chatin/",
            icon: <ImLinkedin size={20} />,
          },
          {
            href: "https://www.instagram.com/omar.chatin/",
            icon: <RiInstagramFill size={20} />,
          },
        ].map((link) => (
          <SimpleChip key={link.href} variant="bordered" href={link.href}>
            {link.icon}
          </SimpleChip>
        ))}
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

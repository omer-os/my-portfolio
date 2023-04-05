import Link from "next/link";
import React from "react";

export default function SocialLinkChip({
  Img,
  link,
}: {
  Img: any;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="flex items-center justify-center w-6 h-6 transition-all rounded-lg sm:w-8 active:bg-white/10 bg-zinc-300/0 active:scale-95 sm:h-8 ring-1 ring-zinc-300"
    >
      <Img className="w-3 h-3 sm:w-auto sm:h-auto" />
    </Link>
  );
}

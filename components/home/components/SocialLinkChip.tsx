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
      className="sm:w-8 w-6 active:bg-white/10 bg-zinc-300/0 transition-all active:scale-95 sm:h-8 h-6 rounded-lg ring-1 ring-zinc-300 flex items-center justify-center"
    >
      <Img className="sm:w-auto sm:h-auto w-3 h-3" />
    </Link>
  );
}

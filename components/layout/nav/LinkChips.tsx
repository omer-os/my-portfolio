"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function LinkChips({
  link,
}: {
  link: { name: string; link: string };
}) {
  const [Hovering, setHovering] = useState(false);
  const pathname = usePathname();
  return (
    <Link
      onMouseOver={() => setHovering(!Hovering)}
      onMouseLeave={() => setHovering(!Hovering)}
      className={`py-2 relative px-3 rounded uppercase font-bold
      ${pathname === link.link && "bg-zinc-900"}`}
      href={link.link}
    >
      {link.name}
    </Link>
  );
}

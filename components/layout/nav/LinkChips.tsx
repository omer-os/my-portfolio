"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function LinkChips({
  link,
}: {
  link: { name: string; link: string };
}) {
  const pathname = usePathname();
  return (
    <Link
      className={`py-2 px-3 rounded uppercase font-bold
      ${pathname === link.link && "bg-zinc-900"}`}
      href={link.link}
    >
      {link.name}
    </Link>
  );
}

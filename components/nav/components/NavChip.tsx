"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function NavChip({
  page,
}: {
  page: {
    name: string;
    link: string;
  };
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const pathname = usePathname();

  return (
    <Link
      className="capitalize py-2 px-4 rounded relative"
      href={page.link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={`z-10 relative text-zinc-400 ${
          page.link === pathname && "!text-white"
        }`}
      >
        {page.name}
      </span>
      {isHovered && (
        <motion.div
          layoutId="mwruiubeiyeigyewiy"
          className="bg-zinc-900 w-full h-full rounded absolute top-0 left-0"
        />
      )}

      <AnimatePresence>
        {page.link === pathname && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 2, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute w-full left-0 -bottom-3 bg-white h-[.05em]"
          />
        )}
      </AnimatePresence>
    </Link>
  );
}

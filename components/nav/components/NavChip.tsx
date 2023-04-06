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
      className="relative px-4 py-2 capitalize rounded"
      href={page.link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={`z-10 relative dark:text-zinc-400 text-zinc-500 ${
          page.link === pathname && "dark:!text-white text-black"
        } text-sm`}
      >
        {page.name}
      </span>
      {isHovered && (
        <motion.div
          layoutId="mwruiubeiyeigyewiy"
          className="absolute top-0 left-0 w-full h-full rounded dark:bg-zinc-900 bg-zinc-300"
        />
      )}

      <AnimatePresence>
        {page.link === pathname && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 2, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute w-full left-0 -bottom-3 dark:bg-white bg-blue-600 h-[.05em]"
          />
        )}
      </AnimatePresence>
    </Link>
  );
}

"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { motion } from "framer-motion";

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

      {page.link === pathname && (
        <motion.div
          layoutId="iwnoutpiyweouiuetgiubp"
          className="absolute w-full left-0 -bottom-3 bg-white h-[.05em]"
        />
      )}
    </Link>
  );
}

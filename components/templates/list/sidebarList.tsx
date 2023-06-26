"use client";
import { atom, useAtom } from "jotai";

import { cn } from "@/components/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const menuOpenAtom = atom(false);

export default function SidebarList() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useAtom(menuOpenAtom);

  return (
    <>
      {isMenuOpen && (
        <motion.div
          onClick={() => setIsMenuOpen(false)}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
          }}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}
      <motion.aside
        initial={{ left: "-100%" }}
        animate={{ left: isMenuOpen ? 0 : "-100%" }}
        className={`z-50 overflow-y-scroll h-full text-sm w-full max-w-[16em] p-3 py-4 pt-6 flex flex-col bg-white md:relative fixed top-0 md:!left-0`}
      >
        <div className="font-bold">Getting Started</div>
        <div className="mt-3 flex flex-col gap-2">
          {[
            {
              href: "/",
              label: "home",
            },
            {
              href: "/intro",
              label: "into",
            },
            {
              href: "/install",
              label: "install",
            },
          ].map(({ href, label }) => (
            <Link
              className={cn(
                "rounded-md capitalize hover:underline text-zinc-400",
                {
                  "text-black": pathname === href,
                }
              )}
              href={href}
              key={href}
            >
              {label}
            </Link>
          ))}
        </div>
      </motion.aside>
    </>
  );
}

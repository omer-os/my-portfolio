"use client";

import TextInput from "@/components/ui/input/TextInput";
import Link from "next/link";
import {
  useParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import React, { useState } from "react";
import { BsFilterSquareFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useIsScrollingDown } from "@/lib/hooks/scrollDetect";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Dialog from "@/components/blocks/dialog/Dialog";

export default function BlogsLeft({
  allCategories,
}: {
  allCategories: {
    title: string;
    slug: string;
  }[];
}) {
  const [search, setSearch] = useState("");
  const category = useParams()?.category;
  const scrolling = useIsScrollingDown();

  const [FocusedOnInput, setFocusedOnInput] = useState(false);

  const [OpenCategoriesAside, setOpenCategoriesAside] = useState(false);

  const segments = useSelectedLayoutSegments();

  return (
    <>
      {!segments.includes("(bloglayout)") ? (
        <>
          <div
            className={`fixed left-0 w-full py-2 px-6 pr-8 z-40 md:hidden border-b shadow-lg border-zinc-900 bg-black flex text-sm justify-between items-center transition-all ${
              scrolling ? "top-0" : "top-16"
            } `}
          >
            <AnimatePresence mode="wait">
              {!FocusedOnInput && (
                <motion.button
                  key={"jureffuo"}
                  initial={{
                    x: -20,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: -20,
                    opacity: 0,
                  }}
                  className="flex gap-2 items-center font-bold hover:bg-zinc-900 py-2 px-3 rounded"
                  onClick={() => setOpenCategoriesAside(true)}
                >
                  <BsFilterSquareFill />
                  <span>Categories</span>
                </motion.button>
              )}
              {!FocusedOnInput && (
                <motion.button
                  key={"jdurefuo"}
                  initial={{
                    x: 20,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: 20,
                    opacity: 0,
                  }}
                  onClick={() => setFocusedOnInput(true)}
                  className="p-2 rounded hover:bg-zinc-900"
                >
                  <FaSearch />
                </motion.button>
              )}
              {FocusedOnInput && (
                <motion.div
                  key={"jursefuo"}
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: 20,
                    opacity: 0,
                  }}
                  className="w-full relative"
                >
                  <TextInput
                    State={search}
                    setState={setSearch}
                    placeholder="Search"
                    className="!w-full border-zinc-800"
                    startIcon={<FaSearch className="text-zinc-500" />}
                  />
                  <button
                    onClick={() => setFocusedOnInput(false)}
                    className="p-2 absolute top-1 right-2 z-50"
                  >
                    <IoClose />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Dialog open={OpenCategoriesAside} setOpen={setOpenCategoriesAside}>
            <div className="w-[20em]">
              <div className="flex flex-col">
                {allCategories.map((item, index) => (
                  <Link
                    onClick={() => setOpenCategoriesAside(false)}
                    href={`/blog/${item.slug}`}
                    key={index}
                    className={`rounded py-2 px-2 capitalize text-left text-zinc-500 ${
                      category === item.slug && "bg-zinc-800 !text-white"
                    }
              `}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  onClick={() => setOpenCategoriesAside(false)}
                  href={`/blog/all`}
                  className={`rounded py-2 px-2 capitalize text-left text-zinc-500 ${
                    category === "all" && "bg-zinc-800 !text-white"
                  }
              `}
                >
                  all
                </Link>
              </div>
            </div>
          </Dialog>
          <div className="border-r border-zinc-900 py-5 px-4 hidden md:flex flex-col">
            <div className="sticky left-0 top-20">
              <div className="input">
                <TextInput
                  State={search}
                  setState={setSearch}
                  placeholder="Search"
                  startIcon={<FaSearch className="text-zinc-500" />}
                />
              </div>

              <div className="flex mt-6 flex-col gap-1">
                {allCategories.map((item, index) => (
                  <Link
                    href={`/blog/${item.slug}`}
                    key={index}
                    className={`rounded py-1 px-2 capitalize text-left text-zinc-500 ${
                      category === item.slug && "bg-zinc-900 !text-white"
                    }
              `}
                  >
                    {item.title}
                  </Link>
                ))}

                <Link
                  href={`/blog/all`}
                  className={`rounded py-1 px-2 capitalize text-left text-zinc-500 ${
                    category === "all" && "bg-zinc-900 !text-white"
                  }
              `}
                >
                  all
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

"use client";

import TextInput from "@/components/ui/input/TextInput";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function BlogsLeft() {
  const [search, setSearch] = useState("");
  const category = useParams().category;
  const categories = ["nextjs", "tailwindcss", "all"];
  return (
    <>
      <div
        className="fixed top-16 left-0 w-full p-2 
       z-40 
        border-b shadow-lg
        border-zinc-900
      bg-black
      flex  text-sm justify-between items-center
      "
      >
        <button>s</button>
        <button></button>
      </div>
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
            {categories.map((item, index) => (
              <Link
                href={`/blog/${item}`}
                key={index}
                className={`rounded py-1 px-2 capitalize text-left text-zinc-500 ${
                  category === item && "bg-zinc-900 !text-white"
                }
            `}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

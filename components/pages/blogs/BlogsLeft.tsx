"use client";

import TextInput from "@/components/ui/input/TextInput";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function BlogsLeft() {
  const [search, setSearch] = useState("");
  return (
    <div className="border-r border-zinc-900 py-5 px-4 flex flex-col">
      <div className="sticky left-0 top-20">
        <div className="input">
          <TextInput
            State={search}
            setState={setSearch}
            placeholder="Search"
            startIcon={<FaSearch className="text-zinc-500" />}
          />
        </div>
      </div>
    </div>
  );
}

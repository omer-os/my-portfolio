"use client";
import React, { useState, useEffect } from "react";

export default function MainNavBg() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = scrollY > 0 ? "bg-red-600" : "bg-blue-600";

  return (
    <div
      className={`absolute w-full top-0 left-0 -z-10 h-0 ${
        scrollY > 0 && "!h-full"
      } bg-black/80 backdrop-blur-[3em] transition-all`}
    />
  );
}

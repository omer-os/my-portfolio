"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      animate={{
        opacity: isVisible ? 1 : 0,
        bottom: isVisible ? "1em" : "-5em",
      }}
      className={`w-[3.5em] h-[3.5em] shadow-xl gradient-bg fixed right-10 rounded-full flex items-center justify-center cursor-pointer`}
      onClick={handleScrollToTop}
    >
      <IoIosArrowUp color="white" />
    </motion.div>
  );
}

import React, { useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export function Layout({ children }) {
  useEffect(() => {
    // localStorage.theme = 'dark'
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-[5em]">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

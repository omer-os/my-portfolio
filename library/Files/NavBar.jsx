import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="shadow-lg z-40 fixed left-0 top-0 right-0">
      <nav className="flex items-center backdrop-blur-xl justify-between flex-wrap bg-slate-800 bg-opacity-75 py-5 px-[4em]">
        <div className="left text-white font-bold text-xl">
          <Link href="/">
            <a>OmarCh.</a>
          </Link>
        </div>

        <div className="right flex text-lg text-white gap-[1em]">
          <Link href="/">
            <a className="hover:text-slate-500 hover:scale-[.9] transition-all">
              Home
            </a>
          </Link>

          <Link href="/about">
            <a className="hover:text-slate-500 hover:scale-[.9] transition-all">
              About
            </a>
          </Link>

          <Link href="/contact">
            <a className="hover:text-slate-500 hover:scale-[.9] transition-all">
              Contact
            </a>
          </Link>

          <Link href="/blog">
            <a className="hover:text-slate-500 hover:scale-[.9] transition-all">
              Blog
            </a>
          </Link>

          <Link href="/projects">
            <a className="hover:text-slate-500 hover:scale-[.9] transition-all">
              Projects
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}

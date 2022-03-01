import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="fixed w-full top-0 left-0 px-7 py-6 justify-between bg-dark sm:flex">
      <div className="font-bold z-[999] text-white text-lg">Omar Chatin</div>

      <div className="sm:flex hidden font-bold justify-between gap-3">
        <Link href="/">
          <a
            className={`${
              pathname === "/" ? "text-blue-600" : "text-gray-300"
            } text-white active`}
          >
            Home
          </a>
        </Link>

        <Link href="/about">
          <a
            className={`${
              pathname === "/about" ? "text-blue-600" : "text-gray-300"
            } text-white active`}
          >
            About
          </a>
        </Link>

        <Link href="/contact">
          <a
            className={`${
              pathname === "/contact" ? "text-blue-600" : "text-gray-300"
            } text-white active`}
          >
            Contact
          </a>
        </Link>

        <Link href="/skills">
          <a
            className={`${
              pathname === "/skills" ? "text-blue-600" : "text-gray-300"
            } text-white active`}
          >
            Skills
          </a>
        </Link>

        <Link href="/projects">
          <a
            className={`${
              pathname === "/projects" ? "text-blue-600" : "text-gray-300"
            } text-white active`}
          >
            Projects
          </a>
        </Link>

        <Link href="/blog">
          <a
            className={`${
              pathname === "/blog" ? "text-blue-600" : "text-gray-300"
            } text-white active`}
          >
            Blog
          </a>
        </Link>
      </div>

      <div className="mobile-version bg-[#17171f] inset-0 pt-20  fixed visible sm:hidden gap-3 flex flex-col justify-start align-start px-4 gap-3">
        <div className="flex fixed left-5 right-5 top-6 items-center justify-between">
          <div className="font-bold left-5 z-[999] text-white text-lg">
            Omar Chatin
          </div>

          <div className="cursor-pointer">
            <svg
              color="white"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        <Link href="/">
          <a
            className={`${
              pathname === "/"
                ? "text-white bg-blue-600"
                : "text-gray-300 border-blue-600 border-2"
            } text-white py-3 px-4 rounded`}
          >
            Home
          </a>
        </Link>

        <Link href="/about">
          <a
            className={`${
              pathname === "/about"
                ? "text-white bg-blue-600"
                : "text-gray-300 border-blue-600 border-2"
            } text-white py-3 px-4 rounded`}
          >
            About
          </a>
        </Link>

        <Link href="/contact">
          <a
            className={`${
              pathname === "/contact"
                ? "text-white bg-blue-600"
                : "text-gray-300 border-blue-600 border-2"
            } text-white py-3 px-4 rounded`}
          >
            Contact
          </a>
        </Link>

        <Link href="/skills">
          <a
            className={`${
              pathname === "/skills"
                ? "text-white bg-blue-600"
                : "text-gray-300 border-blue-600 border-2"
            } text-white py-3 px-4 rounded`}
          >
            Skills
          </a>
        </Link>

        <Link href="/projects">
          <a
            className={`${
              pathname === "/projects"
                ? "text-white bg-blue-600"
                : "text-gray-300 border-blue-600 border-2"
            } text-white py-3 px-4 rounded`}
          >
            Projects
          </a>
        </Link>

        <Link href="/blog">
          <a
            className={`${
              pathname === "/blog"
                ? "text-white bg-blue-600"
                : "text-gray-300 border-blue-600 border-2"
            } text-white py-3 px-4 rounded`}
          >
            Blog
          </a>
        </Link>
      </div>
    </div>
  );
}

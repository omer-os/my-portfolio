import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="fixed w-full top-0 left-0 flex px-7 py-6 justify-between bg-dark">
      
      <div className="font-bold text-white text-lg">Omar Chatin</div>

      <div className="flex sm:visible hidden font-bold justify-between gap-3">
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

      <div className="mobile-version visible sm:hidden flex flex-column justify-between gap-3">
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
    </div>
  );
}

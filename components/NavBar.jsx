import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function NavBar() {
  const router = useRouter();
  const { pathname } = router;
  const [OpenMenu, setOpenMenu] = useState(false);

  return (
    <div className="fixed z-10 w-full top-0 left-0 px-7 py-6 justify-between bg-dark sm:flex">
      <div className="font-bold z-[999] text-white text-lg">Omar Chatin</div>

      <div className="sm:flex hidden font-bold justify-between gap-3">
        <Link href="/">
          <a
            className={`${
              pathname === "/" ? "text-blue-600" : "text-gray-300"
            } text-white ease-out duration-300 ease-out duration-300 active`}
          >
            Home
          </a>
        </Link>

        <Link href="/about">
          <a
            className={`${
              pathname === "/about" ? "text-blue-600" : "text-gray-300"
            } text-white ease-out duration-300 active`}
          >
            About
          </a>
        </Link>

        <Link href="/contact">
          <a
            className={`${
              pathname === "/contact" ? "text-blue-600" : "text-gray-300"
            } text-white ease-out duration-300 active`}
          >
            Contact
          </a>
        </Link>

        <Link href="/skills">
          <a
            className={`${
              pathname === "/skills" ? "text-blue-600" : "text-gray-300"
            } text-white ease-out duration-300 active`}
          >
            Skills
          </a>
        </Link>

        <Link href="/projects">
          <a
            className={`${
              pathname === "/projects" ? "text-blue-600" : "text-gray-300"
            } text-white ease-out duration-300 active`}
          >
            Projects
          </a>
        </Link>

        <Link href="/blog">
          <a
            className={`${
              pathname === "/blog" ? "text-blue-600" : "text-gray-300"
            } text-white ease-out duration-300 active`}
          >
            Blog
          </a>
        </Link>
      </div>

      <div
        className={`${
          OpenMenu ? "h-full" : "h-0"
        } ease-out duration-300 overflow-hidden bg-[#17171f] inset-0 pt-20  fixed visible sm:hidden gap-3 flex flex-col justify-start align-start px-4 gap-3`}
      >
        <div className="flex fixed left-5 right-5 top-6 items-center justify-between">
          <div className="font-bold left-5 z-[999] text-white ease-out duration-300 text-lg">
            Omar Chatin
          </div>

          <div
            onClick={() => setOpenMenu(!OpenMenu)}
            className="cursor-pointer"
          >
            {OpenMenu ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: OpenMenu ? 180 : 0,
                  opacity: OpenMenu ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-0 z-[999] text-white ease-out duration-300 text-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: OpenMenu ? 180 : 0,
                  opacity: OpenMenu ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-0 z-[999] text-white ease-out duration-300 text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/">
            <a
              onClick={() => setOpenMenu(false)}
              className={`${
                pathname === "/"
                  ? "text-white ease-out duration-300 bg-blue-600"
                  : "text-gray-300 border-blue-600 border-2"
              } text-white ease-out duration-300 py-3 px-4 rounded`}
            >
              Home
            </a>
          </Link>

          <Link href="/about">
            <a
              onClick={() => setOpenMenu(false)}
              className={`${
                pathname === "/about"
                  ? "text-white ease-out duration-300 bg-blue-600"
                  : "text-gray-300 border-blue-600 border-2"
              } text-white ease-out duration-300 py-3 px-4 rounded`}
            >
              About
            </a>
          </Link>

          <Link href="/contact">
            <a
              onClick={() => setOpenMenu(false)}
              className={`${
                pathname === "/contact"
                  ? "text-white ease-out duration-300 bg-blue-600"
                  : "text-gray-300 border-blue-600 border-2"
              } text-white ease-out duration-300 py-3 px-4 rounded`}
            >
              Contact
            </a>
          </Link>

          <Link href="/skills">
            <a
              onClick={() => setOpenMenu(false)}
              className={`${
                pathname === "/skills"
                  ? "text-white ease-out duration-300 bg-blue-600"
                  : "text-gray-300 border-blue-600 border-2"
              } text-white ease-out duration-300 py-3 px-4 rounded`}
            >
              Skills
            </a>
          </Link>

          <Link href="/projects">
            <a
              onClick={() => setOpenMenu(false)}
              className={`${
                pathname === "/projects"
                  ? "text-white ease-out duration-300 bg-blue-600"
                  : "text-gray-300 border-blue-600 border-2"
              } text-white ease-out duration-300 py-3 px-4 rounded`}
            >
              Projects
            </a>
          </Link>

          <Link href="/blog">
            <a
              onClick={() => setOpenMenu(false)}
              className={`${
                pathname === "/blog"
                  ? "text-white ease-out duration-300 bg-blue-600"
                  : "text-gray-300 border-blue-600 border-2"
              } text-white ease-out duration-300 py-3 px-4 rounded`}
            >
              Blog
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

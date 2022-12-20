import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [OpenMenuBar, setOpenMenuBar] = useState(false);
  const [SearchOpen, setSearchOpen] = useState(true);
  const variants = {
    open: {
      height: "auto",
    },
    closed: {
      height: 0,
    },
  };

  return (
    <div className="relative">
      <Head>
        <title>omar blog</title>
        <meta
          name="description"
          content="see articles about technology, web development, programming, coding tips and much more..."
        />
      </Head>
      <nav className="flex px-5 sm:px-10 py-5 justify-between items-center bg-white w-full  sm:flex-row  flex-row-reverse z-30 fixed top-0">
        <div
          className="cursor-pointer z-50 flex gap-2 items-center "
          onClick={() => setOpenMenuBar(!OpenMenuBar)}
        >
          <div
            className="
                sm:items-start 
                items-end 
                flex 
                flex-col 
                gap-[.3em]"
          >
            <div
              className={`w-7 top-0 left-0 opacity-1 h-[.15em] relative transition-all bg-black ${
                OpenMenuBar ? "rotate-45 top-[.4em]" : ""
              }`}
            ></div>
            <div
              className={`w-5 top-0 left-0 opacity-1 h-[.15em] relative transition-all bg-black ${
                OpenMenuBar ? "-left-10 opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 top-0 left-0 opacity-1 h-[.15em] relative transition-all bg-black ${
                OpenMenuBar ? "-rotate-45 !w-7 -top-[.4em]" : ""
              }`}
            ></div>
          </div>
          <div className="sm:block hidden">MENU</div>
        </div>
        <div className="z-50">
          <Link href="/blog">
            <a className="logo text-2xl">Omar Blog</a>
          </Link>
        </div>
        <Link href="/blog/blogs">
          <a className="sm:flex hidden gap-2 items-center">
            <div className={`overflow-hidden transition-all w-[4.3em]`}>
              SEARCH
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5104 5.36372C11.1216 5.36372 8.83065 6.28656 7.14152 7.92923C5.4524 9.57191 4.50346 11.7999 4.50346 14.1229C4.50346 16.446 5.4524 18.674 7.14152 20.3167C8.83065 21.9593 11.1216 22.8822 13.5104 22.8822C15.8992 22.8822 18.1901 21.9593 19.8792 20.3167C21.5684 18.674 22.5173 16.446 22.5173 14.1229C22.5173 11.7999 21.5684 9.57191 19.8792 7.92923C18.1901 6.28656 15.8992 5.36372 13.5104 5.36372ZM2.55485e-07 14.1229C-0.000271085 12.0551 0.501331 10.0164 1.46401 8.17267C2.42669 6.32892 3.82326 4.73217 5.54015 3.51229C7.25703 2.29241 9.24574 1.48384 11.3445 1.15235C13.4433 0.820858 15.593 0.975803 17.6186 1.60458C19.6442 2.23336 21.4886 3.31822 23.0018 4.77093C24.515 6.22363 25.6542 8.00316 26.3269 9.96479C26.9995 11.9264 27.1866 14.0148 26.8729 16.0599C26.5591 18.1051 25.7534 20.0494 24.5213 21.7347L35.3679 32.283C35.7781 32.696 36.005 33.2492 35.9999 33.8233C35.9948 34.3975 35.758 34.9467 35.3405 35.3527C34.923 35.7587 34.3582 35.989 33.7678 35.994C33.1774 35.999 32.6086 35.7783 32.184 35.3794L21.3396 24.8333C19.3184 26.231 16.9405 27.0607 14.4666 27.2314C11.9927 27.4021 9.51822 26.9073 7.31429 25.8011C5.11036 24.695 3.26205 23.0202 1.97189 20.9603C0.681734 18.9004 -0.000481985 16.5349 2.55485e-07 14.1229Z"
                fill="black"
              />
            </svg>
          </a>
        </Link>

        <div
          className={`${
            OpenMenuBar ? "" : "!h-0"
          } h-[12em] duration-300 trasntion-all absolute overflow-hidden justify-center bg-white shadow-xl w-full px-10 top-[4.5em] flex gap-20`}
        >
          <div className="left py-10  flex flex-col gap-3">
            <div className="text-xl font-bold">pages</div>
            <div className="flex flex-col gap-1 capitalize">
              <Link href="/blog">
                <a className="hover:underline">blog</a>
              </Link>
              <Link href="/portfolio">
                <a className="hover:underline">about</a>
              </Link>
              <Link href="/">
                <a className="hover:underline">contact</a>
              </Link>
            </div>
          </div>
          <div className="right py-10 flex flex-col gap-3">
            <div className="text-xl font-bold">social</div>
            <div className="flex flex-col gap-1 capitalize">
              <a
                href="https://www.instagram.com/omar.chatin/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                instagram
              </a>
              <a
                href="https://github.com/omer-os"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/in/omar-chatin-555730200/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

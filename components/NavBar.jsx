import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <nav className="bg-black sticky top-0 z-[999] p-3 sm:p-5 text-white">
      <div className="mx-auto max-w-5xl md:px-6 flex justify-between">
        <div className="logo flex items-center space-x-1 font-bold cursor-pointer">
          <svg
            className="h-8 w-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <div>Omar Chatin</div>
        </div>
        <ul className="nav-links hidden sm:flex space-x-5">
          <li>
            <Link href="/">
              <a href="/" className="nav-link">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a href="/about" className="nav-link">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <button
          className="sm:hidden capitalize
        text-white font-bold  py-2 px-4 rounded"
          onClick={() => setOpenMenu(!OpenMenu)}
        >
          {OpenMenu ? (
            <svg
              className="h-10 w-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-10 w-10 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <line x1="3" y1="12" x2="21" y2="12" />{" "}
              <line x1="3" y1="6" x2="21" y2="6" />{" "}
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      <div className={`nav-links sm:hidden`}>
        <ul
          className={`transition ${
            OpenMenu ? "opacity-100 flex-column" : "opacity-0 hidden"
          } delay-150 duration-300 ease-in-out space-y-5 my-3`}
        >
          <li>
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

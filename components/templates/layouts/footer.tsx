import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-b from-zinc-950 border-t border-zinc-800">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/">
                <div className="flex items-center">
                  <img
                    src="/images/logo.png"
                    className="h-8 mr-3"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                    Omar Chatin
                  </span>
                </div>
              </Link>
              <p className="mt-4 text-gray-400 text-sm max-w-[20em]">
                Front End Developer, UI/UX Designer, Dental Technician.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Pages
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/projects" className="hover:underline">
                      Projects
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/templates" className="hover:underline">
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/all" className="hover:underline">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  More Pages
                </h2>
                <ul className=" text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/gallery" className="hover:underline ">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/apps" className="hover:underline">
                      Simple Apps
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm  sm:text-center text-gray-400">
              {new Date().getFullYear()}{" "}
              <Link
                href="https://github.com/omer-os/"
                className="hover:underline"
              >
                omer-os
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <Link href="#" className=" hover: hover:text-white">
                <AiFillLinkedin />
                <span className="sr-only">Linkdin Account</span>
              </Link>
              <Link href="#" className=" hover:text-white">
                <div>
                  <AiFillInstagram />
                  <span className="sr-only">Instagram page</span>
                </div>
              </Link>

              <Link href="#" className=" hover: hover:text-white">
                <BsGithub />
                <span className="sr-only">GitHub account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

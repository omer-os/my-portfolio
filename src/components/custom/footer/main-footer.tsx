import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MainFooter() {
  return (
    <>
      <footer className="mt-10 border-t border-zinc-800 bg-background bg-gradient-to-b from-zinc-950">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/">
                <div className="flex items-center">
                  <img
                    src="/images/logo.png"
                    className="mr-3 h-8"
                    alt="OmarChatin Logo"
                  />
                  <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                    Omar Chatin
                  </span>
                </div>
              </Link>
              <p className="mt-4 max-w-[20em] text-sm text-gray-400">
                Front End Developer, UI/UX Designer, Dental Technician.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Pages
                </h2>
                <ul className="font-medium text-gray-400">
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
                <ul className=" font-medium text-gray-400">
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
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm  text-gray-400 sm:text-center">
              {new Date().getFullYear()}{" "}
              <Link
                href="https://github.com/omer-os/"
                className="hover:underline"
              >
                omer-os
              </Link>
              . All Rights Reserved.
            </span>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Link href="#" className=" hover: hover:text-white">
                <Linkedin />
                <span className="sr-only">Linkdin Account</span>
              </Link>
              <Link href="#" className=" hover:text-white">
                <div>
                  <Instagram />
                  <span className="sr-only">Instagram page</span>
                </div>
              </Link>

              <Link href="#" className=" hover: hover:text-white">
                <Github />
                <span className="sr-only">GitHub account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

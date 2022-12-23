import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

export default function Navbar() {
  const [MenuOpened, setMenuOpened] = useState(false);

  const [DropDown, setDropDown] = useState(false);
  const { t, lang } = useTranslation("common");

  const links = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "about",
      url: "/about",
    },
    {
      name: "blog",
      url: "/blog",
    },
    {
      name: "projects",
      url: "/projects",
    },
    {
      name: "contact",
      url: "/contact",
    },
  ];

  return (
    <>
      <div
        className={`z-40 w-full flex items-center justify-between backdrop-blur fixed top-0 left-0 py-4 lg:px-[9em] sm:px-[5em] px-6 lb-animate md:px-[3em] `}
      >
        <Link href="/" className="font-bold text-xl">
          omar chatin
        </Link>

        <div className="md:flex items-center hidden gap-5 capitalize">
          {links.map((item, index) => (
            <Link
              onClick={() => setMenuOpened(false)}
              href={item.url}
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <motion.div
          className="lb-menu-btn md:hidden flex"
          onClick={() => setMenuOpened(!MenuOpened)}
        >
          <div
            className={`lb-menu-line ${MenuOpened && "lb-menu-line-1"}`}
          ></div>
          <div
            className={`lb-menu-line ${MenuOpened && "lb-menu-line-2"}`}
          ></div>
          <div
            className={`lb-menu-line ${MenuOpened && "lb-menu-line-3"}`}
          ></div>
        </motion.div>

        <div className="md:flex hidden gap-2">
          <div className="border rounded border-zinc-700 py-1 px-9">EN</div>
          <div className="bg-indigo-600 rounded py-1 font-bold px-9">Dark</div>
        </div>
      </div>

      <div
        className={`flex md:hidden fixed top-0 p-2 text-center z-50 bottom-0 bg-zinc-900 justify-center w-5/6 items-center left-0 lb-animate ${
          MenuOpened ? "" : "-left-[100vh]"
        }`}
      >
        <div
          className={`
        flex gap-4 capitalize text-xl 
        ${lang === "ar" ? "flex-col-reverse" : "flex-col"}
        `}
        >
          {links.map((item, index) => (
            <Link
              onClick={() => setMenuOpened(false)}
              href={item.url}
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`top-0 md:hidden bottom-0 w-0 bg-black/50 fixed z-40 lb-animate duration-200 ${
          MenuOpened ? "w-screen" : ""
        } `}
        onClick={() => setMenuOpened(false)}
      />
    </>
  );
}

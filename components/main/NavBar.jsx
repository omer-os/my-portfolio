import Link from "next/link";
import React, { useEffect, useState } from "react";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { motion } from "framer-motion";

export default function NavBar({ Theme, setTheme }) {
  const [OpenLang, setOpenLang] = useState(false);
  const [SwitchOpen, setSwitchOpen] = useState(true);
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="py-3 px-6 fixed left-0 right-0 top-0 flex justify-between items-center">
      {/* left */}
      <Link href="/">
        <a className="md:text-xl dark:text-white font-bold">Omar Chatin</a>
      </Link>

      {/* middle */}
      <div className="md:flex hidden capitalize gap-[1.5em] justify-between text-md text-red dark:text-white text-black">
        <Link href="/">
          <a className="hover:text-blue-500 transition duration-150">home</a>
        </Link>
        <Link href="/">
          <a className="hover:text-blue-500 transition duration-150">about</a>
        </Link>
        <Link href="/">
          <a className="hover:text-blue-500 transition duration-150">
            projects
          </a>
        </Link>
        <Link href="/">
          <a className="hover:text-blue-500 transition duration-150">blog</a>
        </Link>
      </div>

      {/* right */}
      <div className="flex z-[999] items-center relative">
        <button
          onClick={() => {
            setOpenLang(!OpenLang);
          }}
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          Language
        </button>

        <div
          className={` ${
            OpenLang ? "show" : "hidden"
          } gap-1 w-[7em] absolute right-20 -bottom-[5.5em] rounded xl flex flex-col bg-gray-700 text-white `}
        >
          <button
            className="border:ring-gray-500 active:bg-slate-500 p-2 rounded"
            onClick={() => setOpenLang(!OpenLang)}
          >
            Arabic
          </button>
          <button
            className="border:ring-gray-500 active:bg-slate-500 p-2 rounded"
            onClick={() => setOpenLang(!OpenLang)}
          >
            English
          </button>
        </div>

        <div
          className="relative form-check-input appearance-none w-10 ml-2 rounded-full float-left h-6 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm "
          onClick={() => {
            setSwitchOpen(!SwitchOpen);
            Theme == "dark" ? setTheme("light") : setTheme("dark");
          }}
        >
          <div
            className={`
          ${SwitchOpen ? "right-[.15em]" : "right-[1.1em]"}
          bg-blue-600 top-[.14em] absolute w-5 h-5 rounded-full transition-all duration-150 flex justify-center items-center
          `}
          >
            {SwitchOpen ? (
              <BedtimeIcon className="w-3 h-3 fill-white" />
            ) : (
              <LightModeIcon className="w-3 h-3 fill-white" />
            )}
          </div>
        </div>

        <IconButton
          onClick={() => {
            setMenuOpen(!MenuOpen);
          }}
          color="inherit"
          className="ml-2"
        >
          {MenuOpen ? (
            <ClearRoundedIcon/>
          ) : (
            <MenuRoundedIcon/>
          )}
        </IconButton>
      </div>

      <div
        className={`
      responsive w-screen top-[3.8em] bg-[#1e1e1e] bottom-0 md:hidden flex items-center flex-col justify-center fixed z-[999] transition-[left] duration-[.4s] ${
        MenuOpen ? `left-0` : `-left-[100%]`
      }`}
      >
        <div className="flex flex-col justify-between">
          <Link href="/">
            <a className="hover:text-blue-500 text-center capitalize my-4 transition duration-150">
              home
            </a>
          </Link>
          <Link href="/">
            <a className="hover:text-blue-500 text-center capitalize my-4 transition duration-150">
              about
            </a>
          </Link>
          <Link href="/">
            <a className="hover:text-blue-500 text-center capitalize my-4 transition duration-150">
              projects
            </a>
          </Link>

          <Link href="/">
            <a className="hover:text-blue-500 text-center capitalize my-4 transition duration-150">
              blog
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

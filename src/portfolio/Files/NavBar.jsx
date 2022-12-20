import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

export default function NavBar() {
  const [MenuOpened, setMenuOpened] = useState(false);

  const [DropDown, setDropDown] = useState(false);
  const { t, lang } = useTranslation('common');

  const links = [];
  for (let i = 0; i < 4 ; i++) {
    links.push({
      url: t(`urls.${i}.url`),
      name: t(`urls.${i}.name`),
    });
  }


  // 


  return (
    <>
      <div
        className={`z-40 w-full z-30 flex items-center justify-between backdrop-blur top-0 left-0 py-4 lg:px-[7em] z-50 fixed sm:px-[5em] px-6 lb-animate md:px-[3em]`}
      >
        <Link href="/portfolio/">
          <motion.a
            whileTap={{
              scale: 0.9,
            }}
            className="font-bold cursor-pointer text-xl"
          >
            Omar Ch.
          </motion.a>
        </Link>

        <div className="sm:flex items-center hidden gap-5">
          {links.map((item, index) => (
            <Link href={item.url} key={index}>
              <a onClick={() => setMenuOpened(false)}>{item.name}</a>
            </Link>
          ))}

          <LanguageDropDown
            lang={lang}
            setLanguage={setLanguage}
            DropDown={DropDown}
            setDropDown={setDropDown}
            t={t}
          />
        </div>

        <motion.div
          className="lb-menu-btn"
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
      </div>

      <div
        className={`flex sm:hidden fixed top-0 p-2 text-center z-50 bottom-0 bg-white justify-center w-5/6 items-center left-0 lb-animate ${
          MenuOpened ? "" : "-left-[100vh]"
        }`}
      >
        <div className={`
        flex gap-4 capitalize text-xl 
        ${lang==="ar"?"flex-col-reverse":"flex-col"}
        `}>
          <LanguageDropDown
            lang={lang}
            setLanguage={setLanguage}
            DropDown={DropDown}
            setDropDown={setDropDown}
            t={t}
          />
          {links.map((item, index) => (
            <Link href={item.url} key={index}>
              <a onClick={() => setMenuOpened(false)}>{item.name}</a>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`top-0 sm:hidden bottom-0 w-0 bg-black/50 fixed z-40 lb-animate duration-200 ${
          MenuOpened ? "w-screen" : ""
        } `}
        onClick={() => setMenuOpened(false)}
      />
    </>
  );

}

export const LanguageDropDown = ({
  lang,
  setLanguage,
  DropDown,
  setDropDown,
}) => {
  return (
    <div className="drop-down group border px-3 py-1  rounded relative">
      <button className="dropdown" onClick={() => setDropDown(!DropDown)}>
        {lang === "ar" ? "اللغة" : "Language"}
      </button>
      <div
        id="dropdownSmall"
        className={`${
          !DropDown ? "h-0" : "h-[5em]"
        } absolute right-0 z-10 transition-all duration-300  w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow overflow-hidden`}
      >
        <ul className="py-1">
          {["ar", "en"].map((item, index) => (
            <li key={index}>
              <a
                className={`${
                  lang === item ? "bg-gray-200" : ""
                } block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200`}
                onClick={() => {
                  setLanguage(item);
                  setDropDown(!DropDown);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

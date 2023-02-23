import React from "react";
import LinkChips from "./LinkChips";
import MenuBurgerButton from "./MenuBurgerButton";

export default function MainNavbar() {
  const links = [
    { name: "home", link: "/" },
    { name: "blog", link: "/blog" },
    { name: "projects", link: "/projects" },
    { name: "contact me", link: "/contact" },
  ];

  return (
    <div className="sticky z-50 top-0 left-0 bg-black">
      <div className="flex py-4 mx-auto content-width justify-between items-center">
        <div className="text-xl font-extrabold capitalize relative z-50">
          omar chatin
        </div>
        <div className="md:flex hidden gap-4 text-sm">
          {links.map((i) => (
            <LinkChips key={i.name} link={i} />
          ))}
        </div>

        <MenuBurgerButton links={links} />
      </div>
    </div>
  );
}

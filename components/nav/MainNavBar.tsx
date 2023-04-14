import Link from "next/link";
import BurgerButton from "./components/BurgerButton";
import NavMoreButton from "./components/NavMoreButton";
import LinkTab from "../common/tabs/LinkTab";

export default function MainNavBar() {
  const navLinks = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "projects",
      href: "/projects",
    },
    {
      name: "blog",
      href: "/blog",
    },
    {
      name: "contact",
      href: "/contact",
    },
  ];
  return (
    <header className="sticky top-0 left-0 z-50 p-3 px-6 bg-white border-b dark:bg-black dark:border-zinc-800 border-zinc-400">
      <nav className="relative z-10 flex items-center justify-between max-w-5xl mx-auto">
        <Link
          href="/"
          className="relative z-50  text-xl font-bold capitalize logo"
        >
          omar chatin
        </Link>

        <LinkTab
          className="md:flex hidden"
          links={navLinks}
          ItemFromBeggining={<NavMoreButton />}
          underlines
        />

        <div className="hidden gap-4 md:flex">
          <Link
            className="px-3 py-1 rounded dark:hover:!text-white hover:text-black dark:text-zinc-400 text-zinc-500"
            href="/templates"
          >
            Templates
          </Link>
          <Link
            className="flex items-center px-4 py-1 text-white capitalize transition-all bg-blue-600 border rounded dark:bg-black dark:text-zinc-400 hover:bg-white hover:text-black border-zinc-400"
            href="/signup"
          >
            signup
          </Link>
        </div>

        <BurgerButton />
      </nav>

      <div className="absolute inset-0 top-0 left-0 dark:bg-black/30 bg-white/30 backdrop-blur-lg"></div>
    </header>
  );
}

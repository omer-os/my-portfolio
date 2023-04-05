import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import NavChip from "./components/NavChip";
import BurgerButton from "./components/BurgerButton";

export default function MainNavBar() {
  return (
    <header className="sticky z-50 border-b border-zinc-800 top-0 left-0 p-3 px-6 ">
      <nav className="flex mx-auto max-w-5xl justify-between items-center relative z-10">
        <Link
          href="/"
          className="logo relative z-50 font-bold text-xl capitalize"
        >
          omar chatin
        </Link>

        <div className="md:flex hidden">
          {[
            {
              name: "home",
              link: "/",
            },
            {
              name: "projects",
              link: "/projects",
            },
            {
              name: "blog",
              link: "/blog",
            },
          ].map((i) => (
            <NavChip key={i.link} page={i} />
          ))}
        </div>

        <div className="md:flex hidden gap-4">
          <Link className="py-1 px-3 rounded text-zinc-400" href="/templates">
            Templates
          </Link>
          <Link
            className="bg-black py-1 text-zinc-400 px-4 flex items-center capitalize hover:bg-white hover:text-black transition-all border border-zinc-400 rounded"
            href="/signup"
          >
            signup
          </Link>
        </div>

        <BurgerButton />
      </nav>

      <div className="absolute inset-0 bg-black/30 top-0 left-0 backdrop-blur-lg"></div>
    </header>
  );
}

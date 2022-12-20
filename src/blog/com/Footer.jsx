import Link from "next/link";
import {motion} from "framer-motion";

export default function Footer() {
  return (
    <motion.div key="footer" layout className="bg-black flex md:gap-20 justify-center gap-10 text-white sm:p-10 p-7 sm:flex-row flex-col">
      <div className="left flex flex-col gap-2">
        <div className="logo text-2xl">Omar Blog</div>
        <div className="text sm:w-[20em]">
          im omar chatin full stack web developer over 3 years of expeariance in
          this filed. see more about me in my website omarchatin.vercel.app
        </div>
      </div>
      <div className="middle flex flex-col gap-2">
        <div className="logo text-2xl">Pages</div>
        <div className="flex flex-col gap-1">
          <Link href="/blogs">
            <a className="w-max hover:underline">blogs</a>
          </Link>
          <Link href="/portfolio">
            <a className="w-max hover:underline">about</a>
          </Link>
          <Link href="/portfolio">
            <a className="w-max hover:underline">portfolio</a>
          </Link>
          <Link href="/">
            <a className="w-max hover:underline">contact</a>
          </Link>
        </div>
      </div>
      <div className="right flex flex-col gap-2">
        <div className="logo text-2xl">more</div>
        <div className="flex flex-col gap-1">
          <Link href="https://github.com/omer-os/my-portfolio">
            <a className="w-max hover:underline">source code</a>
          </Link>
          <Link href="/projects">
            <a className="w-max hover:underline">more projects</a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

import React from "react";
import { ImGithub } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import SimpleChip from "@/components/common/chips/SimpleChip";
import UiButton from "@/components/common/ui/button/UiButton";
import Image from "next/image";

export default function HomeFirstSection() {
  return (
    <div>
      <div>
        <div className="sm:h-[15em] h-[13em] transition-all w-full bg-zinc-900 rounded-xl ring-2 ring-white relative flex items-end">
          <>
            <div className="absolute inset-0">
              <Image
                priority
                src="/images/hero-bg.jpg"
                fill
                className="object-cover rounded-xl animate-fade"
                alt="background image"
              />
            </div>
          </>
          <div className="sm:w-[6em] w-[5em] sm:h-[6em] h-[5em] transition-all rounded-full relative sm:left-10 left-5  sm:-bottom-12 -bottom-10 sm:ring-4 ring-2 ring-white">
            <Image
              priority
              fill
              alt="my image"
              src="/images/hero.jpg"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:mt-[5em] mt-16">
        <div className="flex items-center justify-between">
          <p className="text-2xl animate-fade-up font-extrabold capitalize sm:text-4xl">
            omar chatin
          </p>
          <div className="flex gap-4">
            {[
              {
                href: "https://github.com/omer-os",
                icon: <ImGithub />,
              },
              {
                href: "https://www.linkedin.com/in/omar-chatin/",
                icon: <AiFillLinkedin />,
              },
              {
                href: "https://www.instagram.com/omar.chatin/",
                icon: <RiInstagramFill />,
              },
            ].map((chip, index) => (
              <SimpleChip
                key={index}
                href={chip.href}
                variant={"bordered"}
                size={"sm"}
              >
                {chip.icon}
              </SimpleChip>
            ))}
          </div>
        </div>

        <>
          <p className="dark:text-zinc-300  text-zinc-600 sm:text-base text-xs capitalize max-w-[20em]">
            frontend web developer | musician | dental technician.
          </p>
        </>
        <p className="text-sm sm:text-xl">
          As a Front-End Web Developer with 4+ years of experience, I bring
          technical skills and a passion for creating user-friendly websites and
          applications to every project. With expertise in HTML, CSS,
          JavaScript, and React.
        </p>
      </div>
      <div className="flex gap-6 mt-6 sm:mt-10">
        <Link
          href="/projects"
          className="px-4 py-2 text-sm font-bold text-white rounded gradient-bg sm:text-base"
        >
          See Projects
        </Link>

        <UiButton>Download Resume</UiButton>
      </div>
    </div>
  );
}

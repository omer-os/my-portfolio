import Image from "next/image";
import React from "react";
import SocialLinkChip from "./SocialLinkChip";
import { ImGithub } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

export default function HomeFirstSection() {
  return (
    <div>
      <div>
        <div className="sm:h-[15em] h-[13em] transition-all w-full bg-zinc-900 rounded-xl ring-2 ring-white relative flex items-end">
          <div className="absolute inset-0">
            <Image
              priority
              src="https://media.licdn.com/dms/image/C4E16AQEyC-YcS5zIkA/profile-displaybackgroundimage-shrink_350_1400/0/1659781291341?e=1682553600&v=beta&t=xFcobQei4NrNBSgl6SboUOMTi6QNRTzUEg9_M5AxI5A"
              fill
              className="object-cover rounded-xl"
              alt="background image"
            />
          </div>
          <div className="sm:w-[6em] w-[5em] sm:h-[6em] h-[5em] transition-all rounded-full relative sm:left-10 left-5  sm:-bottom-12 -bottom-10 sm:ring-4 ring-2 ring-white">
            <Image
              priority
              fill
              alt="my image"
              src="https://media.licdn.com/dms/image/D4E03AQGS_2sQLHQmXw/profile-displayphoto-shrink_400_400/0/1676557598058?e=1682553600&v=beta&t=lme5PXUpLag5M4sixHXAaaHFj9yBYJtnvm4gALQtbhY"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:mt-[5em] mt-16">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-extrabold capitalize sm:text-4xl">
            omar chatin
          </p>
          <div className="flex gap-4">
            <SocialLinkChip Img={ImGithub} link="https://github.com/omer-os" />
            <SocialLinkChip
              Img={AiFillLinkedin}
              link="https://www.linkedin.com/in/omar-chatin/"
            />
            <SocialLinkChip
              Img={RiInstagramFill}
              link="https://www.instagram.com/omar.chatin/"
            />
          </div>
        </div>

        <p className="text-zinc-300 sm:text-base text-xs capitalize max-w-[20em]">
          frontend web developer | musician | dental technician
        </p>
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
          className="px-4 py-2 text-sm font-bold rounded gradient-bg sm:text-base"
        >
          See Projects
        </Link>
        <button className="px-4 py-2 text-sm font-bold rounded bg-zinc-900 sm:text-base">
          Download Resume
        </button>
      </div>
    </div>
  );
}

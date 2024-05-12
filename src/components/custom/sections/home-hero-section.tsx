import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

export default function HomeHeroSection() {
  return (
    <div>
      <div className="relative mt-6 flex h-[13em] w-full items-end rounded-xl bg-secondary/50 pb-10 outline transition-all sm:h-[15em]">
        <Image
          src="/images/hero.webp"
          alt="hero page image"
          className="rounded-xl object-cover"
          fill
          priority
        />
        <div className="relative -bottom-20 left-5 h-[5em] w-[5em] rounded-full ring-2 ring-white transition-all  sm:left-10 sm:h-[6em] sm:w-[6em]">
          <Image
            src="/images/profile-img.webp"
            alt="profile image"
            className="rounded-full"
            fill
            priority
            sizes="100%"
          />
        </div>
      </div>

      <div className="mt-16 flex flex-col">
        <div className="flex flex-col-reverse items-start justify-between gap-3 md:flex-row">
          <h1 className="text-2xl font-bold md:text-3xl">Omar Chatin</h1>

          <div className="flex gap-2">
            {[
              {
                name: "github",
                icon: Github,
                href: "/",
              },
              {
                name: "Linkdin",
                icon: Linkedin,
                href: "/",
              },
              {
                name: "Instagram",
                icon: Instagram,
                href: "/",
              },
            ].map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <Button variant={"outline"} size={"icon"}>
                    <item.icon size={16} />
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
        <p className="max-w-[20em] text-lg text-muted-foreground">
          Frontend Web Developer | Musician | Dental Technician.
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <Button variant={"default"}>See Projects</Button>
        <Button variant={"secondary"}>See My Blog</Button>
      </div>
    </div>
  );
}

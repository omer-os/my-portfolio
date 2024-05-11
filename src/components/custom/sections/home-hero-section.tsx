import Image from "next/image";
import React from "react";

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
        <div className="flex items-start justify-between">
          <h1 className="text-xl font-bold">Omar Chatin</h1>

          <div className="flex gap-2"></div>
        </div>
        <p className="max-w-[20em] text-sm text-muted-foreground">
          Frontend Web Developer | Musician | Dental Technician.
        </p>
      </div>
    </div>
  );
}

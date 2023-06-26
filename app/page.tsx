import HomePage from "@/components/pages/home/HomePage";
import { Button } from "@/components/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function page() {
  return (
    <div className="flex flex-col max-w-5xl px-6 mx-auto ">
      <HomePage />
    </div>
  );
}

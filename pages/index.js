import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Image from "next/image";
import me1 from "../public/images/me1.png";
import vec1 from "../public/images/ine-vec.svg";
import vec2 from "../public/images/out-vec.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <motion.div
      animate={{
        y:[100, 0],
        opacity: [0, 1],
      }}
      transition={{
        ease: "easeOut",
        duration: 1.5,
      }}
    >
      <Head>
        <title>Home</title>
      </Head>

      <div className="mx-auto transition delay-200 ease-in-out flex sm:flex-row flex-col-reverse items-center justify-between md:mx-auto px-5 sm:max-w-[50rem] my-5 sm:mt-20 ">
        <div className="flex flex-col space-y-6 sm:items-start items-left">
          <div className="text-white text-3xl text-center sm:text-left min-w-[13rem] sm:text-5xl md:text-6xl font-bold">
            Building <br /> beautiful web <br /> experiences
          </div>
          <button className="text-1x active:scale-95 transition sm:text-2xl bg-blue-600 text-white p-2 rounded capitalize mt-3 sm:mt-10" 
            onClick={() => router.push("/about")}
          >
            more about me
          </button>
        </div>

        <div className="sm:w-[300px] w-[220px] sm:m-0 m-3 min-w-[150px]">
          <Image src={me1} alt="me" className="rounded-full mx-auto sm:mx-0" />
        </div>
      </div>
    </motion.div>
  );
}

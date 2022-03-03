import React from "react";
import Image from "next/image";

export default function Home({ img, first, btn, lang }) {
  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`
      pt-[80px] sm:pt-[150px] md:max-w-[800px] px-10 sm:justify-between mx-auto items-center flex sm:flex-row flex-col-reverse
      `}
    >
      <div className="flex align-center flex-col items-start space-y-6 ">
        <div
          className={`
            text-white
            font-bold capitalize sm:text-4xl 
            pt-5 text-center text-2xl
            md:max-w-[380px]
            max-w-[350px]

            ${
              lang === "ar" ? "sm:text-right" : "sm:text-left"
            }
        `}
        >
          {/* ${lang === "ar" ? "text-right" : "text-left"}
            `} */}

          {first}
        </div>
        <button className="active:scale-[.9] transition mx-auto sm:mx-0 text-white p-2 px-4 font-bold text-xl bg-blue-600 rounded">
          {btn}
        </button>
      </div>
      <div className="right z-[1] w-[200px] sm:w-[300px]">
        <Image src={img} className="next-img" layout="responsive" alt="me" />
      </div>
    </div>
  );
}

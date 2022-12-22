import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function Error() {
  const { t, lang } = useTranslation("error");

  return (
    <div className=" flex items-center justify-center w-full h-screen px-10 ">
      <div className="py-20 bg-zinc-900 rounded-md shadow-xl lg:px-40 px-10 ">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-blue-600 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
            <span className="">{t("span")}</span>
            {t("title")}
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            {t("subtitle")}
          </p>

          <Link
            className="px-6 py-2 text-sm font-semibold text-white bg-blue-600"
            href="/"
          >
            {t("btn")}
          </Link>
        </div>
      </div>
    </div>
  );
}

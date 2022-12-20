import Link from "next/link";
import React from "react";
import { Layout } from "../src/portfolio/Files";
import useTranslation from "next-translate/useTranslation";

export default function Error() {
  const { t, lang } = useTranslation("error");

  return (
    <Layout>
      <div className=" flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-600 to-blue-400 px-10 ">
        <div className="py-20 bg-white rounded-md shadow-xl lg:px-40 px-10 ">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">{t("span")}</span>
              {t("title")}
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              {t("subtitle")}
            </p>

            <Link href="/portfolio">
              <a className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
                {t("btn")}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

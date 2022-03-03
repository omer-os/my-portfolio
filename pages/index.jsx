import React from "react";
import me from "../public/images/me1.png";
import Home from "../components/Home";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export default function index() {
  const { t, lang } = useTranslation("home");

  return (
    <>
      <Home img={me} lang={lang} first={t("home:first")} btn={t("home:btn")} />
    </>
  );
}

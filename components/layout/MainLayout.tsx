import React from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import MainNavBar from "../nav/MainNavBar";
import Footer from "./Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavBar />
      {children}
      <Footer />
    </>
  );
}

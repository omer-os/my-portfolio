import React from "react";
import MainNavBar from "../nav/MainNavBar";
import Footer from "./Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen dark:text-white dark:bg-black">
      <MainNavBar />
      {children}
      <Footer />
    </div>
  );
}

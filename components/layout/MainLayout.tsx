import React from "react";
import MainNavBar from "../nav/MainNavBar";
import Footer from "./Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainNavBar />
      {children}
      <Footer />
    </div>
  );
}

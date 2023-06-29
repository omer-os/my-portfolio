import React from "react";
import SimpleNav from "../navs/SimpleNav";
import Footer from "./footer";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <SimpleNav />

      <>{children}</>

      <Footer />
    </>
  );
}

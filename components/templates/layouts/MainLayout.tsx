import React from "react";
import SimpleNav from "../navs/SimpleNav";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <SimpleNav />

      <>{children}</>
    </>
  );
}

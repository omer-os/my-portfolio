import React from "react";
import MainNavbar from "../navbars/main-navbar";
import MainFooter from "../footer/main-footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <MainNavbar />
      {children}

      <MainFooter />
    </div>
  );
}

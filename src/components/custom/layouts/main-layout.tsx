import React from "react";
import MainNavbar from "../navbars/main-navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <MainNavbar />
      {children}
    </div>
  );
}

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <div className="h-[10em]"></div>
      <Footer />
    </div>
  );
}

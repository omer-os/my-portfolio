import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import FlashContainer from "./FlashContainer";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  const [notifications, setNotifications] = useState([1, 2, 3]);

  return (
    <div className="h-full w-full overflow-hidden">
      <AnimatePresence>
        <>
          <NavBar />
          <>{children}</>
          <Footer />
        </>
      </AnimatePresence>
    </div>
  );
}

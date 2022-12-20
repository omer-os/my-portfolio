import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function FlashContainer({ 
    notifications,
    setNotifications,
 }) {
  return (
    <>
      <AnimatePresence initial={false}>
        {notifications.map((id) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          >
            nnpi
          </motion.li>
        ))}
      </AnimatePresence>
    </>
  );
}


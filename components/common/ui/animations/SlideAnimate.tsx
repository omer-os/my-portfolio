"use client"
import { motion } from "framer-motion";

export default function SlideAnimate({
  children,
  animate,
}: {
  children: React.ReactNode;
  animate: "left" | "right" | "top" | "bottom";
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: animate === "left" ? -100 : animate === "right" ? 100 : 0,
        y: animate === "top" ? -100 : animate === "bottom" ? 100 : 0,
      }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

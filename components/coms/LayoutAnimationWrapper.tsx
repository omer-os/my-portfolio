"use client";
import { motion } from "framer-motion";

export default function LayoutAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <motion.div layout>{children}</motion.div>;
}

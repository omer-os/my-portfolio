"use client";
import "@/styles/glowingCard.css";
import { useEffect, useRef, MouseEvent, ReactNode } from "react";

type GlowingBoxProps = {
  children: ReactNode;
};

export default function GlowingBox({ children }: GlowingBoxProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove: any = (e: MouseEvent<HTMLDivElement>) => {
      const cards = document.getElementsByClassName("card");

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLDivElement;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const glowDiv = glowRef.current;

    if (glowDiv) {
      glowDiv.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (glowDiv) {
        glowDiv.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="card" ref={glowRef}>
      <div>{children}</div>
    </div>
  );
}

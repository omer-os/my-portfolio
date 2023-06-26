"use client";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DropDown({
  children,
  trigger,
  align = "center",
  width,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
  align?: "start" | "end" | "center";
  width?: string;
}) {
  const [Open, setOpen] = useState(false);
  return (
    <Popover.Root open={Open} onOpenChange={() => setOpen(!Open)}>
      <Popover.Trigger asChild>
        <div>{trigger}</div>
      </Popover.Trigger>

      <AnimatePresence>
        {Open && (
          <Popover.Portal forceMount>
            <Popover.Content align={align} asChild sideOffset={5}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                exit={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded p-3 bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)]
                
                ${width ? width : `w-[${width}]`}`}
              >
                <Popover.Arrow className="fill-white" />
                {children}
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
}

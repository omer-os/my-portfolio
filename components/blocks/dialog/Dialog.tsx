import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect } from "react";

export default function Dialog({
  children,
  open,
  setOpen,
  noBackground,
}: {
  children: any;
  open: boolean;
  setOpen: any;
  noBackground?: boolean;
}) {
  const handlePopState = useCallback(
    (event: any) => {
      if (open) {
        event.preventDefault();
        setOpen(false);
      }
    },
    [open, setOpen]
  );

  useEffect(() => {
    // Push a new state to history when the dialog opens
    if (open) {
      window.history.pushState(null, "");
    }
  }, [open]);

  useEffect(() => {
    // Add the popstate listener when the dialog is open, remove it when it's not
    if (open) {
      window.addEventListener("popstate", handlePopState);
    } else {
      window.removeEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [open, handlePopState]);

  useEffect(() => {
    // Disable scroll on the body element when the dialog is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 backdrop-blur-lg"
              onClick={() => setOpen(false)}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={`z-10 relative w-max ${
                !noBackground && "bg-zinc-900 border border-zinc-700"
              } p-3 rounded-lg shadow-lg`}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

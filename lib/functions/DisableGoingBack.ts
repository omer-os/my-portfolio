import { useCallback, useEffect } from "react";

/**
 * A React hook to disable browser back button navigation when a dialog is open.
 * It also restricts the body scroll while the dialog is open.
 * 
 * @param open A boolean indicating if the dialog is open.
 * @param setOpen A function to set the open state of the dialog.
 * 
 * @example
 * 
 * import useDisableBackButton from './useDisableBackButton';
 * 
 * const MyComponent = () => {
 *   const [open, setOpen] = useState(false);
 *   
 *   // Call the hook with your dialog's open state and setter
 *   useDisableBackButton(open, setOpen);
 *   
 *   return (
 *     <div>
 *       <button onClick={() => setOpen(true)}>Open Dialog</button>
 *       {open && <MyDialog setOpen={setOpen} />}
 *     </div>
 *   );
 * };
 */
const useDisableBackButton = (open: boolean, setOpen: (open: boolean) => void) => {
  const handlePopState = useCallback(
    (event: PopStateEvent) => {
      if (open) {
        event.preventDefault();
        setOpen(false);
      }
    },
    [open, setOpen]
  );

  useEffect(() => {
    if (open) {
      window.history.pushState(null, "");
    }
  }, [open]);

  useEffect(() => {
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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);
};

export default useDisableBackButton;

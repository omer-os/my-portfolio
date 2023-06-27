import { useEffect, useState } from "react";

/**
 * Custom hook that detects whether the user is scrolling down.
 * Returns a boolean indicating the scrolling direction.
 */
export function useIsScrollingDown(): boolean {
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    /**
     * Event handler for the scroll event.
     * Compares the current scroll position with the previous position
     * to determine if the user is scrolling down.
     */
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingDown(prevScrollPos < currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    // Attach scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrollingDown;
}

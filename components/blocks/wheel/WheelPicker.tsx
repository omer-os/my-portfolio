"use client";

import { useState, useRef, useEffect } from "react";

interface WheelPickerProps {
  list: Array<any>;
  State: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const WheelPicker: React.FC<WheelPickerProps> = ({ list, State, setState }) => {
  const ComponentRef = useRef<HTMLDivElement>(null);
  const [centeredItem, setCenteredItem] = useState(State);
  const [prevCenteredItem, setPrevCenteredItem] = useState(State);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isDown, setIsDown] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setStartY(e.clientY - (ComponentRef.current?.offsetTop || 0));
    setScrollTop(ComponentRef.current?.scrollTop || 0);
  };

  const onMouseLeave = () => {
    setIsDown(false);
  };

  const onMouseUp = () => {
    setIsDown(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.clientY - (ComponentRef.current?.offsetTop || 0);
    const walk = (y - startY) * 3; // scroll-fast factor
    if (ComponentRef.current) {
      ComponentRef.current.scrollTop = scrollTop - walk;
    }
  };

  useEffect(() => {
    const Component = ComponentRef.current;

    // detect when user scrolls
    const onScroll = () => {
      if (Component) {
        const { scrollTop, clientHeight } = Component;

        const scrollPosition = scrollTop + clientHeight;
        const centeredIndex = Math.round(scrollPosition / 33) - 5;

        const centeredItem = list[centeredIndex];

        setCenteredItem(centeredItem);

        setState(centeredItem);
      }
    };

    Component?.addEventListener("scroll", onScroll);

    return () => {
      Component?.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, list.length);
    const centeredIndex = list.indexOf(centeredItem);

    const centeredItemRef = itemRefs.current[centeredIndex];
    if (centeredItemRef) {
      centeredItemRef.scrollIntoView({
        block: "center",
      });
    }
  }, []);

  useEffect(() => {
    if (centeredItem !== prevCenteredItem) {
      // Vibrate for 10 milliseconds when the centered item changes
      if ("vibrate" in navigator) {
        navigator.vibrate(10);
      }
      setPrevCenteredItem(centeredItem);
    }
  }, [centeredItem]);

  return (
    <div
      ref={ComponentRef}
      className="relative flex flex-col pt-20 pb-20 overflow-y-scroll text-center cursor-grab active:cursor-grabbing noscrollwheel snap-mandatory snap-y "
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {list.map((item, index) => (
        <div
          style={{
            minHeight: 33,
          }}
          key={index}
          className={`snap-center pt-1 min-w-[6em] relative z-10 transition-all scale-100 select-none
              
            ${
              item === centeredItem
                ? "text-black  font-bold "
                : "text-zinc-500 font-normal  "
            }
              
              `}
          ref={(el) => (itemRefs.current[index] = el)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default WheelPicker;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type SimpleImageProps = {
  src: string;
  zoomable?: boolean;
  alt: string;
};

export default function SimpleImage(props: SimpleImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <>
        <motion.div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          data-open={isOpen}
          className={`
            data-[open=true]:fixed
            data-[open=true]:inset-0
            data-[open=true]:z-50
            flex
            items-center
            justify-center

            transition-all
            `}
        >
          <motion.div
            layout
            className={`
                bg-black/50
                inset-0
                absolute
                -z-10
                `}
          />
          <motion.div
            layout
            data-open={isOpen}
            className={`
                    data-[open=false]:w-full
                    data-[open=false]:h-full
                    absolute
                    inset-0

                    object-cover

                    data-[open=false]:cursor-zoom-in
                    data-[open=true]:cursor-zoom-out
                    data-[open=true]:relative


                    data-[open=true]:max-w-[35em]
                    data-[open=true]:w-full
                    data-[open=true]:max-h-[40em]
                    data-[open=true]:h-full
        `}
          >
            <Image
              data-open={isOpen}
              alt={props.alt}
              src={props.src}
              fill
              className="w-full h-full 
              
              data-[open=true]:object-contain
              object-cover
              
              "
            />
          </motion.div>
        </motion.div>
      </>
    </div>
  );
}

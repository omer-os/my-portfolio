"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { TiTick } from "react-icons/ti";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import { useParams } from "next/navigation";

const UiSelect = ({
  options,
  State,
  setState,
  noShadow,
  noBg,
}: {
  options: { label: string; value: string }[];
  State: string;
  setState: (value: string) => void;
  noShadow?: boolean;
  noBg?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const params = useParams();

  return (
    <Select.Root
      open={open}
      onOpenChange={(open) => {
        setTimeout(() => {
          setOpen(open);
        }, 200);
      }}
      onValueChange={(value) => setState(value)}
      value={State}
    >
      <Select.Trigger
        className={`inline-flex hover:brightness-90 items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px]  text-violet11  selection:bg-transparent shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none ${
          !noShadow && "shadow-[0_2px_10px]"
        } ${!noBg && "bg-white"}`}
        aria-label="Food"
      >
        <Select.Value placeholder="Select a fruit…" />
        <Select.Icon className="text-violet11">
          <BsChevronDown
            className={`transform transition-transform duration-100 ${
              open ? " rotate-180" : ""
            }`}
          />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          className="overflow-hidden z-50 bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
          sideOffset={4}
          asChild
          align={params?.locale === "ar" ? "end" : "start"}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <RiArrowDropUpLine />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-[5px]">
              <Select.Group>
                {options.map((option) => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className={`text-[13px] hover:bg-gray-100 leading-none text-violet11 rounded-[3px] flex items-center h-[30px] pr-[35px] pl-[25px] cursor-pointer active:scale-95 data-[state=checked]:bg-accent relative select-none${
                      option.value === State ? " data-highlighted" : ""
                    }
                    
                    `}
                    // onTouchStartCapture={() => setState(option.value)}
                    // onSelect={() => setState(option.value)}
                    onClick={() => {
                      setState(option.value);
                      setOpen(false);
                    }}
                  >
                    <Select.ItemText>{option.label}</Select.ItemText>
                    {option.value === State && (
                      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                        <TiTick />
                      </Select.ItemIndicator>
                    )}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <RiArrowDropDownLine />
            </Select.ScrollDownButton>
          </motion.div>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default UiSelect;

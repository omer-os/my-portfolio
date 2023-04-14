import Link from "next/link";
import React from "react";

interface SimpleButtonProps {
  href?: string; // Make href prop optional
  children: React.ReactNode;
  variant: "primary" | "secondary";
  bold?: boolean;
  px?: number;
  py?: number;
  onClick?: () => void;
  size?: "sm" | "xs" | "lg";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function SimpleButton(props: SimpleButtonProps) {
  const isLink = !!props.href; // Check if href prop is provided

  if (isLink) {
    return (
      <Link
        onClick={props.onClick}
        href={props.href || ""}
        data-variant={props.variant}
        data-bold={props.bold}
        className={`
        text-white
        rounded 
        data-[bold=true]:font-bold
        px-${props.px || "4"}
        py-${props.py || "2"}
        data-[variant=primary]:bg-zinc-900
        data-[variant=primary]:hover:bg-zinc-800
        data-[variant=secondary]:bg-black
        data-[variant=secondary]:hover:bg-white
        data-[variant=secondary]:hover:text-black
        data-[variant=secondary]:border-2
        data-[variant=secondary]:hover:border-white
        border-zinc-400
        transition-all
        active:scale-90
        `}
      >
        {props.children}
      </Link>
    );
  } else {
    return (
      <button
        onClick={props.onClick}
        data-variant={props.variant}
        data-bold={props.bold}
        data-size={props.size}
        className={`
        text-white
        rounded 
        data-[bold=true]:font-bold
        px-${props.px || "4"}
        py-${props.py || "2"}
        data-[variant=primary]:bg-zinc-900
        data-[variant=primary]:hover:bg-zinc-800
        data-[variant=secondary]:bg-black
        data-[variant=secondary]:hover:bg-white
        data-[variant=secondary]:hover:text-black
        data-[variant=secondary]:border-2
        data-[variant=secondary]:hover:border-white
        border-zinc-400
        transition-all
        active:scale-90

        data-[size=lg]:text-lg
        data-[size=sm]:text-sm
        data-[size=xs]:text-xs


        flex items-center gap-2



        `}
      >
        {props.startIcon}

        {props.children}

        {props.endIcon}
      </button>
    );
  }
}

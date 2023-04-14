import React from "react";
import Link from "next/link";

type SimpleChipProps = {
  variant: "bordered" | "filled";
  children: React.ReactNode;
  onClick?: () => void;
  size?: "xs" | "sm";
  href?: string;
  className?: string;
};

export default function SimpleChip(props: SimpleChipProps) {
  const { variant, children, onClick, size = "sm", href } = props;

  if (href) {
    // Render as link with href
    return (
      <Link
        data-variant={variant}
        data-size={size}
        className={`flex items-center justify-center transition-all rounded-lg active:bg-white/10 

        ring-1 
        ring-white
        text-white
        fill-white
        
    w-max

        data-[size=sm]:text-sm
        data-[size=xs]:text-xs
    
    
        data-[size=xs]:p-1
        p-2
    
        data-[variant=bordered]:ring-white
        data-[variant=bordered]:bg-transparent
        data-[variant=bordered]:hover:bg-white/10
        
        
        data-[variant=filled]:bg-zinc-900
        data-[variant=filled]:hover:bg-zinc-800
        data-[variant=filled]:ring-zinc-700
    
        acitve:scale-95
        
        ${props.className}
    
`}
        href={href}
      >
        {children}
      </Link>
    );
  } else {
    // Render as button with onClick
    return (
      <button
        onClick={onClick}
        data-variant={variant}
        data-size={size}
        className={`flex items-center justify-center transition-all rounded-lg active:bg-white/10 

    ring-1 
    ring-white
    text-white
    fill-white
    

    data-[size=sm]:text-sm
    data-[size=xs]:text-xs


    data-[size=xs]:p-1
    p-2

    data-[variant=bordered]:ring-white
    data-[variant=bordered]:bg-transparent
    data-[variant=bordered]:hover:bg-white/10
    
    
    data-[variant=filled]:bg-zinc-900
    data-[variant=filled]:hover:bg-zinc-800
    data-[variant=filled]:ring-zinc-700

    acitve:scale-95
    
    ${props.className}

    `}
      >
        {children}
      </button>
    );
  }
}

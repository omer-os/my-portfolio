import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-white text-black hover:bg-black hover:text-white",
        secondary:
          "bg-black text-white border border-white hover:bg-white hover:text-black",
        ghost: "bg-transparent hover:bg-gray-300",
        disabled: "bg-gray-300 text-gray-500 pointer-events-none",
        warning: "bg-red-500 text-white hover:bg-red-700",
        blue: "bg-blue-500 text-white hover:bg-blue-700",
        green: "bg-green-500 text-white hover:bg-green-700",
        zinc: "text-zinc-500 border border-zinc-500 hover:bg-white/10 ",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 !w-10",
      },
      rounded: {
        default: "rounded",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      fullwidth: {
        default: "w-auto",
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      rounded: "default",
      fullwidth: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, rounded, className, fullwidth, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, rounded, fullwidth, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Button, buttonVariants };

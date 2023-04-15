import { VariantProps, cva } from "class-variance-authority";

export const ButtonStyles = cva(
  `text-white rounded active:scale-95 fill-current transition-all flex gap-2 items-center justify-center text-center w-max`,
  {
    variants: {
      intent: {
        filled: `bg-zinc-900 hover:bg-zinc-800`,
        bordered: `bg-black hover:bg-white border hover:border-white text-white hover:text-black`,
        whiteFilled: `bg-white hover:bg-black !text-black hover:!text-white border-white border`,
      },

      padding: {
        md: "px-4 py-2",
        sm: "px-2 py-1",
      },

      border: {
        white: "border border-white",
        black: "border border-black",
        zinc: "border border-zinc-700",
      },

      textColor: {
        zinc: "text-zinc-400",
      },

      text: {
        sm: "text-sm",
        lg: "text-lg",
      },
      roundedFull: {
        true: "rounded-full",
      },

      bold: {
        true: "font-bold",
      },
    },

    defaultVariants: {
      padding: "md",
      intent: "filled",
      bold: false,
      roundedFull: false,
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  children?: React.ReactNode;

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  onClick?: any;
  className?: string;
}

export default function UiButton(props: ButtonProps) {
  const style = ButtonStyles({
    intent: props.intent,
    padding: props.padding,
    bold: props.bold,
    border: props.border,
    textColor: props.textColor,
    text: props.text,
    roundedFull: props.roundedFull,
    className: props.className,
  });
  return (
    <button {...props} className={style} onClick={props.onClick}>
      {props.startIcon}
      {props.children}
      {props.endIcon}
    </button>
  );
}

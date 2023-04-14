import Link from "next/link";
import React from "react";
import { ButtonStyles } from "../button/UiButton";
import { VariantProps } from "class-variance-authority";

interface UiLinkProps
  extends React.LinkHTMLAttributes<HTMLLinkElement>,
    VariantProps<typeof ButtonStyles> {
  children?: React.ReactNode;

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  href: string;
  className?: string;
}

export default function UiLink(props: UiLinkProps) {
  const style = ButtonStyles({
    bold: props.bold,
    border: props.border,
    intent: props.intent,
    padding: props.padding,
    roundedFull: props.roundedFull,
    textColor: props.textColor,
    text: props.text,
    className: props.className,
  });

  return (
    <Link href={props.href} className={style}>
      {props.startIcon}
      {props.children}
      {props.endIcon}
    </Link>
  );
}

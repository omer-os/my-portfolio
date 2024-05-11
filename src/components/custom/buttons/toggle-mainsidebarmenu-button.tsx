"use client";
import { useAtom } from "jotai";
import React from "react";
import { SidebarAtom } from "~/lib/global-atoms";

export interface ToggleMainSidebarMenuButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function ToggleMainSidebarMenuButton({
  children,
  ...props
}: ToggleMainSidebarMenuButtonProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(SidebarAtom);

  return (
    <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} {...props}>
      {children}
    </div>
  );
}

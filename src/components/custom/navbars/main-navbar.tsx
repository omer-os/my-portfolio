"use client";
import React from "react";
import MainNavbarMenu from "../menus/main-navbar-menu";
import { Button } from "~/components/ui/button";
import LoginButton from "../buttons/login-button";
import Link from "next/link";
import { useAtom } from "jotai";
import { SidebarAtom } from "~/lib/global-atoms";
import { Menu } from "lucide-react";
import ToggleMainSidebarMenuButton from "../buttons/toggle-mainsidebarmenu-button";
import { cn } from "~/lib/utils";
import { useSession } from "next-auth/react";
import MyUserAvatar from "../avatars/my-user-avatar";

export default function MainNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(SidebarAtom);
  const { data } = useSession();
  return (
    <nav className="sticky left-0 top-0 z-50 border-b">
      <div className="container flex items-center justify-between py-3">
        <div className="logo text-xl font-bold">Omar Chatin</div>

        <MainNavbarMenu />

        <ToggleMainSidebarMenuButton className="lg:hidden">
          <Button variant={"ghost"} className="relative z-30" size={"icon"}>
            <Menu size={16} />
          </Button>
        </ToggleMainSidebarMenuButton>

        <div className={cn("hidden items-center gap-4 lg:flex")}>
          <Link className="text-muted-foreground" href="/">
            Templates
          </Link>

          {data?.user ? (
            <MyUserAvatar session={data} />
          ) : (
            <LoginButton>
              <Button variant={"outline"}>Sign Up</Button>
            </LoginButton>
          )}
        </div>
      </div>
    </nav>
  );
}

import { Session } from "next-auth";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import LogoutButton from "../buttons/logout-button";
import Link from "next/link";

export default function MyUserAvatar({ session }: { session: Session | null }) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="h-8 w-8 rounded-full border border-gray-200 dark:border-gray-800"
            size="icon"
            variant="ghost"
          >
            <Avatar>
              <AvatarImage src={session?.user?.image ?? ""} alt="Avatar" />
              <AvatarFallback>
                {session?.user?.name?.split(" ").map((n) => n[0])}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <LogoutButton>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </LogoutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

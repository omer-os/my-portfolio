"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div onClick={() => signOut()}>{children}</div>;
}

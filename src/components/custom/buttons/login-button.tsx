"use client";
import React from "react";
import { signIn } from "next-auth/react";

export default function LoginButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={() => {
        signIn("discord");
      }}
    >
      {children}
    </div>
  );
}

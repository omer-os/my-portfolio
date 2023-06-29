"use client";

import { useRouter } from "next/navigation";

export default function GoToButton({
  href,
  children,
  className,
}: {
  href: string;
  className?: string;

  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div className={className} onClick={() => router.push(href)}>
      {children}
    </div>
  );
}

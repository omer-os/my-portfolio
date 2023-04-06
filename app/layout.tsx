import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "omar chatin",
  description: "Frontend Web Developer | Musician | Dental Technician.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen body">
        <div className="dark:text-white dark:!bg-black">
          <MainLayout>
            {children}
            <Analytics />
          </MainLayout>
        </div>
      </body>
    </html>
  );
}

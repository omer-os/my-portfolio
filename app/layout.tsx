import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "omar chatin",
  description: "Frontend Web Developer | Musician | Dental Technician.",
  icons: {
    icon: "/logocircle.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:selection:bg-pink-600 selection:bg-blue-600 selection:text-white ">
        <MainLayout>
          {children}
          <Analytics />
        </MainLayout>
      </body>
    </html>
  );
}

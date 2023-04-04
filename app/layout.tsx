import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import MainLayout from "@/components/layout/MainLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white min-h-screen relative">
        <MainLayout>
          {children}
          <Analytics />
        </MainLayout>
      </body>
    </html>
  );
}

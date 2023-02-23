import MainNavbar from "@/components/layout/nav/MainNavbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white min-h-screen">
        <MainNavbar />

        {children}

        <br />
        <br />
        <br />
        <br />
      </body>
    </html>
  );
}

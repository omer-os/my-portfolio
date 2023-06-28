import MainLayout from "@/components/templates/layouts/MainLayout";
import "@styles/globals.css";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { dark } from "@clerk/themes";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Roboto({
  weight: "400",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Omar Chatin",
  description: "Frontend Web Developer | Musician | Dental Technician.",
  openGraph: {
    locale: "en_US",
    images: ["/images/metadata.jpg"],
    title: "Omar Chatin",
    description: "Frontend Web Developer | Musician | Dental Technician.",
    url: "https://omarchatin.com",
    type: "website",
  },
  generator: "NextJS",
  applicationName: "portfolio website",
  keywords: [
    "web developer",
    "frontend developer",
    "dental technician",
    "musician",
  ],
  authors: {
    name: "Omar Chatin",
    url: "https://www.instagram.com/omar.chatin/",
  },
  colorScheme: "dark",
  creator: "Omar Chatin",
  publisher: "Omar Chatin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={
            inter.className + " dark bg-black text-white selection:bg-pink-600"
          }
        >
          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}

import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "~/components/custom/layouts/theme-provider";
import MainLayout from "~/components/custom/layouts/main-layout";
import SessionProvider from "~/components/custom/layouts/session-provider";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${GeistSans.variable}`}
      >
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
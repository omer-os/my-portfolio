import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

export function Layout({ children }) {
  const router = useRouter();

  const url_titles = {
    "/portfolio": "Home Page",
    "/portfolio/projects": "My projects",
    "/portfolio/about": "About me",
    "/portfolio/contact": "Contact me",
    "/blog": "Blog",
  };

  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <title>{url_titles[router.pathname] || "Portfolio"}</title>
        <meta name="keywords" content="omer chatin, portfolio website" />
        <meta
          name="description"
          content="Web Designer and Front End Developer with a passion for creating beautiful and functional and user friendly websites."
        />
        <meta name="robots" content="Index, Follow" />
        <meta name="language" content="En, Ar" />
        <meta name="copyright" content="2022 omar chatin" />
        <meta name="author" content="omer chatin" />
        <meta name="email" content="omerchetin19@gmail.com" />
        <meta property="og:title" content="omar chatin " />
        <meta property="og:description" content="Front end web developer." />
        <meta
          property="og:image"
          content="https://omarchatin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme2.8aef731c.jpg&w=1920&q=75"
        />
        <meta
          property="og:url"
          content="https://omarchatin.vercel.app/portfolio"
        />
        <meta
          property="twitter:title"
          content="omar chatin portfolio website"
        />
        <meta
          property="twitter:description"
          content="front end web developer."
        />
        <meta
          property="twitter:image"
          content="https://omarchatin.vercel.app/portfolio"
        />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      <NavBar />
      <div className="mt-[4em]" />
      <AnimatePresence
        onExitCompletze={() => window.scrollTo(0, 0)}
        exitBeforeEnter
      >
        <motion.main
          key={router.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <div className="mt-[2em]" />
      <Footer />
    </div>
  );
}

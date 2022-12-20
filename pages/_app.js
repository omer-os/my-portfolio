import "../styles/globals.css";
import "../styles/blog.css";
import { AnimateSharedLayout } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

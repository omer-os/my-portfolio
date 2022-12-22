import "../styles/globals.css";
import "../styles/blog.css";
import { AnimateSharedLayout } from "framer-motion";
import { Layout } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  );
}

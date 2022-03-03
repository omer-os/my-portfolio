import useTranslation from "next-translate/useTranslation";
import NavBar from "../components/NavBar";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  const { t, lang } = useTranslation("navbar");



  return (
    <div className="h-screen">
      <NavBar 
        t={t}
        lang={lang}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

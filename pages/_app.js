import React from "react";
import Layouts from "../components/Layouts";
import '../styles/globals.css';




export default function App({Component, pageProps}) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

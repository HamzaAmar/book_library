import React from "react";
import "keen-slider/keen-slider.min.css";
import type { AppProps } from "next/app";
import { UIContext } from "@context/UIContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIContext>
      <Component {...pageProps} />
    </UIContext>
  );
}
export default MyApp;

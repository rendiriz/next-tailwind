// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { AppWithLayout } from "@Interfaces";
// #endregion Local Imports

const Noop = ({ children }: any) => children;

const MyApp = ({ Component, pageProps }: AppWithLayout) => {
  const Layout = Component.Layout || Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

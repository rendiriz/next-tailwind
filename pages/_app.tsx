// #region Global Imports
import React, { ComponentType } from "react";
import { NextComponentType } from "next";
// #endregion Global Imports

type PageWithLayoutType = NextComponentType & { Layout: ComponentType };

type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: any;
};

const Noop = ({ children }: any) => children;

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const Layout = Component.Layout || Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

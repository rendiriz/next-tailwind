// #region Global Imports
import GlobalStyles from './../styles/GlobalStyles'
import React from 'react'
import App, { AppProps } from 'next/app'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import { I18nProvider } from 'next-rosetta'
// #endregion Global Imports

// #region Local Imports
import { AppWithLayout } from '@Interfaces'
// #endregion Local Imports

const Noop = ({ children }: any) => children

const MyApp = ({ Component, pageProps }: AppWithLayout) => {
  const Layout = Component.Layout || Noop

  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <I18nProvider table={pageProps.table}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nProvider>
    </CacheProvider>
  )
}

export default MyApp

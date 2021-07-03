// #region Global Imports
import GlobalStyles from './../styles/GlobalStyles'
import React from 'react'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  )
}

export default MyApp

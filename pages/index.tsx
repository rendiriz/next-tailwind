// #region Global Imports
import React, { ComponentType } from 'react'
import { NextPage } from 'next'
import tw from 'twin.macro'
// #endregion Global Imports

// #region Local Imports
import { Home as LayoutHome } from '@Components/Layout'
// #endregion Local Imports

type HomePage = NextPage & { Layout: ComponentType }

const styles = {
  container: ({ hasBackground }: any) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gray-400`,
  ],
}

const Home: HomePage = () => {
  return (
    <div css={styles.container({ hasBackground: true })}>
      <div>Home</div>
    </div>
  )
}

Home.Layout = LayoutHome

export default Home

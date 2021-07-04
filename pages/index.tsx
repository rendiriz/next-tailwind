// #region Global Imports
import React, { ComponentType } from 'react'
import { NextPage } from 'next'
import tw from 'twin.macro'
import { NextSeo } from 'next-seo'
// #endregion Global Imports

// #region Local Imports
import { Home as LayoutHome } from '@Components/Layout'
import { Button } from '@Components/Button'
// #endregion Local Imports

type HomePage = NextPage & { Layout: ComponentType }

const Container = tw.div`container mx-auto px-3`

const Home: HomePage = () => {
  return (
    <>
      <NextSeo title="Home" description="Description Home." />
      <Container>
        <div>Home</div>
        <Button />
      </Container>
    </>
  )
}

Home.Layout = LayoutHome

export default Home

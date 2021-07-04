// #region Global Imports
import React, { ComponentType } from 'react'
import { NextPage } from 'next'
import tw from 'twin.macro'
import { NextSeo } from 'next-seo'
// #endregion Global Imports

// #region Local Imports
import { Basic as LayoutBasic } from '@Components/Layout'
// #endregion Local Imports

type ComponentsPage = NextPage & { Layout: ComponentType }

const Container = tw.div`container mx-auto px-3`

const Components: ComponentsPage = () => {
  return (
    <>
      <NextSeo title="Components" description="Description Components." />
      <Container>
        <div>Components</div>
      </Container>
    </>
  )
}

Components.Layout = LayoutBasic

export default Components

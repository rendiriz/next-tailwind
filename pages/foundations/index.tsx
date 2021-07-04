// #region Global Imports
import React, { ComponentType } from 'react'
import { NextPage } from 'next'
import tw from 'twin.macro'
import { NextSeo } from 'next-seo'
// #endregion Global Imports

// #region Local Imports
import { Basic as LayoutBasic } from '@Components/Layout'
// #endregion Local Imports

type FoundationsPage = NextPage & { Layout: ComponentType }

const Container = tw.div`container mx-auto px-3`

const Foundations: FoundationsPage = () => {
  return (
    <>
      <NextSeo title="Foundations" description="Description Foundations." />
      <Container>
        <div>Foundations</div>
      </Container>
    </>
  )
}

Foundations.Layout = LayoutBasic

export default Foundations

// #region Global Imports
import React, { ComponentType } from 'react'
import { NextPage } from 'next'
import tw from 'twin.macro'
// #endregion Global Imports

// #region Local Imports
import { Basic as LayoutBasic } from '@Components/Layout'
// #endregion Local Imports

type FoundationsPage = NextPage & { Layout: ComponentType }

const Foundations: FoundationsPage = () => {
  return (
    <div css={[tw`container mx-auto`]}>
      <div>Foundations</div>
    </div>
  )
}

Foundations.Layout = LayoutBasic

export default Foundations

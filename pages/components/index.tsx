// #region Global Imports
import React, { ComponentType } from 'react'
import { NextPage } from 'next'
import tw from 'twin.macro'
// #endregion Global Imports

// #region Local Imports
import { Basic as LayoutBasic } from '@Components/Layout'
// #endregion Local Imports

type ComponentsPage = NextPage & { Layout: ComponentType }

const Components: ComponentsPage = () => {
  return (
    <div css={[tw`container mx-auto`]}>
      <div>Components</div>
    </div>
  )
}

Components.Layout = LayoutBasic

export default Components

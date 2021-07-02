// #region Global Imports
import React, { ComponentType } from 'react'
import { NextPage } from 'next'
// #endregion Global Imports

// #region Local Imports
import { Basic as LayoutBasic } from '@Components/Layout'
// #endregion Local Imports

type FoundationsPage = NextPage & { Layout: ComponentType }

const Foundations: FoundationsPage = () => {
  return <div>Foundations</div>
}

Foundations.Layout = LayoutBasic

export default Foundations

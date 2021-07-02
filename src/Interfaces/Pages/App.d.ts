// #region Global Imports
import { ComponentType } from 'react'
import { NextComponentType } from 'next'
import type { AppProps } from 'next/app'
// #endregion Global Imports

export interface AppWithLayout extends AppProps {
  Component: NextComponentType & { Layout: ComponentType }
}

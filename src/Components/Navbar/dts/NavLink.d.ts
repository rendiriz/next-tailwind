import React from 'react'
import { LinkProps } from 'next/link'

declare namespace INavLink {
  export interface IProps extends LinkProps {
    children: React.ReactElement
  }
}

export { INavLink }

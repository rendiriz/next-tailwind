import * as React from 'react'

import { IBasic } from './dts/Basic'

import { Navbar } from '@Components/Navbar'

const Basic: React.FunctionComponent<IBasic.IProps> = ({
  children,
}): JSX.Element => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export { Basic }

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { INavLink } from './dts/NavLink'

const NavLink: React.FunctionComponent<INavLink.IProps> = ({
  children,
  href,
  ...props
}): JSX.Element => {
  const router = useRouter()

  return (
    <Link href={href} {...props}>
      {React.cloneElement(children, {
        'aria-current': router.pathname === href ? 'page' : null,
      })}
    </Link>
  )
}

export { NavLink }

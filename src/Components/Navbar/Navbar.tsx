import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { css } from '@emotion/react'
import tw from 'twin.macro'

import { INavbar } from './dts/Navbar'
import { NavLink } from '@Components/Navbar'

import workflow from '@Static/images/workflow-mark-indigo-500.svg'
import workflowWithText from '@Static/images/workflow-logo-indigo-500-mark-white-text.svg'

const styles = {
  main: [tw`bg-gray-800`],
  container: [tw`container mx-auto px-3`],
  navbar: [tw`relative flex flex-wrap items-center justify-between h-16`],
  nav: [
    tw`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`,
  ],
  brand: [tw`flex-shrink-0 flex items-center`],
}

const navLink = css`
  ${tw`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}

  &[aria-current] {
    ${tw`bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium`}
  }
`

const Navbar: React.FunctionComponent<INavbar.IProps> = (): JSX.Element => {
  return (
    <nav css={styles.main}>
      <div css={styles.container}>
        <div css={styles.navbar}>
          <div css={styles.nav}>
            <div css={styles.brand}>
              <div css={[tw`block lg:hidden h-8 w-auto`]}>
                <Image src={workflow} alt="Workflow" />
              </div>
              <div css={[tw`hidden lg:block h-8 w-auto`]}>
                <Image src={workflowWithText} alt="Workflow" />
              </div>
            </div>

            <div css={[tw`hidden sm:block sm:ml-6`]}>
              <div css={[tw`flex space-x-4`]}>
                <NavLink href="/">
                  <a css={navLink}>Home</a>
                </NavLink>
                <NavLink href="/foundations">
                  <a css={navLink}>Foundations</a>
                </NavLink>
                <NavLink href="/components">
                  <a css={navLink}>Components</a>
                </NavLink>
              </div>
            </div>
          </div>

          <div
            css={[
              tw`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`,
            ]}
          >
            <button
              css={[
                tw`bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`,
              ]}
            >
              <span css={[tw`sr-only`]}>View notifications</span>

              <svg
                css={[tw`h-6 w-6`]}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <div css={[tw`ml-3 relative`]}>
              <div>
                <button
                  css={[
                    tw`bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`,
                  ]}
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span css={[tw`sr-only`]}>Open user menu</span>
                  <Image
                    css={[tw`h-8 w-8 rounded-full`]}
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Workflow"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export { Navbar }

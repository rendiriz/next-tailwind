// #region Global Imports
import React, { Fragment } from 'react'
import Image from 'next/image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
// #endregion Global Imports

// #region Local Imports
import { INavbar } from './dts/Navbar'
import { NavLink } from '@Components/Navbar'
import { Disclosure, Menu as HLMenu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
// #endregion Local Imports

// #Images
import workflow from '@Static/images/workflow-mark-indigo-500.svg'
import workflowWithText from '@Static/images/workflow-logo-indigo-500-mark-white-text.svg'

/* Styles */
const Navigation = tw(Disclosure)`bg-gray-800`
const Container = tw.div`container mx-auto px-3`
const NavigationBar = tw.div`relative flex flex-wrap items-center justify-between h-16`

// Menu
const Menu = styled.div(() => [
  tw`flex-1 flex items-center justify-center`,
  tw`sm:items-stretch sm:justify-start`,
])
const MenuBrand = tw.div`flex-shrink-0 flex items-center`
const MenuLogoSm = tw.div`block lg:hidden h-8 w-auto`
const MenuLogoLg = tw.div`hidden lg:block h-8 w-auto`
const MenuPanel = tw.div`hidden sm:block sm:ml-6`
const MenuItems = tw.div`flex space-x-4`
const MenuLink = styled.a(() => [
  tw`text-gray-300 px-3 py-2 rounded-md text-sm font-medium`,
  tw`hover:bg-gray-700 hover:text-white`,
  css`
    &[aria-current] {
      ${tw`bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium`}
    }
  `,
])

// Menu Right
const MenuRight = styled.div(() => [
  tw`absolute inset-y-0 right-0 flex items-center pr-2`,
  tw`sm:static sm:inset-auto sm:ml-6 sm:pr-0`,
])
const MenuRightButton = styled.button(() => [
  tw`bg-gray-800 p-1 rounded-full text-gray-400`,
  tw`hover:text-white`,
  tw`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`,
])
const MenuRightIcon = tw.div`h-6 w-6`

// Profile
const Profile = tw(HLMenu)`ml-3 relative`
const ProfileButton = styled(HLMenu.Button)(() => [
  tw`bg-gray-800 flex text-sm rounded-full`,
  tw`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`,
])
const ProfileImage = tw(Image)`h-8 w-8 rounded-full`
const ProfileItems = styled(HLMenu.Items)(() => [
  tw`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`,
  tw`focus:outline-none`,
])
const ProfileLink = styled.a(() => [
  tw`block px-4 py-2 text-sm text-gray-700`,
  tw`hover:bg-gray-200`,
])

// Mobile Menu
const MobileMenu = tw.div`absolute inset-y-0 left-0 flex items-center sm:hidden`
const MobileMenuButton = styled(Disclosure.Button)(() => [
  tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400`,
  tw`hover:text-white hover:bg-gray-700`,
  tw`focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`,
])
const MobileMenuIcon = tw.div`block h-6 w-6`
const MobileMenuPanel = tw(Disclosure.Panel)`sm:hidden`
const MobileMenuPanelBody = tw.div`px-2 pt-2 pb-3 space-y-1`
const MobileMenuLink = styled.a(() => [
  tw`text-gray-300 block px-3 py-2 rounded-md text-base font-medium`,
  tw`hover:bg-gray-700 hover:text-white`,
  css`
    &[aria-current] {
      ${tw`bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium`}
    }
  `,
])
/* End Styles */

const Navbar: React.FunctionComponent<INavbar.IProps> = (): JSX.Element => {
  return (
    <Navigation as="nav">
      {({ open }) => (
        <>
          <Container>
            <NavigationBar>
              <MobileMenu>
                <MobileMenuButton>
                  <span css={[tw`sr-only`]}>Open main menu</span>
                  {open ? (
                    <MobileMenuIcon>
                      <FontAwesomeIcon icon={faTimes} size="lg" />
                    </MobileMenuIcon>
                  ) : (
                    <MobileMenuIcon>
                      <FontAwesomeIcon icon={faBars} size="lg" />
                    </MobileMenuIcon>
                  )}
                </MobileMenuButton>
              </MobileMenu>

              <Menu>
                <MenuBrand>
                  <MenuLogoSm>
                    <Image src={workflow} alt="Workflow" />
                  </MenuLogoSm>
                  <MenuLogoLg>
                    <Image src={workflowWithText} alt="Workflow" />
                  </MenuLogoLg>
                </MenuBrand>

                <MenuPanel>
                  <MenuItems>
                    <NavLink href="/">
                      <MenuLink>Home</MenuLink>
                    </NavLink>
                    <NavLink href="/foundations">
                      <MenuLink>Foundations</MenuLink>
                    </NavLink>
                    <NavLink href="/components">
                      <MenuLink>Components</MenuLink>
                    </NavLink>
                  </MenuItems>
                </MenuPanel>
              </Menu>

              <MenuRight>
                <MenuRightButton>
                  <span css={[tw`sr-only`]}>View notifications</span>

                  <MenuRightIcon>
                    <FontAwesomeIcon icon={faBell} size="lg" />
                  </MenuRightIcon>
                </MenuRightButton>

                <Profile as="div">
                  {({ open }) => (
                    <>
                      <div>
                        <ProfileButton>
                          <span css={[tw`sr-only`]}>Open user menu</span>
                          <ProfileImage
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Workflow"
                            width={32}
                            height={32}
                          />
                        </ProfileButton>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <ProfileItems>
                          <HLMenu.Item>
                            <NavLink href="#">
                              <ProfileLink>Your Profile</ProfileLink>
                            </NavLink>
                          </HLMenu.Item>
                          <HLMenu.Item>
                            <NavLink href="#">
                              <ProfileLink>Settings</ProfileLink>
                            </NavLink>
                          </HLMenu.Item>
                          <HLMenu.Item>
                            <NavLink href="#">
                              <ProfileLink>Sign out</ProfileLink>
                            </NavLink>
                          </HLMenu.Item>
                        </ProfileItems>
                      </Transition>
                    </>
                  )}
                </Profile>
              </MenuRight>
            </NavigationBar>
          </Container>

          <MobileMenuPanel>
            <MobileMenuPanelBody>
              <NavLink href="/">
                <MobileMenuLink>Home</MobileMenuLink>
              </NavLink>
              <NavLink href="/foundations">
                <MobileMenuLink>Foundations</MobileMenuLink>
              </NavLink>
              <NavLink href="/components">
                <MobileMenuLink>Components</MobileMenuLink>
              </NavLink>
            </MobileMenuPanelBody>
          </MobileMenuPanel>
        </>
      )}
    </Navigation>
  )
}

export { Navbar }

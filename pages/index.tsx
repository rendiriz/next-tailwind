// #region Global Imports
import React, { ComponentType } from 'react'
import { NextPage } from 'next'
import type { GetServerSideProps } from 'next'
import tw from 'twin.macro'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import type { MyLocale } from '../i18n'
import { useI18n, I18nProps } from 'next-rosetta'
import { useRouter } from 'next/router'
// #endregion Global Imports

// #region Local Imports
import { Home as LayoutHome } from '@Components/Layout'
import { Button } from '@Components/Button'
// #endregion Local Imports

type HomePage = NextPage & { Layout: ComponentType }

const Container = tw.div`container mx-auto px-3`

const Home: HomePage = () => {
  const router = useRouter()
  const i18n = useI18n<MyLocale>()
  const { t } = i18n

  return (
    <>
      <NextSeo title={t('home')} description="Description Home." />
      <Container>
        <div>{t('home')}</div>
        <ul>
          {router.locales?.map(loc => (
            <li key={loc}>
              <Link href={router.asPath} locale={loc}>
                <a className={loc === router.locale ? 'is-active' : ''}>
                  {loc}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

Home.Layout = LayoutHome

export const getServerSideProps: GetServerSideProps<I18nProps<MyLocale>> =
  async context => {
    const locale = context.locale || context.defaultLocale
    const { table = {} } = await import(`../i18n/${locale}`)
    return { props: { table } }
  }

export default Home

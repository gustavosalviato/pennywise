import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/default'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from 'next-auth/react'
import { TransactionContextProvider } from '../context/TransactionsContext'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <TransactionContextProvider>
        <SessionProvider session={session}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <DefaultSeo
              openGraph={{
                type: 'website',
                locale: 'pt-BR',
                url: 'http://pennywise.vercel.app',
                siteName: 'PennyWise'
              }}
            />
            <Component {...pageProps} />
          </ThemeProvider>
        </SessionProvider>
      </TransactionContextProvider>
    </>
  )
}

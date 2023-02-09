import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/default'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

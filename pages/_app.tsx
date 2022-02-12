import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { VechaiProvider } from '@vechaiui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <VechaiProvider>
      <Component {...pageProps} />

    </VechaiProvider>
  )
}

export default MyApp

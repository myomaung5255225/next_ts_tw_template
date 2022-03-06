import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PageWrapper } from '../Templates/PageWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  )
}

export default MyApp

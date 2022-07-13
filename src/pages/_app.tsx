import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import { Head } from '@/components/parts/head'
import { WrapChakraProvider } from '@/theme'
import { selectMockServer } from '@/lib/selectMockServer'

const globalStyle = css``
if (process.env.NODE_ENV === 'development') selectMockServer('rest')

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <WrapChakraProvider>
    <Head>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
    </Head>
    <Global styles={globalStyle} />
    <Component {...pageProps} />
  </WrapChakraProvider>
)

export default MyApp

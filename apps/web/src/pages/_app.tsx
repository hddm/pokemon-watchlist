import { AppProvider } from '@/context/globalState'
import { GraphQLProvider } from '@/graphql'
import '../styles/globals.css'
import 'ui/styles.css'
// include styles from the ui package

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GraphQLProvider>
        <Component {...pageProps} />
      </GraphQLProvider>
    </AppProvider>
  )
}

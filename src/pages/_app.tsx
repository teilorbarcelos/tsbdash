import { AppProps } from "next/app"
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext"
import { makeServer } from "../services/mirage"
import { QueryClient, QueryClientProvider } from "react-query"

const envLocal = process.env.NODE_ENV

if (envLocal === 'development') {
  makeServer()
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      {
        envLocal === 'development' &&
        <ReactQueryDevtools />
      }

    </QueryClientProvider>
  )
}

export default MyApp
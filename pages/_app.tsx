import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {NavProvider} from "@/context/Navigation/NavContext";
import {ModalProvider} from "@/context/Modal/ModalContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Modals from "@/components/Modals";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Loader from "@/components/Loader";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [state, setState] = useState({
        isRouteChanging: false,
        loadingKey: 0,
    })
    useEffect(() => {
        const handleRouteChangeStart = () => {
            setState((prevState) => ({
                ...prevState,
                isRouteChanging: true,
                loadingKey: prevState.loadingKey ^ 1,
            }))
        }

        const handleRouteChangeEnd = () => {
            setState((prevState) => ({
                ...prevState,
                isRouteChanging: false,
            }))
        }

        router.events.on('routeChangeStart', handleRouteChangeStart)
        router.events.on('routeChangeComplete', handleRouteChangeEnd)
        router.events.on('routeChangeError', handleRouteChangeEnd)

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
            router.events.off('routeChangeComplete', handleRouteChangeEnd)
            router.events.off('routeChangeError', handleRouteChangeEnd)
        }
    }, [router.events])
  return(
      <QueryClientProvider client={queryClient}>
          <Loader isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
          <ModalProvider>
              <NavProvider>
                <Component {...pageProps} />
                <Modals/>
              </NavProvider>
          </ModalProvider>
          <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  )

}

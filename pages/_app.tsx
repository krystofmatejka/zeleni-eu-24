import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
import { Transition } from "../src/transition"
import styles from "./styles.css";

const lato = Lato({
  weight: ['300', '700'],
  subsets: ['latin-ext'],
  variable: '--font-lato',
  display: 'swap',
})

export default function MyApp({ Component, pageProps }: AppProps) {
    console.log('app', styles, lato)
    return (
        <>
        <style jsx global>
{`html {
    font-family: ${lato.style.fontFamily};
    --font-lato: ${lato.style.fontFamily};
}
`}</style>
            <Transition>
                <Component {...pageProps} />
            </Transition>
        </>
    )
}

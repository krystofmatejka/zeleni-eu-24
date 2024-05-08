import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Lato } from 'next/font/google'
import { Transition } from "../src/transition"
import styles from "./styles.css";

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lato',
  display: 'swap',
})

export default function MyApp({ Component, pageProps }: AppProps) {
    console.log('app', styles)
    return (
        <>
        <Head>
            <title>Jsou Zelení a Johanna Nejedlová tvoje volba? Pomoz jím získat hlasy</title>
        </Head>
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

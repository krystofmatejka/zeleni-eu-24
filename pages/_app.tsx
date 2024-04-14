import type { AppProps } from 'next/app'
import { Transition } from "../src/transition"
import styles from "./styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    console.log('app', styles)
    return <Transition><Component {...pageProps} /></Transition>
}

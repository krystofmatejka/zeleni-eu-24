import Link from 'next/link'
import styles from "./styles.module.css";

export default function PotvrzeniVolby() {
    return (
        <div className={styles.page}>
            <h1>Potvrzení volby</h1>
            <ul>
                <li><Link href="/rekni-nam-co-je-pro-tebe-dulezite">Řekni nám co je pro tebe důležité</Link></li>
                <li><Link href="/">Úvod</Link></li>
            </ul>
        </div>
    )
}
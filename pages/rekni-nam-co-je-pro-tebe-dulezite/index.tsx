import Link from 'next/link'
import styles from "./styles.module.css";

export default function RekniNamCoJeProTebeDulezite() {
    return (
        <div className={styles.page}>
            <h1>Řekni nám co je pro tebe důležité</h1>
            <ul>
                <li><Link href="/">Úvod</Link></li>
                <li><Link href="/potvrzeni-volby">Potvrzení volby</Link></li>
            </ul>
        </div>
    )
}
import Link from 'next/link'
import styles from "./index.module.css";

export default function Index() {
    return (
        <div className={styles.page}>
            <h1>Úvod</h1>
            <ul>
                <li><Link href="/rekni-nam-co-je-pro-tebe-dulezite">Řekni nám co je pro tebe důležité</Link></li>
                <li><Link href="/potvrzeni-volby">Potvrzení volby</Link></li>
            </ul>
        </div>
    )
}

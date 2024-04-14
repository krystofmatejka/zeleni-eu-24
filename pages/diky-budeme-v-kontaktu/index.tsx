import Link from 'next/link'
//import styles from "./styles.module.css";

export default function DikyBudemeVKontaktu() {
    return (
        <div>
            <h1>Díky, budeme v kontaktu</h1>
            <p>
                <Link href='/darujte'><button>Jdeme dál</button></Link>
            </p>
        </div>
    )
}
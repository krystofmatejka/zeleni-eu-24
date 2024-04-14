import Link from 'next/link'
//import styles from "./styles.module.css";

export default function PosleteZpravuKamaradum() {
    return (
        <div>
            <h1>Pošlete zprávu kamarádům</h1>
            <p>Sdílejte skrze messenger, whatsapp, signal, ...</p>
            <p>
                <Link href='/kolika-lidem-jste-to-poslali'><button>Mám hotovo</button></Link>
            </p>
        </div>
    )
}
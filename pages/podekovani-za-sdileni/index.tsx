import Link from 'next/link'
//import styles from "./styles.module.css";

export default function PodekovaniZaSdileni() {
    return (
        <div>
            <h1>Děkujeme za sdílení</h1>
            <p>
                <Link href='/poslete-zpravu-kamaradum'><button>Další krok</button></Link>
            </p>
        </div>
    )
}
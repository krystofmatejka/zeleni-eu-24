import Link from 'next/link'
import { useRouter } from 'next/router'
//import styles from "./styles.module.css";

export default function Darujte() {
    const router = useRouter()

    return (
        <div>
            <h1>Darujte</h1>
            <p>
                <a href='https://dary.zeleni.cz/eurovolby' target='_blank' onClick={() => router.push('/podekovani-na-konec')}><button>Jít na darovací stránku!</button></a>
                <Link href='/podekovani-na-konec'><button>Nyní ne</button></Link>
            </p>
        </div>
    )
}
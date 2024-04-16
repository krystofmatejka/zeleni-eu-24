import Link from 'next/link'
import { Layout } from '@/layout'

export default function PosleteZpravuKamaradum() {
    return (
        <Layout>
            <h1>Pošlete zprávu kamarádům</h1>
            <p>Sdílejte skrze messenger, whatsapp, signal, ...</p>
            <p>
                <Link href='/kolika-lidem-jste-to-poslali'><button>Mám hotovo</button></Link>
            </p>
        </Layout>
    )
}
import Link from 'next/link'
import { Layout } from '@/layout'
import { Button } from '@/form'

export default function PosleteZpravuKamaradum() {
    return (
        <Layout>
            <h1>Pošlete zprávu kamarádům</h1>
            <p className='lastParagraph'>Sdílejte skrze messenger, whatsapp, signal, ...</p>
            <p>
                <Link href='/kolika-lidem-jste-to-poslali'><Button>Mám hotovo</Button></Link>
            </p>
        </Layout>
    )
}
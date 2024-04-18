import Link from 'next/link'
import { Layout } from '@/layout'
import { Button } from '@/form'
import { Content } from '@/content'

export default function PosleteZpravuKamaradum() {
    return (
        <Layout>
            <Content
                title='Pošlete zprávu kamarádům'
                buttons={<Link href='/kolika-lidem-jste-to-poslali'><Button>Mám hotovo</Button></Link>}
            >
                Sdílejte skrze messenger, whatsapp, signal, ...
            </Content>
        </Layout>
    )
}
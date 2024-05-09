import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Layout } from '@/layout'
import { Button } from '@/form'
import { Content } from '@/content'

export default function Podekovani() {
    const [topic, setTopic] = useState('')

    useEffect(() => {
        const topic = localStorage.getItem('topic');
        setTopic(topic ?? '')
    }, [])

    if (topic === '') {
        return null
    }

    return (
        <Layout>
            <Content
                title='Výborně!'
                buttons={<Link href='/zustanme-v-kontaktu'><Button>Další krok</Button></Link>}
            >
                {topic === 'Modernizace ekonomiky' && (
                    <p>To je dalších 10 až 20 hlasů pro modernizaci ekonomiky a vyšší kvalitu života.</p>
                )}
                {topic === 'Odpovědnost k přírodě a klimatu' && (
                    <p>To je dalších 10 až 20 hlasů pro ochranu přírody a klimatu.</p>
                )}
                {topic === 'Lidská práva a svobody' && (
                    <p>To je dalších 10 až 20 hlasů pro lidská práva a svobody.</p>
                )}
                {topic === 'Ochrana bezpečí a demokracie' && (
                    <p>To je dalších 10 až 20 hlasů pro ochranu bezpečí a demokracie.</p>
                )}
                <p>Hlasovací selfie je silným signálem. Pokud ji zveřejníte například na Instagramu, odhadujeme, že až 10&nbsp;% vašich přátel to ovlivní k účasti ve volbách a hlasování. Pokud máte průměrný počet sledujících (194), znamená to, že přinesete 19 nových hlasů. Nezapomeňte nás v selfie otagovat @zeleni.cz, abychom vás taky mohli sdílet. DĚKUJEME!</p>
            </Content>
        </Layout>
    )
}
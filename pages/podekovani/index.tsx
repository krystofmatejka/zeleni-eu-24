import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Layout } from '@/layout'
import { Button } from '@/form'

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
            <h1>Děkujeme za sdílení</h1>
            {topic && <p className='lastParagraph'>Vaše téma je {topic}</p>}
            <p>
                <Link href='/zustanme-v-kontaktu'><Button>Další krok</Button></Link>
            </p>
        </Layout>
    )
}
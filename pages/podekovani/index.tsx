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
                title='Děkujeme za sdílení'
                buttons={<Link href='/zustanme-v-kontaktu'><Button>Další krok</Button></Link>}
            >
                {topic && <p>Vaše téma je {topic}</p>}
            </Content>
        </Layout>
    )
}
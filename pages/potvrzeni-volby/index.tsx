import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Layout } from '@/layout';
import { Button } from '@/form';
import { Content } from '@/content';

export default function PotvrzeniVolby() {
    const [topic, setTopic] = useState('')

    useEffect(() => {
        const savedTopic = localStorage.getItem('topic')
        setTopic(savedTopic ?? '')
    }, [])

    if (!topic) {
        return null
    }

    return (
        <Layout
            leftbox={{
                image: '/johanna_nejedlova.png',
                title: 'Johana Nejedlová',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            }}
        >
            <Content
                title={`Vaše téma je: ${topic}`}
                buttons={<Link href='/sdileni-na-facebooku'><Button>Další</Button></Link>}
            >
                Nyní pošťouchněte své přátele, aby se také přišli k volbám a hlasovali
            </Content>
        </Layout>
    )
}
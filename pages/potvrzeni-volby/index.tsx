import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Layout } from '@/layout';
import { Button } from '@/form';

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
            <>
                <h1>Vaše téma je: {topic}</h1>
                <p className='lastParagraph'>Nyní pošťouchněte své přátele, aby se také přišli k volbám a hlasovali</p>
                <p>
                    <Link href='/sdileni-na-facebooku'><Button>Další</Button></Link>
                </p>
            </>
        </Layout>
    )
}
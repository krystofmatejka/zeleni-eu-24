import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Layout } from '@/layout';

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
                <p>Nyní pošťouchněte své přátele, aby se také přišli k volbám a hlasovali</p>
                <p>
                    <Link href='/sdileni-na-facebooku'><button>Další</button></Link>
                </p>
            </>
        </Layout>
    )
}
import { useRouter } from 'next/navigation'
import { Layout } from '@/layout';
import { Content } from '@/content';
import { Button } from '@/form';
import styles from './styles.module.css'

function saveTopic(topic: string, callback: Function) {
    localStorage.setItem('topic', topic);

    callback()
}

const topics = [
    'Modernizace ekonomiky',
    'Odpovědnost k přírodě a klimatu',
    'Lidská práva a svobody',
    'Ochrana bezpečí a demokracie',
]

export default function RekniNamCoJeProTebeDulezite() {
    const router = useRouter()

    return (
        <Layout
            leftbox={{
                image: '/petr_doubravsky.png',
                title: 'Petr Doubravský',
                text: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
            }}
        >
            <Content
                title='Jaké téma je pro vás ve volbách důležité?'
            >
                <p className={styles.p}>
                Pro každého je ve volbách důležité něco jiného. Vyberte prosím jedno téma, které je nejdůležitější právě pro vás. 
                </p>
                <ul className={styles.list}>
                    {topics.map((topic, i) => <li
                        key={i}
                        onClick={() => saveTopic(topic, () => router.push('/potvrzeni-volby'))}
                    ><Button>{topic}</Button></li>)}
                </ul>
            </Content>
        </Layout>
    )
}

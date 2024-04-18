import { useRouter } from 'next/navigation'
import { Layout } from '@/layout';
import { Content } from '@/content';
import styles from './styles.module.css'

function saveTopic(topic: string, callback: Function) {
    localStorage.setItem('topic', topic);

    callback()
}

const topics = ['Téma A', 'Téma B', 'Téma C', 'Téma D']

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
                title='Řekni nám co je pro tebe důležité'
            >
                <ul className={styles.list}>
                    {topics.map((topic, i) => <li
                        key={i}
                        onClick={() => saveTopic(topic, () => router.push('/potvrzeni-volby'))}
                    >{topic}</li>)}
                </ul>
            </Content>
        </Layout>
    )
}

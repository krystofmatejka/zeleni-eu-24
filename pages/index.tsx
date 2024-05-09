import Link from 'next/link'
import { Layout } from '@/layout';
import { Button } from '@/form';
import { Content } from '@/content';
import styles from './index.module.css'

const SECONDS_IN_DAY = 86400
const ELECTION_DATE = '2024-06-07T00:00:00.000'

function createRemainsLabel(numberOfWeeks: number, label1: string, label2: string, label3: string): string {
    if (numberOfWeeks >= 5) {
        return `zbývá ${numberOfWeeks} ${label1}`
    }
    if (numberOfWeeks >= 2) {
        return `zbývají ${numberOfWeeks} ${label2}`
    }
    if (numberOfWeeks >= 1) {
        return `zbývá ${numberOfWeeks} ${label3}`
    }
    return `zbývá ${numberOfWeeks} ${label1}`
}

export default function Index() {
    const secondsToElection = Math.max((new Date(ELECTION_DATE).getTime() - Date.now()) / 1000, 0)
    const numberOfDaysToElection = Math.ceil(secondsToElection / SECONDS_IN_DAY)
    const numberOfWeeksToElection = Math.floor(numberOfDaysToElection / 7)
    const title = numberOfWeeksToElection >= 2 ?
        createRemainsLabel(numberOfWeeksToElection, 'týdnů', 'týdny', 'týden') :
        createRemainsLabel(numberOfDaysToElection, 'dnů', 'dny', 'den')

    return (
        <Layout
            leftbox={{
                image: '/johana.png',
                title: 'Johana Nejedlová',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            }}
        >
            <Content
                showMobileTitle={true}
                title={`Do voleb ${title}`}
                buttons={
                    <Link href="/rekni-nam-co-je-pro-tebe-dulezite">
                        <Button>Jdeme na to</Button>
                    </Link>
                }
            >
                <p className={styles.p}>
                V Evropském parlamentu potřebujeme novou generaci političek a politiků, která chápe dnešní dobu. Někoho, jako je Johanna Nejedlová.
                </p>
                <p className={styles.p}>
                Pomoci zvolit Johannu do Evropského parlamentu můžete i vy. A to nejen tím, že ji dáte svůj hlas. Každý z nás má přátele či rodinu. A ty můžete svým osobním doporučením ovlivnit. 
                </p>
                <p className={styles.p}>
                Společenské výzkumy ukazují, že pokud uděláte několik jednoduchých kroků, o kterých se na tomto webu dočtete, můžete přidat Zeleným i několik desítek hlasů. A zrovna ty mohou být rozhodující. 
                </p>
            </Content>
        </Layout>
    )
}

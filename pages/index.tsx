import Link from 'next/link'
import { Layout } from '@/layout';
import { Button } from '@/form';
import { Content } from '@/content';
import styles from './index.module.css'

const SECONDS_IN_DAY = 86400
const ELECTION_DATE = '2024-06-07T00:00:00.000'

export default function Index() {
    const secondsToElection = Math.max((new Date(ELECTION_DATE).getTime() - Date.now()) / 1000, 0)
    const numberOfDaysToElection = Math.ceil(secondsToElection / SECONDS_IN_DAY)
    const numberOfWeeksToElection = Math.floor(numberOfDaysToElection / 7)
    const title = numberOfWeeksToElection >= 2 ? `${numberOfWeeksToElection} týdnů` : `${numberOfDaysToElection} dnů`

    return (
        <Layout
            leftbox={{
                image: '/johanna_nejedlova.png',
                title: 'Johana Nejedlová',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            }}
        >
            <Content
                title={`Do voleb zbývá ${title}`}
                buttons={
                    <Link href="/rekni-nam-co-je-pro-tebe-dulezite">
                        <Button>Jdeme na to</Button>
                    </Link>
                }
            >
                <p className={styles.p}>
                    Musíme vrátit Česku naději na změnu k lepšímu. Zelená témata, jako ochrana přírody, klimatu nebo modernizace ekonomiky nejsou okrajová. Naopak, na tom, jak je zvládneme, závisí budoucnost naší prosperity a kvality života. V evropském parlamentu potřebujeme novou generaci političek a politiků, která chápe dnešní dobu. Někoho, jako je Johanna Nejedlová.
                </p>
                <p className={styles.p}>
                    Pomoci zvolit Johannu do Evropského parlamentu můžete i vy. A to nejen tím, že ji dáte svůj hlas. Každý z nás má přátele či rodinu. A ty můžete svým osobním doporučením ovlivnit. 
                </p>
                <p className={styles.p}>
                    Společenské výzkumy ukazují, že pokud uděláte několik jednoduchých věcí, o kterých na tomto webu píšeme, můžete přidat Zeleným i několik desítek hlasů. Mohou ty být právě tyto hlasy, které budou znamenat úspěch! Věnujte Johanně několik minut a přispějte tak k naší společné snaze. 
                </p>
            </Content>
        </Layout>
    )
}

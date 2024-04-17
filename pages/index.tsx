import Link from 'next/link'
import { Layout } from '@/layout';
import { Button } from '@/form';

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
            <>
                <h1>Do voleb zbývá {title}</h1>
                <Link href="/rekni-nam-co-je-pro-tebe-dulezite">
                    <Button>Jdeme na to</Button>
                </Link>
            </>
        </Layout>
    )
}

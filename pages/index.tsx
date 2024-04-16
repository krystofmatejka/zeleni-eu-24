import Link from 'next/link'
import { Layout } from '@/layout';

const SECONDS_IN_DAY = 86400
const ELECTION_DATE = '2024-06-07T00:00:00.000'

export default function Index() {
    const secondsToElection = Math.max((new Date(ELECTION_DATE).getTime() - Date.now()) / 1000, 0)
    const numberOfDaysToElection = Math.ceil(secondsToElection / SECONDS_IN_DAY)
    const numberOfWeeksToElection = Math.floor(numberOfDaysToElection / 7)
    const title = numberOfWeeksToElection >= 2 ? `${numberOfWeeksToElection} týdnů` : `${numberOfDaysToElection} dnů`

    return (
        <Layout leftBackgroundColor='greenyellow'>
            <>
                <h1>Do voleb zbývá {title}</h1>
                <Link href="/rekni-nam-co-je-pro-tebe-dulezite"><button>Jdeme na to</button></Link>
            </>
        </Layout>
    )
}

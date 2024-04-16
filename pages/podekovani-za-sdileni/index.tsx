import Link from 'next/link'
import { Layout } from '@/layout'

export default function PodekovaniZaSdileni() {
    return (
        <Layout>
            <h1>Děkujeme za sdílení</h1>
            <p>
                <Link href='/poslete-zpravu-kamaradum'><button>Další krok</button></Link>
            </p>
        </Layout>
    )
}
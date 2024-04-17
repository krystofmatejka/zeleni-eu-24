import Link from 'next/link'
import { Layout } from '@/layout'
import { Button } from '@/form'

export default function PodekovaniZaSdileni() {
    return (
        <Layout>
            <h1>Děkujeme za sdílení</h1>
            <p>
                <Link href='/poslete-zpravu-kamaradum'><Button>Další krok</Button></Link>
            </p>
        </Layout>
    )
}
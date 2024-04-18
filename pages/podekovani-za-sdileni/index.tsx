import Link from 'next/link'
import { Layout } from '@/layout'
import { Button } from '@/form'
import { Content } from '@/content'

export default function PodekovaniZaSdileni() {
    return (
        <Layout>
            <Content
                title='Děkujeme za sdílení'
                buttons={
                    <Link href='/poslete-zpravu-kamaradum'><Button>Další krok</Button></Link>
                }
            />
        </Layout>
    )
}
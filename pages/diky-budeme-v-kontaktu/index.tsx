import Link from 'next/link'
import { Layout } from '@/layout'
import { Button } from '@/form'
import { Content } from '@/content'

export default function DikyBudemeVKontaktu() {
    return (
        <Layout>
            <Content
                title='Díky, budeme v kontaktu'
                buttons={<Link href='/darujte'><Button>Jdeme dál</Button></Link>}
            />
        </Layout>
    )
}
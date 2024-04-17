import Link from 'next/link'
import { Layout } from '@/layout'
import { Button } from '@/form'

export default function DikyBudemeVKontaktu() {
    return (
        <Layout>
            <h1>Díky, budeme v kontaktu</h1>
            <p>
                <Link href='/darujte'><Button>Jdeme dál</Button></Link>
            </p>
        </Layout>
    )
}
import Link from 'next/link'
import { Layout } from '@/layout'

export default function DikyBudemeVKontaktu() {
    return (
        <Layout>
            <h1>Díky, budeme v kontaktu</h1>
            <p>
                <Link href='/darujte'><button>Jdeme dál</button></Link>
            </p>
        </Layout>
    )
}
import Link from 'next/link'
import { Layout } from '@/layout'
import { Button } from '@/form'
import { Content } from '@/content'

export default function DikyBudemeVKontaktu() {
    return (
        <Layout>
            <Content
                title='Děkujeme!'
                buttons={<Link href='/darujte'><Button>Jdeme dál</Button></Link>}
            >
                <p>Ozveme se, pokud budeme potřebovat vaši pomoc.</p>
            </Content>
        </Layout>
    )
}
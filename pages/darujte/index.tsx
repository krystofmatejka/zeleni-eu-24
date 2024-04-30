import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from '@/layout'
import { Button } from '@/form'
import { Content } from '@/content'

export default function Darujte() {
    const router = useRouter()

    return (
        <Layout>
            <Content
                title='Darujte'
                buttons={
                    <>
                        <a href='https://dary.zeleni.cz/eurovolby?utm_campaign=eurovolby&utm_medim=web&utm_source=tvojevolba' target='_blank' onClick={() => router.push('/podekovani-na-konec')}><Button>Darovat převodem</Button></a>
                        <a href='https://cause.lundadonate.org/stranazelenychdemo/supportzeleni' target='_blank' onClick={() => router.push('/podekovani-na-konec')}><Button>Darovat kartou</Button></a>
                        <Link href='/podekovani-na-konec'><Button>Nyní ne</Button></Link>
                    </>
                }
            >
                <p>Už jste toho udělali hodně, ale stojíme proti lobbistům a politikům s obrovskými rozpočty, a abychom proti nim vyhráli, spoléháme na dary lidí jste vy. Můžete si dovolit nám přispět na kampaň?</p>
                <p>Na naší kampaň nám příspělo už více než 600 lidí jako jste vy a pomůže nám i malý dar.</p>
                <p>Peníze použijeme na kampaň v ulicích, volební plakáty nebo reklamu na sociálních sítích - prostě tak, abychom zasáhli co nejvíce lidí.</p>
            </Content>
        </Layout>
    )
}
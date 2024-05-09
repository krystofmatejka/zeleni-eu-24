import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from '@/layout'
import { Button } from '@/form'
import { Content } from '@/content'
import styles from './styles.module.css'

export default function Darujte() {
    const router = useRouter()

    return (
        <Layout>
            <Content
                title='Darujte'
                buttons={
                    <div>
                        <div className={styles.buttons}>
                            <a href='https://dary.zeleni.cz/eurovolby?utm_campaign=eurovolby&utm_medim=web&utm_source=tvojevolba' target='_blank' onClick={() => router.push('/podekovani-na-konec')}><Button>Darovat převodem</Button></a>
                            <a href='https://volby.zeleni.cz/podporte-nas-financnim-darem' target='_blank' onClick={() => router.push('/podekovani-na-konec')}><Button>Darovat kartou</Button></a>
                        </div>
                        <Link href='/podekovani-na-konec'>Nyní ne</Link>
                    </div>
                }
            >
                <p>Ve snaze zmodernizovat Evropu stojíme proti lobbistům a politikům s obrovskými rozpočty. Nás ale nefinancují oligarchové, spoléháme na dary lidí jste vy. Můžete si dovolit přispět nám na kampaň?</p>
                <p>Přispělo nám už přes 900 drobných dárců, lidí, jako jste vy. Každý další dar nám pomáhá posílit naši kampaň v ulicích, na sociálních sítích, nebo vyvěsit další plakáty, abychom oslovili co nejvíc lidí.</p>
            </Content>
        </Layout>
    )
}
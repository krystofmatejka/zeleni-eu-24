import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Layout } from '@/layout';
import { Button } from '@/form';
import { Content } from '@/content';
import styles from './styles.module.css'

export default function PotvrzeniVolby() {
    const [topic, setTopic] = useState('')

    useEffect(() => {
        const savedTopic = localStorage.getItem('topic')
        setTopic(savedTopic ?? '')
    }, [])

    if (!topic) {
        return null
    }

    return (
        <Layout
            leftbox={{
                image: '/johanna_nejedlova.png',
                title: 'Johana Nejedlová',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            }}
        >
            <Content
                title={`Děkujeme`}
                buttons={<Link href='/sdileni-na-facebooku'><Button>Jdeme na to</Button></Link>}
            >
                {topic === 'Modernizace ekonomiky' && (
                    <p className={styles.p}>Můžeme vám slíbit, že uděláme všechno pro to, abychom pomohli modernizovat naši ekonomiku a pomohli tak vyšší kvalitě života. Protože na kvalitě života všech nám záleží.</p>
                )}
                {topic === 'Odpovědnost k přírodě a klimatu' && (
                    <p className={styles.p}>Můžeme vám slíbit, že odpovědnost k ochraně přírody a klimatu pro nás bude vždycky nejdůležitější součástí všeho, co v politice prosazujeme. Protože naši planetu máme jen jednu.</p>
                )}
                {topic === 'Lidská práva a svobody' && (
                    <p className={styles.p}>Můžeme vám slíbit, že za lidská práva a svobody, rovnoprávnost a solidaritu s druhými se vždycky postavíme. Je to jedna z našich nejdůležitějších hodnot a jsme rádi, že ji sdílíme s vámi.</p>
                )}
                {topic === 'Ochrana bezpečí a demokracie' && (
                    <p className={styles.p}>Demokracie i naše bezpečí jsou pod hrozbou autoritářů nebo války na Ukrajině. Můžeme vám slíbit, že to nikdy nebudeme brát na lehkou váhu.</p>
                )}
                <p>Teď pojďme oslovit několik vašich přátel či rodinných příslušníků, abychom je dostali k volbám a doporučili jim Johannu Nejedlovou a Zelené. Jak na to se dozvíte hned na další stránce.</p>
            </Content>
        </Layout>
    )
}
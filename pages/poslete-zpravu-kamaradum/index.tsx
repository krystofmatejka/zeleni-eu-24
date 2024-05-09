import { useState } from 'react'
import Link from 'next/link'
import { Layout } from '@/layout'
import { Button } from '@/form'
import { Content } from '@/content'
import styles from './styles.module.css'

const message = 'Ahoj! Chci jen dát vědět, že v červnu jsou volby do europarlamentu. Já budu volit Johannu Nejedlovou a Zelené, protože podle mě opravdu potřebujeme novou generaci, která to tady zmodernizuje. Tady je jejich web https://volby.zeleni.cz, kde si můžeš přečíst, co budou prosazovat a taky o Johanně. Je tam taky možnost si nechat poslat připomínku před volbami 7. a 8. června, aby je člověk nepropásl.'

export default function PosleteZpravuKamaradum() {
    const [copied, setCopied] = useState(false)

    return (
        <Layout>
            <Content
                title='Pošlete osobní zprávu'
                buttons={<Link href='/kolika-lidem-jste-to-poslali'><Button>Mám hotovo</Button></Link>}
            >
                <p>Vaši přátelé či známí vám důvěřují víc než médiím nebo reklamě. A tyto lidi můžete ovlivnit přímo - pokud to uděláte, je velká pravděpodobnost, že půjdou volit. Pošlete jim zprávu přes Messenger, WhatsApp, SMS nebo jiný váš oblíbený komunikátor. Můžete využít tu, kterou jsme připravili, nebo vymyslet vlastní důvody, proč vám záleží na hlasu pro Zelené.</p>
                <div className={styles.buttons}>
                    <Button
                        onClick={async () => {
                            await navigator.clipboard.writeText(message)
                            setCopied(true)
                        }}
                        style={!copied ? {} : {background: '#A3A3A3'}}
                    >{!copied ? 'Zkopírovat zprávu' : 'Zkopírováno'}</Button>
                    <a href={`https://api.whatsapp.com/send/?text=${encodeURIComponent(message)}`} target='_blank'>
                        <Button>Poslat přes Whatsapp</Button>
                    </a>
                </div>
                <p className={styles.message}>”{message}”</p>
            </Content>
        </Layout>
    )
}
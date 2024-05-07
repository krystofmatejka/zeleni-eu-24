import { useState } from 'react'
import Link from 'next/link'
import { Layout } from '@/layout'
import { Button } from '@/form'
import { Content } from '@/content'
import styles from './styles.module.css'

const message = 'Ahoj! Chci jen dát vědět, že v červnu jsou volby do europarlamentu. Já velmi zvažuju volit Johannu Nejedlovou a Zelené, protože podle mě opravdu potřebujeme novou generaci, která to tady zmodernizuje. Tady je jejich web https://volby.zeleni.cz, kde si můžeš přečíst, co budou prosazovat a taky o Johanně. Je tam taky možnost si nechat poslat připomínku před volbami 8. a 9. června, aby ji člověk nepropásl.'

export default function PosleteZpravuKamaradum() {
    const [copied, setCopied] = useState(false)

    return (
        <Layout>
            <Content
                title='Pošlete osobní zprávu'
                buttons={<Link href='/kolika-lidem-jste-to-poslali'><Button>Mám hotovo</Button></Link>}
            >
                <p>Vaši přátelé či známí vám důvěřují víc než médiím nebo reklamě. A tyto lidi můžete ovlivnit přímo - pokud to uděláte, je velká pravděpodobnost, že půjdou volit. Pošlete jim zprávu přes Messenger, Whatsapp nebo komunikátor, který používáte. Můžete využít tu, kterou jsme připravili, nebo vymyslet vlastní důvody, proč vám záleží na hlasu pro Zelené.</p>
                <div className={styles.buttons}>
                    <Button
                        onClick={async () => {
                            await navigator.clipboard.writeText(message)
                            setCopied(true)
                        }}
                        style={!copied ? {} : {background: '#A3A3A3'}}
                    >{!copied ? 'Zkopírovat zprávu' : 'Zkopírováno'}</Button>
                    <a href='https://api.whatsapp.com/send/?text=%E2%80%9DAhoj%21%20Chci%20jen%20d%C3%A1t%20v%C4%9Bd%C4%9Bt%2C%20%C5%BEe%20v%20%C4%8Dervnu%20jsou%20volby%20do%20europarlamentu.%20J%C3%A1%20velmi%20zva%C5%BEuju%20volit%20Johannu%20Nejedlovou%20a%20Zelen%C3%A9%2C%20proto%C5%BEe%20podle%20m%C4%9B%20opravdu%20pot%C5%99ebujeme%20novou%20generaci%2C%20kter%C3%A1%20to%20tady%20zmodernizuje.%20Tady%20je%20jejich%20web%20https%3A%2F%2Fvolby.zeleni.cz%2C%20kde%20si%20m%C5%AF%C5%BEe%C5%A1%20p%C5%99e%C4%8D%C3%ADst%2C%20co%20budou%20prosazovat%20a%20taky%20o%20Johann%C4%9B.%20Je%20tam%20taky%20mo%C5%BEnost%20si%20nechat%20poslat%20p%C5%99ipom%C3%ADnku%20p%C5%99ed%20volbami%208.%20a%209.%20%C4%8Dervna%2C%20aby%20ji%20%C4%8Dlov%C4%9Bk%20neprop%C3%A1sl.%20%E2%80%9D' target='_blank'>
                        <Button>Poslat přes Whatsapp</Button>
                    </a>
                </div>
                <p className={styles.message}>”{message}”</p>
            </Content>
        </Layout>
    )
}
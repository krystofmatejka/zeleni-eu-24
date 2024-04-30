import Link from 'next/link'
import { Layout } from '@/layout'
import { Button } from '@/form'
import { Content } from '@/content'

export default function PosleteZpravuKamaradum() {
    return (
        <Layout>
            <Content
                title='Pošlete osobní a upřímnou zprávu'
                buttons={<Link href='/kolika-lidem-jste-to-poslali'><Button>Mám hotovo</Button></Link>}
            >
                <p>Vaši přítele, rodina či známí vám důvěřují víc než médiím nebo reklamě. Asi to sami znáte: doporučení dobré restaurace od kamaráda má větší váhu než jakákoliv reklama. A tyto lidi můžete ovlivnit přímo - pokud to uděláte, je velká pravděpodobnost, že půjdou volit.</p>
                <p>Zamyslete se, koho by ve vašem okolí by mohla taková zpráva ovlivnit. Tito lidé často sdílejí vaše hodnoty, ale třeba o letošních volbách ještě nepřemýšleli. Znáte to: každý toho máme hodně a často nám osobní dopourčení může situaci ulehčit.</p>
                <p>Zkopírujte tuto zprávu a pošlete ji přes Messenger, Whatsapp nebo jiný komunikátor, který používáte.</p>
                <p style={{fontWeight: 'bold'}}>”Ahoj! Chci jen dát vědět, že v červnu jsou volby do europarlamentu. Já velmi zvažuju volit Johannu Nejedlovou a Zelené, protože podle mě opravdu potřebujeme novou generaci, která to tady zmodernizuje. Tady je jejich web https://volby.zeleni.cz, kde si můžeš přečíst, co budou prosazovat a taky o Johanně. Je tam taky možnost si nechat poslat připomínku před volbami 8. a 9. června, aby ji člověk nepropásl.”</p>
            </Content>
        </Layout>
    )
}
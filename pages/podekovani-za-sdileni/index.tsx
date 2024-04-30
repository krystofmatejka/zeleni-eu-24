import Link from 'next/link'
import { Layout } from '@/layout'
import { Button } from '@/form'
import { Content } from '@/content'

export default function PodekovaniZaSdileni() {
    return (
        <Layout>
            <Content
                title='Moc děkujeme!'
                buttons={
                    <Link href='/poslete-zpravu-kamaradum'><Button>Další krok</Button></Link>
                }
            >
                <p>Vaše aktivní sdílení znamená 15 - 30 nových voličů pro Zelené.</p>
                <p>Ohdadujeme, že svým příspěvkem můžete ovlivnit 5 % vašich facebookových přátel. Pokud máte průměrný počet přátel (celosvětově to je 338, a můžete mít i více), to znamená 17 nových hlasů.</p>
                <p>Dobrá práce!</p>
            </Content>
        </Layout>
    )
}
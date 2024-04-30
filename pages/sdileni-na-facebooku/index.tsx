import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Layout } from '@/layout'
import { Button } from '@/form'
import { Content } from '@/content'

function handleClick(callback: Function) {
    localStorage.setItem('shared', '1')
    callback()
}

export default function SdileniNaFacebooku() {
    const router = useRouter()
    const [topic, setTopic] = useState('')

    useEffect(() => {
        const item = localStorage.getItem('topic') ?? ''
        setTopic(item)
      }, [])

    return (
        <Layout
            leftbox={{
                image: '/petr_doubravsky.png',
                title: 'Petr Doubravský',
                text: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
            }}
        >
            <Content
                title='Sdílejte na Facebooku, proč je vaší volbou Johanna Nejedlová a Zelení!'
                buttons={
                    <>
                        <a
                            target='_blank'
                            href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvolby.zeleni.cz%2F&amp;src=sdkpreparse'
                            onClick={() => handleClick(() => router.push('/podekovani-za-sdileni'))}
                        >
                            <Button>Sdílet na facebooku</Button>
                        </a>
                        <Link href='/poslete-zpravu-kamaradum'><Button>Nyní ne</Button></Link>
                    </>
                }
            >
                <p>
                    Vaše volba má sílu inspirovat! Studie ukazují, že pokud přátelům ukážete, že půjdete k volbám a koho budete volit, může mít velký efekt. A to i v době několik týdnů před volbami. Sdílení může ovlivnit až 5&nbsp;% vašich facebookových přátel.
                </p>
                <p>
                    Vaše příspěvky mohou inspirovat další, aby se také zapojili a podpořili změnu. Nebojte se být vidět a sdílet, proč stojíte za Johannou Nejedlovou a Zelenými!
                </p>
            </Content>
        </Layout>
    )
}
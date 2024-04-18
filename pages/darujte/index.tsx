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
                        <a href='https://dary.zeleni.cz/eurovolby' target='_blank' onClick={() => router.push('/podekovani-na-konec')}><Button>Jít na darovací stránku!</Button></a>
                        <Link href='/podekovani-na-konec'><Button>Nyní ne</Button></Link>
                    </>
                }
            />
        </Layout>
    )
}
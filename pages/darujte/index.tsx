import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from '@/layout'
import { Button } from '@/form'

export default function Darujte() {
    const router = useRouter()

    return (
        <Layout>
            <h1>Darujte</h1>
            <div className='multipleHorizontalButtons'>
                <a href='https://dary.zeleni.cz/eurovolby' target='_blank' onClick={() => router.push('/podekovani-na-konec')}><Button>Jít na darovací stránku!</Button></a>
                <Link href='/podekovani-na-konec'><Button>Nyní ne</Button></Link>
            </div>
        </Layout>
    )
}
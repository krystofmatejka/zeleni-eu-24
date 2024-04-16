import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from '@/layout'

export default function Darujte() {
    const router = useRouter()

    return (
        <Layout>
            <h1>Darujte</h1>
            <p>
                <a href='https://dary.zeleni.cz/eurovolby' target='_blank' onClick={() => router.push('/podekovani-na-konec')}><button>Jít na darovací stránku!</button></a>
                <Link href='/podekovani-na-konec'><button>Nyní ne</button></Link>
            </p>
        </Layout>
    )
}
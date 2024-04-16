import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Layout } from '@/layout'

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
        <Layout leftBackground={{ type: 'image', value: '/petr_doubravsky.png' }}>
            <h1>Sdílení na facebooku</h1>
            <p>
                <button><a
                    target='_blank'
                    href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvolby.zeleni.cz%2F&amp;src=sdkpreparse'
                    onClick={() => handleClick(() => router.push('/podekovani-za-sdileni'))}
                >Sdílet na facebooku</a>
                </button>
                
                <Link href='/poslete-zpravu-kamaradum'><button>Nyní ne</button></Link>
                </p>
        </Layout>
    )
}
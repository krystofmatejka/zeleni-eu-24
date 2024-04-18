import { useEffect, useState } from 'react'
import { Layout } from '@/layout'
import { Content } from '@/content'

export default function PodekovaniNaKonec() {
    const [score, setScore] = useState<number | undefined>()

    useEffect(() => {
        const shared = parseInt(localStorage.getItem('shared') ?? '0')
        const selfie = parseInt(localStorage.getItem('selfie') ?? '1')
        const numberOfMessages = parseInt(localStorage.getItem('messages') ?? '0')

        const score = (shared * 17) + (selfie * 8) + numberOfMessages
        setScore(score)
    }, [])

    if (score === undefined) {
        return null
    }

    return (
        <Layout>
            <Content
                title='Děkujeme'
            >
                {score !== undefined && `Vaše aktivita mohla oslovit ${score} potencionálních voličů.`}
            </Content>
        </Layout>
    )
}
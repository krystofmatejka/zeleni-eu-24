import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
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
                {score > 0 && <Confetti recycle={false} tweenDuration={5000} gravity={0.2} numberOfPieces={300}/>}
            </Content>
        </Layout>
    )
}
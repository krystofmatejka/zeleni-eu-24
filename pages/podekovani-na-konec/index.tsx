import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { Layout } from '@/layout'
import { Content } from '@/content'
import { Button } from '@/form'
import styles from './styles.module.css'

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
                title='Děkujeme, jste u konce'
                buttons={
                    <a href='https://volby.zeleni.cz' target='_blank'><Button>Přejít na volební web</Button></a>
                }
            >
                {score !== undefined && <p>{`Jednotlivé kroky, kterými jste nám na tomto webu pomohli, mohou ve volbách ovlivnit přibližně ${score} lidí.`}</p>}
                <p>Moc vám za to děkujeme. A pokud se o nás chcete dozvědět víc, na našem webu <a href='https://volby.zeleni.cz' target='_blank' className={styles.link}>volby.zeleni.cz</a> najdete více informací o tom, jak chceme zlepšit Evropu i Česko k lepšímu. </p>
                {score > 0 && <Confetti recycle={false} tweenDuration={5000} gravity={0.2} numberOfPieces={300}/>}
            </Content>
        </Layout>
    )
}
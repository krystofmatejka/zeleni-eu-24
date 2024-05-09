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
        const selfie = parseInt(localStorage.getItem('selfie') ?? '0')
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
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
                        <a href='https://calendar.google.com/calendar/u/0/r/eventedit?text=Evropsk%C3%A9+volby:+vol%C3%ADm+Johannu+Nejedlovou+a+Zelen%C3%A9&details=V%C3%ADce+info+na+https://volby.zeleni.cz&dates=20240607T120000Z/20240608T120000Z&trp=false&sprop&sprop=name:&reminder=20240606T160000Z' target='_blank'><Button>Přidat do Google kalendáře</Button></a>
                        <a href='https://facebook.com/events/s/volime-zelene-do-europarlament/968202794799412/' target='_blank'><Button>Přejít na Facebookovou událost</Button></a>
                        <a href='https://volby.zeleni.cz' target='_blank'><Button>Přejít na volební web</Button></a>
                    </div>
                }
            >
                {score !== undefined && <p>{`Jednotlivé kroky, kterými jste nám na tomto webu pomohli, mohou ve volbách ovlivnit přibližně ${score} lidí.`}</p>}
                <p>Moc vám za to děkujeme. A než odejdete z tohoto webu, tak si můžete přidat upomínku na den voleb do <a href='https://calendar.google.com/calendar/u/0/r/eventedit?text=Evropsk%C3%A9+volby:+vol%C3%ADm+Johannu+Nejedlovou+a+Zelen%C3%A9&details=V%C3%ADce+info+na+https://volby.zeleni.cz&dates=20240607T120000Z/20240608T120000Z&trp=false&sprop&sprop=name:&reminder=20240606T160000Z' target='_blank' className={styles.link}>Google kalendáře</a> a můžete se připojit k <a href='https://facebook.com/events/s/volime-zelene-do-europarlament/968202794799412/' target='_blank' className={styles.link}>Facebookové události</a> a pozvat na ni své přátele. Pak už budete mít úplně hotovo.</p>
                {score > 0 && <Confetti recycle={false} tweenDuration={5000} gravity={0.2} numberOfPieces={300}/>}
            </Content>
        </Layout>
    )
}
import Link from 'next/link'
import { useEffect, useState } from 'react'
//import styles from "./styles.module.css";

export default function PodekovaniNaKonec() {
    const [score, setScore] = useState<number | undefined>()

    useEffect(() => {
        const shared = parseInt(localStorage.getItem('shared') ?? '0')
        // selfie
        const numberOfMessages = parseInt(localStorage.getItem('messages') ?? '0')

        const score = shared * 17 + numberOfMessages
        setScore(score)
    }, [])

    if (score === undefined) {
        return null
    }

    return (
        <div>
            <h1>Děkujeme</h1>
            <p>
                Vaše aktivita mohla oslovit {score} potencionálních voličů.
            </p>
        </div>
    )
}
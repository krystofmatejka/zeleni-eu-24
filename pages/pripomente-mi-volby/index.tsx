import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Layout } from '@/layout'
import styles from './index.module.css'

export default function PripomenteMiVolby() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        localStorage.setItem('email', email)
    }, [email])

    useEffect(() => {
        localStorage.setItem('phone', phone)
    }, [phone])

    return (
        <Layout>
            <h1>Připomeňte mi volby</h1>
            <p>V den volbi postněne volební selfie</p>
            <div className={styles.container}>
                <label>
                    E-mail
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    Telefon
                    <input type='tel' value={phone} onChange={e => setPhone(e.target.value)}/>
                </label>
                <label>
                    Souhlasím s GDPR
                    <input type='checkbox'/>
                </label>
                <div>
                    <button onClick={() => {
                        localStorage.setItem('selfie', '1')
                        router.push('/podekovani')
                    }}>Odeslat</button>
                    <button onClick={() => router.push('/zustanme-v-kontaktu')}>Teď ne</button>
                </div>
            </div>
        </Layout>
    )
}
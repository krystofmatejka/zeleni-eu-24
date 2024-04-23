import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Layout } from '@/layout'
import { Button, Input, Checkbox } from '@/form'
import { Content } from '@/content'
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
            <Content
                title='Připomeňte mi volby'
                buttons={
                    <>
                        <Button onClick={() => {
                            localStorage.setItem('selfie', '1')
                            router.push('/podekovani')
                        }}>Odeslat</Button>
                        <Button onClick={() => router.push('/zustanme-v-kontaktu')}>Teď ne</Button>
                    </>
                }
            >
                <p>V den volby postněne volební selfie</p>
                <div className={styles.container}>
                    <label>
                        <Input type='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        <Input type='tel' placeholder='Telefon' value={phone} onChange={e => setPhone(e.target.value)}/>
                    </label>
                    <label className={styles.gdpr}>
                        Souhlasím s GDPR
                        <Checkbox/>
                    </label>
                </div>
            </Content>
        </Layout>
    )
}
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Layout } from '@/layout';
import { Button } from '@/form';
import { Content } from '@/content';
import styles from './index.module.css'

export default function ZustanmeVKontaktu() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        const email = localStorage.getItem('email');
        setEmail(email ?? '')

        const phone = localStorage.getItem('phone');
        setPhone(phone ?? '')
    }, [])

    useEffect(() => {
        localStorage.setItem('email', email);
    }, [email])

    useEffect(() => {
        localStorage.setItem('phone', phone)
    }, [phone])

    return (
        <Layout>
            <Content
                title='Zůstaňme v kontaktu'
                buttons={
                    <>
                        <Button onClick={() => router.push('/diky-budeme-v-kontaktu')}>OK</Button>
                        <Button onClick={() => router.push('/darujte')}>Nyní ne</Button>
                    </>
                }
            >
                <div className={styles.container}>
                    <label>
                        Jméno
                        <input type='text'/>
                    </label>
                    <label>
                        Příjmení
                        <input type='text'/>
                    </label>
                    <label>
                        Email
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        Telefon
                        <input type='tel' value={phone} onChange={e => setPhone(e.target.value)}/>
                    </label>
                    <label>
                        PSČ
                        <input type='text'/>
                    </label>
                    <label>
                        Souhlasím se zasíláním informací
                        <input type='checkbox'/>
                    </label>
                </div>
            </Content>
        </Layout>
    )
}
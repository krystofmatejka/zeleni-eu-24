import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Layout } from '@/layout';
import { Button, Input, Checkbox } from '@/form';
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
                        <Input type='text' placeholder='Jméno'/>
                    </label>
                    <label>
                        <Input type='text' placeholder='Příjmení'/>
                    </label>
                    <label>
                        <Input type='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        <Input type='tel' placeholder='Telefon' value={phone} onChange={e => setPhone(e.target.value)}/>
                    </label>
                    <label>
                        <Input type='text' placeholder='PSČ'/>
                    </label>
                    <label className={styles.contact}>
                        Souhlasím se zasíláním informací
                        <Checkbox/>
                    </label>
                </div>
            </Content>
        </Layout>
    )
}
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
                title='Zůstaňme v kontaktu!'
                buttons={
                    <>
                        <Button onClick={() => router.push('/diky-budeme-v-kontaktu')}>OK</Button>
                        <Button onClick={() => router.push('/darujte')}>Nyní ne</Button>
                    </>
                }
            >
                <p>Jako Zelení kampaňujeme po celé Evropě - našim cílem je mít po volbách 75 zelených europoslanců a europoslankyň, abychom mohli měnit Evropu i Česko k lepšímu. Politici současné generace, kteří nerozumí dnešní době, se ale nevzdají snadno.</p>
                <p>Za námi ale stojí tisíce lidí jako jste vy: lidé kterém není lhostejná ochrana klimatu a přírody, modernizace ekonomiky, lidská práva a svobody nebo ochrana bezpečí a demokracie.</p>
                <p>S těmito lidmi jsme čas od času v kontaktu prostřednictvím e-mailu. Můžeme napsat občas i vám, abychom vám dali vědět, když nastane nějaký zásadní moment kampaně nebo budeme potřebovat vaši podporu? Z odběru se můžete kdykoli odhlásit.</p>
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
                        Souhlasím se zasílání informací
                        <Checkbox/>
                    </label>
                </div>
            </Content>
        </Layout>
    )
}
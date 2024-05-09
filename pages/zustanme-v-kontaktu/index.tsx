import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Layout } from '@/layout';
import { Button, Input, Checkbox } from '@/form';
import { Content } from '@/content';
import styles from './index.module.css'

export default function ZustanmeVKontaktu() {
    const router = useRouter()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [zipCode, setZipCode] = useState('')

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
            <form onSubmit={async (e) => {
                e.preventDefault();

                try {
                    await fetch('https://actionnetwork.org/api/v2/forms/06855925-5746-408c-802f-d567eeddad08/submissions/', {
                        method: 'POST',
                        body: JSON.stringify({
                            "person": {
                                "family_name": lastName,
                                "given_name": firstName,
                                "email_addresses": [{ "address": email, "status": "subscribed" }],
                                "phone_numbers": [{ "number": phone }],
                                "postal_addresses": [{ "postal_code": zipCode }],
                            },
                            "triggers": { "autoresponse": { "enabled": true } },
                            "add_tags": ["tvojevolba_eu"],
                            "custom_fields": ["tvojevolba_tema", "tvojevolba_sdileni", "tvojevolba_zpravy"]
                        })
                    })

                    router.push('/diky-budeme-v-kontaktu')
                } catch (e: any) {
                    alert(`Omlouváme se, ale formulář se momentálně nepodařilo odeslat. Chyba: ${e.message}`)
                }
            }}>
                <Content
                    title='Zůstaňme v kontaktu!'
                    buttons={
                        <>
                            <Button type='submit'>OK</Button>
                            <Button onClick={() => router.push('/darujte')}>Nyní ne</Button>
                        </>
                    }
                >
                    <p>Jako Zelení kampaňujeme po celé Evropě - našim cílem je mít po volbách 75 zelených europoslanců a europoslankyň, abychom mohli měnit Evropu i Česko k lepšímu. Politici současné generace, kteří nerozumí dnešní době, se ale nevzdají snadno.</p>
                    <p>Za námi ale stojí tisíce lidí jako jste vy: lidé kterém není lhostejná ochrana klimatu a přírody, modernizace ekonomiky, lidská práva a svobody nebo ochrana bezpečí a demokracie.</p>
                    <p>S těmito lidmi jsme čas od času v kontaktu prostřednictvím e-mailu. Můžeme napsat občas i vám, abychom vám dali vědět, když nastane nějaký zásadní moment kampaně nebo budeme potřebovat vaši podporu? Z odběru se můžete kdykoli odhlásit.</p>
                    <div className={styles.container}>
                        <label>
                            <Input type='text' placeholder='Jméno' name='firstName' required value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </label>
                        <label>
                            <Input type='text' placeholder='Příjmení' name='lastName' required value={lastName} onChange={e => setLastName(e.target.value)} />
                        </label>
                        <label>
                            <Input type='email' placeholder='E-mail' name='email' required value={email} onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label>
                            <Input type='tel' placeholder='Telefon' name='phone' pattern='(\s|\+|[0-9])+' value={phone} onChange={e => setPhone(e.target.value)} />
                        </label>
                        <label>
                            <Input type='text' placeholder='PSČ' name='zipCode' required pattern='[0-9]{3}\s?[0-9]{2}' value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                        </label>
                        <label className={styles.contact}>
                            Souhlasím se zasíláním informací
                            <Checkbox required/>
                        </label>
                    </div>
                </Content>
            </form>
        </Layout>
    )
}
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
            <form onSubmit={async (e) => {
                e.preventDefault();

                try {
                    await fetch('https://actionnetwork.org/api/v2/forms/06855925-5746-408c-802f-d567eeddad08/submissions/', {
                        method: 'POST',
                        body: JSON.stringify({
                            "person": {
                                "email_addresses": [{ "address": email, "status": "subscribed" }],
                                "phone_numbers": [{ "number": phone }] },
                                "triggers": { "autoresponse": { "enabled": true } },
                                "add_tags": ["tvojevolba_pripomenout"]
                        }),
                        headers: {
                            'Content-type': 'application/json'
                        }
                    })
                    localStorage.setItem('selfie', '1')
                    router.push('/podekovani')
                } catch (e: any) {
                    alert(`Omlouváme se, ale formulář se momentálně nepodařilo odeslat. Chyba: ${e.message}`)
                }
            }}>
                <Content
                    title='Zveřejněte selfie v den voleb'
                    buttons={
                        <>
                            <Button type='submit'>Odeslat</Button>
                            <Button onClick={() => router.push('/zustanme-v-kontaktu')}>Teď ne</Button>
                        </>
                    }
                >
                    <p>Skvělé! Další krok je úplně snadný. Pokud v den voleb zveřejníte selfie, jak jdete volit, můžete výrazně ovlivnit volební účast vašich přátel. Stačí jednoduchý snímek - má to prokazatelně velký vliv na volební účast.</p>
                    <p>Můžeme vám to připomenout? Zanechte nám na sebe kontakt a my vám v den voleb pošleme přátelskou připomínku. Slibujeme, že vás nebudeme obtěžovat spamem ani ničím jiným.</p>
                    <div className={styles.container}>
                        <label>
                            <Input type='email' placeholder='E-mail' required value={email} onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label>
                            <Input type='tel' placeholder='Telefon' pattern='(\s|\+|[0-9])+' value={phone} onChange={e => setPhone(e.target.value)} />
                        </label>
                        <label className={styles.gdpr}>
                            Souhlasím s uchováním dat za účelem připomenutí voleb
                            <Checkbox required />
                        </label>
                    </div>
                </Content>
            </form>
        </Layout>
    )
}
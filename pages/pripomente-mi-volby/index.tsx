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
                title='Zveřejněte selfie v den voleb'
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
                <p>Skvělé! Další krok je úplně snadný. Pokud v den voleb zveřejníte selfie, jak jdete volit, můžete výrazně ovlivnit volební účast vašich přátel. Stačí jednoduchý snímek - má to prokazatelně velký vliv na volební účast.</p>
                <p>Můžeme vám to připomenout? Zanechte nám svou e-mailovou adresu a my vám v den voleb pošleme přátelskou připomínku. Slibujeme, že vás nebudeme obtěžovat spamem ani ničím jiným.</p>
                <div className={styles.container}>
                    <label>
                        <Input type='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        <Input type='tel' placeholder='Telefon' value={phone} onChange={e => setPhone(e.target.value)}/>
                    </label>
                    <label className={styles.gdpr}>
                        Souhlasím s uchováním emailu pro připomenutí voleb.
                        <Checkbox/>
                    </label>
                </div>
            </Content>
        </Layout>
    )
}
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Layout } from '@/layout';
import { Button } from '@/form';
import { Content } from '@/content';

function handleChangeValue(newValue: number, callback: Function) {
    const newValueLimit = Math.max(newValue, 0)

    localStorage.setItem('messages', newValueLimit.toString());
    callback(newValueLimit)
}

export default function KolikaLidemJsteToPoslali() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const oldValue = parseInt(localStorage.getItem('messages') ?? '0')
        setValue(oldValue)
    }, [])

    return (
        <Layout>
            <Content
                title='Kolika lidem jste to poslali?'
                buttons={
                    <Link href='/pripomente-mi-volby'><Button>Další krok</Button></Link>
                }
            >
                <div>
                    <p>Děkujeme za sdílení. Sdělte nám, kolika lidem jste to poslali?</p>
                    <input type='number' value={value} onChange={(e) => handleChangeValue(parseInt(e.target.value), setValue)} />
                    <button style={{width: '50px'}} onClick={() => handleChangeValue(value + 1, setValue)}>+</button>
                    <button style={{width: '50px'}} onClick={() => handleChangeValue(value - 1, setValue)}>-</button>
                </div>
            </Content>
        </Layout>
    )
}
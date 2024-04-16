import styles from './layout.module.css'

type Background = { type: 'color', value: string } | { type: 'image', value: string }

type Props = {
    leftBackground?: Background
    children: React.ReactNode
}

const pickBackground = (background?: Background) => {
    switch (background?.type) {
        case 'image': return { backgroundImage: `url('${background.value}')` }
        case 'color': return { backgroundColor: background.value }
        default: return { backgroundColor: '#01704B' }
    }
}

export const Layout = ({ leftBackground, children }: Props) => {
    const leftBoxBackground = pickBackground(leftBackground)

    return (
        <div className={styles.container}>
            <div className={styles.leftBox} style={{...leftBoxBackground}}></div>
            <div className={styles.rightBox}>
                {children}
            </div>
        </div>
    )
}

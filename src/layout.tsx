import styles from './layout.module.css'

type Props = {
    leftBackgroundColor?: string
    children: React.ReactNode
}

export const Layout = ({ leftBackgroundColor, children }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBox} style={{backgroundColor: leftBackgroundColor ?? 'greenyellow'}}></div>
            <div className={styles.rightBox}>
                {children}
            </div>
        </div>
    )
}

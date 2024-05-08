import styles from './layout.module.css'

type LeftBox = {
    image: string
    title: string
    text: string
}

type Props = {
    leftbox?: LeftBox
    children: React.ReactNode
}

export const Layout = ({ leftbox, children }: Props) => {
    return (
        <div className={styles.container}>
            {leftbox ? (
                <div className={styles.leftBox}>
                </div>
            ) : (
                <div className={styles.leftBox}/>
            )}
            <div className={styles.rightBox}>
                {children}
            </div>
        </div>
    )
}

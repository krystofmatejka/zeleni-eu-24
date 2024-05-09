import styles from './content.module.css'

type Props = {
    title: string
    showMobileTitle?: boolean
    children?: React.ReactNode
    buttons?: React.ReactNode
}

export const Content = ({ title, children, buttons, showMobileTitle }: Props) => {
    return (
        <>
            {showMobileTitle && (
                <div className={styles.mobileTitle}>
                    <h1>Jsou Zelení tvoje volba?</h1>
                    <p>I ty můžeš získat pro Johannu Nejedlovou několik hlasů navíc a pomoci jí tak do Evropského parlamentu!</p>
                </div>
            )}
            <h2 className={styles.title}>{title}</h2>
            {children &&
                <div className={styles.children}>{children}</div>
            }
            {buttons &&
                <div className={styles.buttons}>{buttons}</div>
            }
        </>
    )
}

import styles from './content.module.css'

type Props = {
    title: string
    children?: React.ReactNode
    buttons?: React.ReactNode
}

export const Content = ({ title, children, buttons }: Props) => {
    return (
        <>
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

import React from "react"
import styles from './form.module.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...rest}: ButtonProps) => {
    return (
        <button {...rest} type='button' className={styles.button}>{children}</button>
    )
}

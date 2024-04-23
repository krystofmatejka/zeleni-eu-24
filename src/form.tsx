import React from "react"
import styles from './form.module.css'

type CheckboxProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Checkbox = ({...rest}: CheckboxProps) => {
    return (
        <div className={styles['checkbox-wrapper-13']}>
            <label>
                <input {...rest} type="checkbox"/>
            </label>
        </div>
    )
}

export const Input = ({ ...rest}: InputProps) => {
    return (
        <input {...rest} className={styles.input}/>
    )
}

export const Button = ({ children, ...rest}: ButtonProps) => {
    return (
        <button {...rest} type='button' className={styles.button}>{children}</button>
    )
}

import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ type, placeholder, ...rest }: InputProps) => {
  return <input type={type} placeholder={placeholder} {...rest} />
}

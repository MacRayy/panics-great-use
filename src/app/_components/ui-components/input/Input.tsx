import type { InputHTMLAttributes } from 'react'
import * as Styled from './Input.styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ type, placeholder, ...rest }: InputProps) => {
  return <Styled.Input type={type} placeholder={placeholder} {...rest} />
}

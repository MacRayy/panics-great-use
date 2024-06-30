import type { HTMLAttributes, PropsWithChildren } from 'react'
import * as Styled from './styles'

export type ButtonType = 'primary' | 'secondary'

type ButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, 'disabled type'> &
  PropsWithChildren<{
    onClick?: () => void
    isDisabled?: boolean
    htmlType?: 'button' | 'submit' | 'reset'
    type?: ButtonType
  }>

export const Button = ({
  children,
  isDisabled,
  htmlType = 'button',
  type = 'primary',
  onClick,
}: ButtonProps) => {
  return (
    <Styled.Button buttonType={type} type={htmlType} disabled={isDisabled} onClick={onClick}>
      {children}
    </Styled.Button>
  )
}

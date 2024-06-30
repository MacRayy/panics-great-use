import type { HTMLAttributes, PropsWithChildren } from 'react'
import * as Styled from './styles'

type ButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, 'disabled type'> &
  PropsWithChildren<{
    onClick: () => void
    isDisabled?: boolean
    htmlType?: 'button' | 'submit' | 'reset'
    type?: 'primary' | 'secondary'
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

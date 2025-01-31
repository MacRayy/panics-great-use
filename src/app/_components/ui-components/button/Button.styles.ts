import styled from '@emotion/styled'
import { color } from '@/app/_constants/color'
import type { ButtonType } from '@/app/_components/ui-components/button/Button'

type ButtonProps = {
  buttonType: ButtonType
  disabled: boolean
}

const buttonStyle = {
  padding: '0.5rem 1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '0.25rem',
  width: 'max-content',
  border: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  transition: 'all 0.3s',
}

const primaryButton = {
  backgroundColor: color.primary,

  '&:hover': {
    backgroundColor: color.lighterPrimary,
  },
}

const secondaryButton = {
  backgroundColor: color.white,
  color: color.darkerPrimary,
  border: `1px solid ${color.primary}`,

  '&:hover': {
    border: `1px solid ${color.lighterPrimary}`,
    color: color.darkerPrimary,
    backgroundColor: color.lighterPrimary,
  },
}

const dangerButton = {
  backgroundColor: color.danger,
  color: color.white,
}

const disabledPrimaryButton = {
  backgroundColor: color.lightGray,
  cursor: 'not-allowed',

  '&:hover': {
    backgroundColor: color.lightGray,
  },
}

const disabledSecondaryButton = {
  backgroundColor: color.offWhite,
  cursor: 'not-allowed',
  color: color.gray,
  borderColor: color.lightGray,

  '&:hover': {
    borderColor: color.lightGray,
    backgroundColor: color.offWhite,
    color: color.gray,
  },
}

const disabledDangerButton = {
  backgroundColor: color.lightGray,
  cursor: 'not-allowed',
}

export const Button = styled.button<ButtonProps>(
  buttonStyle,
  ({ buttonType }) => buttonType === 'primary' && primaryButton,
  ({ buttonType }) => buttonType === 'secondary' && secondaryButton,
  ({ buttonType }) => buttonType === 'danger' && dangerButton,
  ({ disabled, buttonType }) => disabled && buttonType && disabledPrimaryButton,
  ({ disabled, buttonType }) => disabled && buttonType && disabledSecondaryButton,
  ({ disabled, buttonType }) => disabled && buttonType && disabledDangerButton,
)

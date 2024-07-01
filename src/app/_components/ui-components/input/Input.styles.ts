import styled from '@emotion/styled'
import { color } from '@/app/_constants/color'

const inputStyles = {
  padding: '0.5rem 1rem',
  borderRadius: '2rem',
  border: `1px solid ${color.primary}`,
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.2s',

  '&:focus': {
    borderColor: color.tertiary,
  },
}

export const Input = styled.input(inputStyles)

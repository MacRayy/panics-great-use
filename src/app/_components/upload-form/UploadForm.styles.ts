import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/react'

export const UploadContainer = styled.section({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
} as CSSObject)

export const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
} as CSSObject)

export const ButtonContainer = styled.div({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
} as CSSObject)

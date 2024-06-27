import styled from '@emotion/styled'
import { color } from '@/app/_constants/color'

export const LayoutContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

export const Header = styled.header(() => ({
  padding: '1.5rem',
  backgroundColor: color.primary,
}))

export const Footer = styled.footer(() => ({
  padding: '3rem 1.5rem',
  backgroundColor: color.tertiary,
  color: color.offWhite,
}))

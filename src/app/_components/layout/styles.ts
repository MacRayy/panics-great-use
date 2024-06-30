import styled from '@emotion/styled'
import { color } from '@/app/_constants/color'

export const LayoutContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
} as const)

export const Header = styled.header({
  padding: '1.5rem 2rem',
  backgroundColor: color.primary,
})

export const Main = styled.main({
  minHeight: '100vh',
  paddingLeft: '2rem',
  paddingRight: '2rem',
})

export const Footer = styled.footer({
  padding: '3rem 2rem',
  backgroundColor: color.tertiary,
  color: color.offWhite,
  display: 'flex',
  justifyContent: 'space-between',
})

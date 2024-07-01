import styled from '@emotion/styled'
import { color } from '@/app/_constants/color'
import { mediaQueries } from '@/app/_constants/mediaQueries'

export const LayoutContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
} as const)

export const Header = styled.header({
  padding: '0.5rem 2rem',
  backgroundColor: color.primary,
})

export const Main = styled.main({
  minHeight: '100vh',
  padding: '2rem 1rem',

  [mediaQueries.tablet]: {
    padding: '2rem 3rem',
  },
})

export const Footer = styled.footer({
  padding: '3rem 2rem',
  backgroundColor: color.tertiary,
  color: color.offWhite,
  display: 'flex',
  justifyContent: 'space-between',
})

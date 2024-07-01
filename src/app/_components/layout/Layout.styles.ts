import styled from '@emotion/styled'
import { color } from '@/app/_constants/color'
import { mediaQueries } from '@/app/_constants/mediaQueries'
import type { CSSObject } from '@emotion/react'

export const LayoutContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
} as const)

export const Main = styled.main({
  minHeight: '100vh',
  padding: '3rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',

  [mediaQueries.tablet]: {
    padding: '2rem 3rem',
  },
} as CSSObject)

export const Footer = styled.footer({
  padding: '3rem 1rem',
  backgroundColor: color.tertiary,
  color: color.offWhite,
  display: 'flex',
  justifyContent: 'space-between',

  [mediaQueries.tablet]: {
    padding: '3rem 3rem',
  },
})

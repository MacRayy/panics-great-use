import styled from '@emotion/styled'
import { color } from '@/app/_constants/color'
import { mediaQueries } from '@/app/_constants/mediaQueries'

export const Header = styled.header({
  padding: '0.5rem 1rem',
  backgroundColor: color.primary,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',

  [mediaQueries.tablet]: {
    padding: '0.5rem 2rem',
  },
})

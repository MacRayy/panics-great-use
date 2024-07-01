import styled from '@emotion/styled'
import NextImage from 'next/image'
import type { CSSObject } from '@emotion/react'

const IMAGE_SIZE = 300

export const EmptyState = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
} as CSSObject)

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
})

export const List = styled.ul({
  display: 'grid',
  gap: '0.5rem',
  gridTemplateColumns: `repeat(auto-fill, minmax(${IMAGE_SIZE}px, 1fr))`,
  listStyle: 'none',
  padding: 0,
  maxWidth: '60rem',
  width: '100%',
})

export const ListItem = styled.li({
  position: 'relative',
  height: IMAGE_SIZE,
} as CSSObject)

export const Image = styled(NextImage)({
  objectFit: 'contain',
  width: '100%',
  height: '100%',
})

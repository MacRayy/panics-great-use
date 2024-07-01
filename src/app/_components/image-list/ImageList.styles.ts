import styled from '@emotion/styled'
import NextImage from 'next/image'

const IMAGE_SIZE = 300

export const List = styled.ul({
  display: 'grid',
  gap: '0.5rem',
  gridTemplateColumns: `repeat(auto-fill, minmax(${IMAGE_SIZE}px, 1fr))`,
  listStyle: 'none',
  padding: 0,
})

export const ListItem = styled.li({
  position: 'relative',
  height: IMAGE_SIZE,
})

export const Image = styled(NextImage)({
  objectFit: 'contain',
  width: '100%',
  height: '100%',
})

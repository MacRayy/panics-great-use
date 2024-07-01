import * as Styled from './Skeleton.styles'
import type { HTMLAttributes } from 'react'

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  isSquare?: boolean
  quantity?: number
}

export const Skeleton = ({ isSquare, quantity, ...rest }: SkeletonProps) => {
  return Array.from({ length: quantity ?? 1 }).map((_, i) => (
    <Styled.Skeleton key={i} isSquare={isSquare} {...rest} />
  ))
}

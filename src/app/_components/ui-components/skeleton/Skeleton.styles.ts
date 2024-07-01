import styled from '@emotion/styled'
import { color } from '@/app/_constants/color'

type SkeletonType = {
  isSquare?: boolean
}

const skeletonStyle = {
  width: '100%',
  minWidth: '1rem',
  height: '100%',
  minHeight: '1rem',
  backgroundColor: color.offWhite,
  borderRadius: '0.5rem',
  animation: 'pulse 1.5s infinite',

  '@keyframes pulse': {
    '0%': {
      backgroundColor: color.offWhite,
    },
    '50%': {
      backgroundColor: color.lightGray,
    },
    '100%': {
      backgroundColor: color.offWhite,
    },
  },
}

const skeletonSquareStyle = {
  width: '13rem',
  height: '13rem',
}

export const Skeleton = styled.div<SkeletonType>(
  skeletonStyle,
  ({ isSquare }) => isSquare && skeletonSquareStyle,
)

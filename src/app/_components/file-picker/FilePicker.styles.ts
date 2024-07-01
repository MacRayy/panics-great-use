import styled from '@emotion/styled'
import { color } from '@/app/_constants/color'
import type { CSSObject } from '@emotion/react'

type DropZoneProps = {
  isDragActive: boolean
  hasError: boolean
}

const dropZoneActive = {
  backgroundColor: color.offWhite,
}

const dropZoneStyle: CSSObject = {
  border: `2px dashed ${color.gray}`,
  borderRadius: '0.25rem',
  padding: '1rem',
  textAlign: 'center',
  cursor: 'grab',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  transition: 'all 0.3s',
}

export const DropZone = styled.div<DropZoneProps>(
  dropZoneStyle,
  ({ isDragActive }) => isDragActive && dropZoneActive,
  ({ hasError }) => hasError && { border: `2px dashed ${color.danger}` },
)

export const ErrorText = styled.p({
  color: color.danger,
  fontSize: '0.875rem',
})

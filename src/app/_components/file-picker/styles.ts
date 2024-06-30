import styled from '@emotion/styled'
import { color } from '@/app/_constants/color'

type DropZoneProps = {
  isDragActive: boolean
}

const dropZoneActive = {
  backgroundColor: color.offWhite,
}

export const DropZone = styled.div<DropZoneProps>(
  {
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
  },
  ({ isDragActive }) => isDragActive && dropZoneActive,
)

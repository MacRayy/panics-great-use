import type { ChangeEventHandler, DragEventHandler } from 'react'
import { useRef, useState } from 'react'
import { Button } from '@/app/_components/ui-components'
import * as Styled from './FilePicker.styles'

type Props = {
  isDisabled?: boolean
  accept?: string
  acceptText?: string
  onFiles: (fileList: FileList) => void
}

export const FilePicker = ({
  isDisabled,
  onFiles,
  accept = 'image/*',
  acceptText = 'Only image files are accepted.',
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragActive, setIsDragActive] = useState<boolean>(false)

  const handleDragEnter: DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragActive(true)
  }

  const handleDragLeave: DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragActive(false)
  }

  const handleDragOver: DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragActive(true)
  }

  const handleDrop: DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragActive(false)
    if (isDisabled) {
      return
    }
    const fileList = event.dataTransfer.files
    if (fileList.length > 0) {
      onFiles(fileList)
    }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    event.preventDefault()
    const fileList = event.target.files
    if (fileList) {
      onFiles(fileList)
    }
  }

  const openFileExplorer = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <>
      <input
        id="file"
        type="file"
        accept={accept}
        ref={inputRef}
        onChange={handleChange}
        multiple={false}
        style={{ display: 'none' }}
      />

      <Styled.DropZone
        onDragEnter={handleDragEnter}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        isDragActive={isDragActive}
      >
        <span>Drag and drop files here. {acceptText}</span>

        <Button onClick={openFileExplorer} isDisabled={isDisabled}>
          Browse files
        </Button>
      </Styled.DropZone>
    </>
  )
}

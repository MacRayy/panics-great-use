import type { ChangeEvent } from 'react'
import { useRef, useState } from 'react'

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

  const handleDragEnter = (event: DragEvent) => {
    event.preventDefault()
    setIsDragActive(true)
  }

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault()
    setIsDragActive(false)
  }

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
    setIsDragActive(true)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const fileList = event.target.files
    if (fileList) {
      onFiles(fileList)
    }
  }

  const handleDrop = (event: DragEvent) => {
    if (isDisabled) {
      return
    }
    event.preventDefault()
    event.stopPropagation()
    setIsDragActive(false)
    const fileList = event?.dataTransfer?.files
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
        data-test="file-input"
        multiple={false}
      />

      <div
        onDragEnter={handleDragEnter}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <span>Drag and drop files here. {acceptText}</span>

        <button
          type="button"
          onClick={openFileExplorer}
          disabled={isDisabled}
          data-test="browse-files"
        >
          Browse files
        </button>
      </div>
    </>
  )
}

import type { FormEvent } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import type { PutBlobResult } from '@vercel/blob'
import { FilePicker } from '@/app/_components/file-picker/FilePicker'
import { Button } from '@/app/_components/ui-components'
import * as Styled from './styles'

export const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    setIsLoading(true)
    event.preventDefault()

    const formData = new FormData()
    formData.append('file', file as Blob)

    const response = await fetch('/api/file', {
      method: 'POST',
      body: formData,
    } as RequestInit)

    const data = (await response.json()) as PutBlobResult
    setPreview(data.url)
    setIsLoading(false)
  }

  const handleFileUpload = (fileList: FileList) => {
    const file = fileList[0]
    setFile(file)
  }

  const removeFile = () => {
    setFile(null)
    setPreview(null)
  }

  return (
    <Styled.UploadContainer>
      <h1>Upload image</h1>
      <Styled.Form onSubmit={handleSubmit}>
        <FilePicker onFiles={handleFileUpload} isDisabled={isLoading} />

        {file && <span>Current filename: {file.name}</span>}

        <Styled.ButtonContainer>
          <Button htmlType="submit" isDisabled={isLoading || !file}>
            {isLoading ? 'Uploading...' : 'Upload'}
          </Button>
          <Button type="danger" onClick={removeFile} isDisabled={isLoading || !file}>
            Remove file
          </Button>
        </Styled.ButtonContainer>
      </Styled.Form>

      {preview && (
        <Image
          src={preview}
          alt="Uploaded Image"
          width={300}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      )}
    </Styled.UploadContainer>
  )
}

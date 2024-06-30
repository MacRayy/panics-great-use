import type { FormEvent } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import type { PutBlobResult } from '@vercel/blob'
import { FilePicker } from '@/app/_components/file-picker/FilePicker'

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

  return (
    <div>
      <h1>Upload Form</h1>
      <form onSubmit={handleSubmit}>
        <FilePicker onFiles={handleFileUpload} isDisabled={isLoading} />
        <button type="submit">{isLoading ? 'Uploading...' : 'Upload'}</button>
      </form>

      {preview && <Image src={preview} alt="Uploaded Image" width={200} height={200} />}
    </div>
  )
}

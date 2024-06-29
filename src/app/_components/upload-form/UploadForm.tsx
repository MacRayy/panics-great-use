import type { FormEvent } from 'react'
import { useState } from 'react'
import Image from 'next/image'

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
    })

    const data = await response.json()
    setPreview(data.url)
    setIsLoading(false)
  }

  return (
    <div>
      <h1>Upload Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={event => {
            if (event.target.files) {
              setFile(event.target?.files[0] ?? null)
            }
          }}
        />
        <button type="submit">{isLoading ? 'Uploading...' : 'Upload'}</button>
      </form>

      {preview && <Image src={preview} alt="Uploaded Image" width={200} height={200} />}
    </div>
  )
}

import type { FormEvent } from 'react'
import { useState } from 'react'

export const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('file', file as Blob)

    const response = await fetch('/api/file', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
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
        <button type="submit">upload</button>
      </form>
    </div>
  )
}

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { ListBlobResultBlob } from '@vercel/blob'

export const ImageList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [images, setImages] = useState<ListBlobResultBlob[]>([])

  useEffect(() => {
    void getImages()
  }, [])

  const getImages = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('api/file')
      const { blobs } = (await response.json()) as { blobs: ListBlobResultBlob[] }
      setImages(blobs)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : images.length === 0 ? (
    <p>No images found</p>
  ) : (
    <div>
      <h1>Image List</h1>
      <ul>
        {images?.map(image => (
          <li key={image.pathname}>
            <Image src={image.url} alt={image.pathname} width={200} height={200} />
          </li>
        ))}
      </ul>
    </div>
  )
}

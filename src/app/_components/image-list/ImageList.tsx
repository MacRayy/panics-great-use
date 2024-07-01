import { useEffect, useState } from 'react'
import type { ListBlobResultBlob } from '@vercel/blob'
import * as Styled from './styles'

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
      <Styled.List>
        {images?.map(image => (
          <Styled.ListItem key={image.pathname}>
            <Styled.Image src={image.url} alt={image.pathname} fill />
          </Styled.ListItem>
        ))}
      </Styled.List>
    </div>
  )
}

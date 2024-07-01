import type { ChangeEventHandler } from 'react'
import { useContext, useEffect, useState } from 'react'
import type { ListBlobResultBlob } from '@vercel/blob'
import * as Styled from './ImageList.styles'
import { SearchContext } from '@/app/_providers/SearchProvider'

export const ImageList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [images, setImages] = useState<ListBlobResultBlob[]>([])
  const { searchText } = useContext(SearchContext)

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

  const filterImages = (image: ListBlobResultBlob) => {
    const search = searchText.toLowerCase()
    return image.pathname.toLowerCase().includes(search)
  }

  const filteredImages = images.filter(filterImages)

  return isLoading ? (
    <p>Loading...</p>
  ) : images.length === 0 ? (
    <p>No images found</p>
  ) : (
    <div>
      <Styled.List>
        {filteredImages?.map(image => (
          <Styled.ListItem key={image.pathname}>
            <Styled.Image src={image.url} alt={image.pathname} fill />
          </Styled.ListItem>
        ))}
      </Styled.List>
    </div>
  )
}

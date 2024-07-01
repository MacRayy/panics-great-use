import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ListBlobResultBlob } from '@vercel/blob'
import * as Styled from './ImageList.styles'
import { SearchContext } from '@/app/_providers/SearchProvider'
import { Button, Skeleton } from '@/app/_components/ui-components'

export const ImageList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [images, setImages] = useState<ListBlobResultBlob[]>([])
  const { searchText, resetSearch } = useContext(SearchContext)

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

  const filterImages = useCallback(
    (image: ListBlobResultBlob) => {
      const search = searchText.toLowerCase()
      return image.pathname.toLowerCase().includes(search)
    },
    [searchText],
  )

  const filteredImages = useMemo(() => images.filter(filterImages) ?? [], [filterImages, images])

  return (
    <Styled.Container>
      {images.length === 0 && !isLoading ? (
        <p>Something went wrong, no images found</p>
      ) : filteredImages.length === 0 && !isLoading ? (
        <Styled.EmptyState>
          <p>There is no image for this search</p>
          <Button type="secondary" onClick={resetSearch}>
            Reset search
          </Button>
        </Styled.EmptyState>
      ) : (
        <Styled.List>
          {isLoading ? (
            <Skeleton isSquare quantity={3} />
          ) : (
            filteredImages?.map(image => (
              <Styled.ListItem key={image.pathname}>
                <Styled.Image src={image.url} alt={image.pathname} fill />
              </Styled.ListItem>
            ))
          )}
        </Styled.List>
      )}
    </Styled.Container>
  )
}

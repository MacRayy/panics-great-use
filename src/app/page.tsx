'use client'

import { UploadForm } from '@/app/_components/upload-form/UploadForm'
import { ImageList } from '@/app/_components/image-list/ImageList'

const Home = () => {
  return (
    <div>
      <UploadForm />

      <ImageList />
    </div>
  )
}

export default Home

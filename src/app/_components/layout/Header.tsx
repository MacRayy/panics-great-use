import Link from 'next/link'
import Image from 'next/image'
import { color } from '@/app/_constants/color'
import { Input } from '@/app/_components/ui-components'
import * as Styled from '@/app/_components/layout/Header.styles'
import { useContext } from 'react'
import { SearchContext } from '@/app/_providers/SearchProvider'

export const Header = () => {
  const { searchText, handleSearch } = useContext(SearchContext)

  return (
    <Styled.Header>
      <Link href="/">
        <Image
          src="/pgu.png"
          alt="panics great use"
          width={50}
          height={50}
          style={{ border: `1px solid ${color.black}` }}
        />
      </Link>
      <Input placeholder="Search for images" value={searchText} onChange={handleSearch} />
    </Styled.Header>
  )
}

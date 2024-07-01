'use client'

import type { ChangeEventHandler, PropsWithChildren } from 'react'
import { createContext, useState } from 'react'

export const SearchContext = createContext({
  searchText: '',
  handleSearch: _ => {},
  resetSearch: () => {},
})

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchText, setSearchText] = useState('')

  const handleSearch: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setSearchText(target.value)

  const resetSearch = () => setSearchText('')

  return (
    <SearchContext.Provider value={{ searchText, handleSearch, resetSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

'use client'

import type { PropsWithChildren } from 'react'
import * as Styled from './styles'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Styled.LayoutContainer>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </Styled.LayoutContainer>
  )
}

'use client'

import type { PropsWithChildren } from 'react'
import * as Styled from './styles'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Styled.LayoutContainer>
      <Styled.Header>Panics great use</Styled.Header>
      <Styled.Main>{children}</Styled.Main>
      <Styled.Footer>
        <div>
          Panics great use <sup>&trade;</sup>
        </div>
        <div>2024</div>
      </Styled.Footer>
    </Styled.LayoutContainer>
  )
}

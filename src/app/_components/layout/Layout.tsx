'use client'

import type { PropsWithChildren } from 'react'
import * as Styled from './Layout.styles'
import { Header } from '@/app/_components/layout/Header'

export const Layout = ({ children }: PropsWithChildren) => (
  <Styled.LayoutContainer>
    <Header />
    <Styled.Main>{children}</Styled.Main>
    <Styled.Footer>
      <div>
        Panics great use <sup>&trade;</sup>
      </div>
      <div>2024</div>
    </Styled.Footer>
  </Styled.LayoutContainer>
)

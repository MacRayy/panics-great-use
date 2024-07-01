'use client'

import type { PropsWithChildren } from 'react'
import * as Styled from './styles'
import Image from 'next/image'
import { color } from '@/app/_constants/color'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Styled.LayoutContainer>
      <Styled.Header>
        <Image
          src="/pgu.png"
          alt="panics great use"
          width={50}
          height={50}
          style={{ border: `1px solid ${color.black}` }}
        />
      </Styled.Header>
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

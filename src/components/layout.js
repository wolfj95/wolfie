import React from 'react'
import { css } from '@emotion/react'
//import { rhythm } from '../utils/typography'

//import SEO from '../components/seo'
import Nav from '../components/nav'

export default function Layout ({ children }) {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 30% auto;
      `}
    >
      <div
        css={css`
          position: sticky;
          top: 0;
          height: 100vh;
        `}
      >
        <Nav/>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}


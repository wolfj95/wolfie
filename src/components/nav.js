import React from 'react'
import { css } from '@emotion/react'
import { useStaticQuery, Link, graphql } from 'gatsby'
//import { rhythm } from '../utils/typography'

export default function Nav () {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <Link to={'/'}>
        <h3
          css={css`
            margin-left: auto;
            padding: 16px;
            display: inline-block;
            font-style: normal;
            position: fixed;
            background-color: black;
            color: #fffaf0;
          `}
        >
      {data.site.siteMetadata.title}
        </h3>
      </Link>
    </div>
  )
}


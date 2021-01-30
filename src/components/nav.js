import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

// styles
const navLink = css({
  textDecoration: 'none'
})

export default function Nav () {
  return (
      <div
        css={css`
          display: inline-block;
          float: right;
          margin-top: 25vh;
          padding: ${rhythm(2)};
        `}
      >
        <div>
          <Link to={'/'}
            css={css`
              text-decoration: none;
              text-align: center;
            `}
          >
            <h1
              css={[
                {
                  fontSize: rhythm(3),
                  transform: 'scale(-1, 1)'
                }
              ]}
            >
              🐺
            </h1>
          </Link>
          <div
            css={css`
              position: relative;
              display: inline-block;
            `}
          >
            <span
              css={css`
                width: 120px;
                background-color: black;
                color: #fff;
                text-align: center;
                padding: 5px 0;
                border-radius: 6px;
                position: absolute;
                z-index: 1;
                top: -${rhythm(4)};
                left: ${rhythm(5)};
                &:after {
                  content: " ";
                  position: absolute;
                  top: 50%;
                  right: 100%; /* To the left of the tooltip */
                  margin-top: -5px;
                  border-width: 5px;
                  border-style: solid;
                  border-color: transparent black transparent transparent;
              `}
            >
              hello there this is what happenbs when there is a lot more text how big does the box get and will it expand across the divider?
            </span>
          </div>
        </div>
        <ul
          css={css`
            list-style-type:none;
          `}
        >
          <li>
            <a href="#"
              css={[
                navLink
              ]}
            >
              Teaching
            </a>
          </li>
          <li>
            <a href="#"
              css={[
                navLink
              ]}
            >
              Programming
            </a>
          </li>
          <li>
            <a href="#"
              css={[
                navLink
              ]}
            >
              Research
            </a>
          </li>
          <li>
            <a href="#"
              css={[
                navLink
              ]}
            >
              etc.
            </a>
          </li>
        </ul>
      </div>
  )
}


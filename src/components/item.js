import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import { rhythm } from '../utils/typography'

export default function SectionItem (props) {
  console.log(props.sectionClass)
  return (
    <div
      css={css`
        padding: ${rhythm(1)};
      `}
    >
      <h1
        css={[
          props.sectionClass,
          {
            padding: rhythm(.25),
            display: 'inline-block',
            fontStyle: 'normal',
            color: '#ffffff'
          }
        ]}
      >
        {props.title}
      </h1>
      <p>
        {props.description}
      </p>
      <ul>
        {props.list.map((listItem, index) =>
          <li
            key={index}
          >
            <Link to={listItem.link}>
              {listItem.text}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}


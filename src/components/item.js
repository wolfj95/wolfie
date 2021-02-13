import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import { rhythm } from '../utils/typography'

export default function SectionItem (props) {
  return (
    <div
      css={css`
        padding: ${rhythm(1)} 0;
      `}
    >
      <h1
        className="item-header"
        css={[
          props.sectionClass,
          {
            padding: rhythm(.25),
            display: 'inline-block',
            fontStyle: 'normal',
          }
        ]}
      >
        {props.title}
      </h1>
      { props.description ?
        <p>
          {props.description}
        </p>
      :
        null
      }
      <ul>
        {props.list.map((listItem, index) =>
          <li
            key={index}
          >
            {listItem}
          </li>
        )}
      </ul>
    </div>
  )
}


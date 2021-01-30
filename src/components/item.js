import React from 'react'
import { css } from '@emotion/react'
//import { rhythm } from '../utils/typography'

//import SEO from '../components/seo'

export default function SectionItem (props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <ul>
        <li>{props.list}</li>
      </ul>
    </div>
  )
}


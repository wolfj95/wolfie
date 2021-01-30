import React from 'react'
import { css } from '@emotion/react'
//import { rhythm } from '../utils/typography'


class IndexSection extends React.Component {
  constructor (props) {
    super(props)
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 15% auto;
      `}
    >
      <Nav/>
      {children}
    </div>
  )
}


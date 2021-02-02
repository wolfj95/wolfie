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
                position: absolute;
                z-index: 1;
                top: -25vh;
                left: ${rhythm(5)};
                width: 650px;
              `}
            >
              <svg width="100%" height="100%" viewBox="0 0 700 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:1.5}}>
                  <g transform="matrix(1.12297,0,0,0.91376,-124.246,-35.9688)">
                      <path d="M119.921,220.673C119.921,220.673 141.464,206.977 142.446,205.995C145.398,203.044 149.953,199.806 152.948,197.202C164.651,187.026 164.492,180.18 167.386,165.707C171.695,144.165 166.302,121.378 210.254,103.11C269.157,78.627 396.799,87.869 461.67,88.172C509.035,88.393 680.15,82.098 701.59,119.218C721.339,153.412 716.669,172.034 715.304,196.147C713.675,224.934 704.01,259.162 696.852,271.092C673.721,309.643 643.788,296.455 595.445,302.059C565.329,305.55 507.124,302.872 473.327,303.545C458.812,303.834 375.79,305.17 356.418,305.903C344.572,306.351 249.926,308.548 209.353,294.712C187.291,287.189 180.74,254.7 172.859,230.318C171.664,226.62 168.975,210.802 166.468,208.294C165.768,207.595 157.734,209.976 153.643,211.533C146.719,214.168 123.333,220.673 119.921,220.673Z" style={{fill:'white',stroke:'black',strokeWidth:'2px'}}/>
                  </g>
                  <g transform="matrix(1,0,0,1,-12.1555,-7.75087)">
                      <text x="126.326px" y="96.517px" style={{fontFamily:'Helvetica',fontSize:'22px'}}>Hi! My name is Jacob Wolf (yes, that‘s my real name).</text>
                      <text x="126.326px" y="118.517px" style={{fontFamily:'Helvetica',fontSize:'22px'}}>I’m a teacher, programmer, and researcher. I’m trying to</text>
                      <text x="126.326px" y="140.517px" style={{fontFamily:'Helvetica',fontSize:'22px'}}>improve the ways we teach people about technology.</text>
                      <text x="126.326px" y="174.517px" style={{fontFamily:'Helvetica',fontSize:'22px'}}>You can scroll down to learn more about some of the</text>
                      <text x="126.326px" y="196.517px" style={{fontFamily:'Helvetica',fontSize:'22px'}}>things I’m working on or you can contact me any of the</text>
                      <text x="126.326px" y="218.517px" style={{fontFamily:'Helvetica',fontSize:'22px'}}>ways below.</text>
                  </g>
              </svg>
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


import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

// data
import { sections } from '../data/sections'

// styles
const navLink = css({
  textDecoration: 'none',
  color: 'black',
  padding: 'rhythm(.25)',
  background: 'none',
  border: 'none',
  cursor: 'pointer'
})

class NavLink extends React.Component {
  handleClick = () => {
    this.props.onButtonClick(this.props.sectionRef);
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        css={[
          navLink,
          this.props.highlightIndex === this.props.index ? this.props.section.sectionClass : 'none'
        ]}
      >
        {this.props.section.sectionTitle}
      </button>
    )
  }
}

class Nav extends React.Component{

  constructor (props) {
    super(props)
    this.state =
      {
        showSpeech: false,
        highlightIndex: -1,
      }
    this.speechRef = React.createRef()
    this.sectionRefs = props.sectionRefs
  }

  showSpeechBubble (props) {
    this.setState({ showSpeech: true })
    //console.log("show")
  }

  hideSpeechBubble (props) {
    this.setState({ showSpeech: false })
    //console.log("hide")
  }

  setHighlightIndex (index) {
    this.setState({ highlightIndex: index })
  }

  scrollToTop () {
    window.scrollTo({top: 0});
  }

  scrollToSection (sectionRef) {
    sectionRef.current.scrollIntoView()
  }

  render () {
    console.log("rerender nav. section refs: ", this.sectionRefs)
    console.log("highlight index: ", this.state.highlightIndex)
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
            <button
              onClick={this.scrollToTop}
              css={[
                {
                  textDecoration: 'none',
                  color: 'black',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }
              ]}
            >
              <h1
                css={[
                  {
                    textAlign: 'center',
                    fontSize: rhythm(3),
                    transform: 'scale(-1, 1)'
                  }
                ]}
              >
                🐺
              </h1>
            </button>
            <div
              css={css`
                position: relative;
                display: inline-block;
              `}
            >
              { this.state.showSpeech ?
                <div
                  ref={this.speechRef}
                  css={css`
                    position: absolute;
                    z-index: 1;
                    top: -8em;
                    width: 650px;
                    height: {this.state.highlightIndex >= 0 ?
                              "200px"
                            :
                              "300px"
                            };
                    display: flex;
                    //justify-content: center;
                    //align-items: center;
                  `}
                >
                  <div
                    css={[
                      {
                        position: "absolute",
                        width: "100%",
                        zIndex: "-1"
                      }
                    ]}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 650 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:1.5}}>
                      <g transform="matrix(1.03425,0,0,0.804283,-113.606,-63.4149)">
                        <path
                          d={this.state.highlightIndex >= 0 ?
                              sections[this.state.highlightIndex].speechSVGPath
                            :
                              "M119.921,220.673C119.921,220.673 141.464,206.977 142.446,205.995C145.398,203.044 149.953,199.806 152.948,197.202C164.651,187.026 164.492,180.18 167.386,165.707C171.695,144.165 166.302,121.378 210.254,103.11C240.669,90.468 289.483,91.821 338.447,91.29C384.31,90.792 430.296,88.025 461.67,88.172C471.68,88.219 486.225,88.385 503.083,88.664C565.992,89.705 661.131,92.308 673.214,96.063C674.99,96.615 711.666,101.068 723.248,123.374C735.707,147.368 734.029,174.485 734.608,191.911C735.566,220.747 737.652,341.558 729.89,373.643C725.644,391.192 715.758,409.539 702.028,425.144C685.301,444.156 647.114,444.605 618.381,444.577C588.143,444.547 532.349,442.217 498.553,442.89C484.037,443.179 360.939,444.854 337.926,443.902C318.074,443.081 245.367,451.896 216.2,439.125C188.801,427.128 184.018,399.811 177.494,371.626C169.289,336.172 169.604,217.331 167.672,214.089C162.829,205.963 157.734,209.976 153.643,211.533C146.719,214.168 123.333,220.673 119.921,220.673Z"
                          }
                          style={{fill:'white',stroke:'black',strokeWidth:'2px'}}
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    css={[
                      {
                        padding: "30px 20px 0 100px"
                      }
                    ]}
                  >
                    {this.state.highlightIndex >= 0 ?
                      sections[this.state.highlightIndex].sectionIntro
                    :
                      <text>
                        Hi! 👋
                        <br/>
                        <br/>
                        My name is Jacob Wolf (yes that's my real name).
                        I’m a teacher, programmer, and researcher trying to improve the ways we teach
                        people about technology.
                        <br/>
                        <br/>
                        Scroll down to learn more about some of the 
                        things I’m working on or you can contact me any of the ways below.
                      </text>
                    }
                  </div>
                </div>
              : 
                null 
              }
            </div>
          </div>
          <ul
            css={css`
              list-style-type:none;
              margin-left:0;
            `}
          >
            {sections.map((section, index) =>
              <li
                key={index}
              >
                <NavLink 
                  section={section}
                  sectionRef={this.sectionRefs[index]}
                  index={index}
                  highlightIndex={this.state.highlightIndex}
                  onButtonClick={this.scrollToSection}
                />
              </li>
            )}
          </ul>
        </div>
    )
  }
}

export default Nav

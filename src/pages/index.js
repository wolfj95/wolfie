import * as React from "react"
import { css } from '@emotion/react'
import { rhythm } from '../utils/typography'
import { Waypoint } from 'react-waypoint';

// data
import { sections } from '../data/sections'
import resume from "../pdfs/Jacob-Wolf-Resume.pdf"

// components
import Layout from '../components/layout'
import Nav from '../components/nav'
import SectionItem from '../components/item'

// hooks
import useWindowDimensions from '../components/window'

// styles
const container = css({
  margin: rhythm(2)
})

const contactLink = css({
  flexGrow: 1,
  padding: '15px',
  textDecoration: 'none',
  color: 'black'
})



// markup
const IndexPage = () => {
  const navRef = React.createRef()
  const { height } = useWindowDimensions()
  let sectionRefs = []
  for (let i = 0; i < sections.length; i++) {
    sectionRefs.push(React.useRef(null))
  }
  return (
    <Layout>
      <div
        css={{
          display: 'grid',
          '@media screen and (min-width: 40em)': {
            gridTemplateColumns: '30% auto'
          }
        }}
      >
        <div
          css={[
            { position: 'sticky'},
            {
              postion: '-webkit-sticky',
              top: 0,
              '@media screen and (min-width: 40em)': {
                height: '100vh'
              }
            }
          ]}
        >
          <Nav ref={navRef} sectionRefs={sectionRefs}/>
        </div>
        <div className="main"
          css={[
            {
              '@media screen and (min-width: 40em)': {
                maxWidth: '50vw'
              }
            }
          ]}
        >
          <div className="intro"
            css={[
              {
                marginTop: '25vh',
              }
            ]}
          >
            <div
              css={css`
                height: 300px;
              `}
            >
            </div>
            <Waypoint 
              onEnter={({ event }) => {
                navRef.current.setHighlightIndex(-1)
                navRef.current.setSpeechBubbleIndex(-1)
                navRef.current.showSpeechBubble()
              }} 
              onLeave={({ event }) => {
                navRef.current.hideSpeechBubble()
              }} 
              topOffset={height*0.25 + 300}
            />
            <div className="contact"
                css={[
                  {
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    textAlign: 'center',
                    padding: rhythm(2),
                    height: 'calc(75vh - 300px)',
                    maxWidth: '600px',
                  }
                ]}
            >
              <a
                href="https://github.com/wolfj95"
                css={[
                  contactLink,
                ]}
              >
                &#128187;
                <br/>
                github
              </a>
              <a
                href="https://www.linkedin.com/in/jacobhwolf/"
                css={[
                  contactLink,
                ]}
              >
                &#128104;&#8205;&#128188;
                <br/>
                linkedin
              </a>
              <a
                href={resume}
                css={[
                  contactLink,
                ]}
              >
                &#128196;
                <br/>
                resume
              </a>
              <a
                href="mailto:jacob.h.wolf@gmail.com"
                css={[
                  contactLink,
                ]}
              >
                &#128235;
                <br/>
                email
              </a>
            </div>
          </div>
          <div className="sections">
            {sections.map((section, index) =>
              <div className="section" id={section.sectionName}
                css={[
                  container
                ]}
                key={index}
                ref={sectionRefs[index]}
              >
                <Waypoint 
                  onEnter={({ previousPosition, event }) => {
                    if (previousPosition === Waypoint.below) {
                      navRef.current.setHighlightIndex(index)
                      navRef.current.setSpeechBubbleIndex(index)
                      navRef.current.showSpeechBubble()
                    } 
                  }} 
                  onLeave={({ currentPosition, event }) => {
                    if (currentPosition === Waypoint.below) {
                      navRef.current.setHighlightIndex(index-1)
                      navRef.current.hideSpeechBubble()
                    } 
                  }} 
                  //debug={true}
                  bottomOffset='75%'
                />
                  <div
                    css={css`
                      height: 450px;
                    `}
                  >
                  </div>
                <Waypoint 
                  onEnter={({ previousPosition, event }) => {
                    if (previousPosition === Waypoint.above) {
                      navRef.current.setSpeechBubbleIndex(index)
                      navRef.current.showSpeechBubble()
                    } 
                  }} 
                  onLeave={({ currentPosition, event }) => {
                    if (currentPosition === Waypoint.above) {
                      navRef.current.hideSpeechBubble()
                    } 
                  }} 
                  topOffset={height*0.25 + 200}
                  //debug={true}
                />
                {section.projects.map((project, index) =>
                  <SectionItem 
                    title={project.projectTitle}
                    description={project.description}
                    list={project.list}
                    sectionClass={section.sectionClass}
                    key={index}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

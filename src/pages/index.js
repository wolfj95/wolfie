import * as React from "react"
import { css } from '@emotion/react'
import { rhythm } from '../utils/typography'
import { Waypoint } from 'react-waypoint';

// data
import { sections } from '../data/sections'

// styles
import Layout from '../components/layout'
import Nav from '../components/nav'
import IndexSpacer from '../components/spacer'
import SectionItem from '../components/item'


const container = css({
  padding: rhythm(2)
})


// markup
const IndexPage = () => {
  const navRef = React.createRef()
  return (
    <Layout>
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
          <Nav ref={navRef} />
        </div>
        <div class="main"
          css={[
            {
              maxWidth: '50vw'
            }
          ]}
        >
          <div class="intro"
            css={[
              {
                marginTop: '25vh',
              }
            ]}
          >
            <Waypoint 
              onEnter={({ event }) => {
                navRef.current.showSpeechBubble()
              }} 
              onLeave={({ event }) => {
                navRef.current.hideSpeechBubble()
              }} 
              topOffset='25%'
              bottomOffset='25%'
            >
              <div
                css={css`
                  height: 300px;
                `}
              >
              </div>
            </ Waypoint >
            <div class="contact"
                css={[
                  container,
                  {
                    height: 'calc(75vh - 300px)'
                  }
                ]}
            >
              github
            </div>
          </div>
          <div class="sections">
            {sections.map((section, index) =>
              <div className="section" id="teaching"
                css={[
                  container
                ]}
                key={index}
              >
                <Waypoint 
                  onEnter={({ previousPosition, event }) => {
                    if (previousPosition === Waypoint.below) {
                      navRef.current.showSpeechBubble()
                    } 
                  }} 
                  onLeave={({ currentPosition, event }) => {
                    if (currentPosition === Waypoint.below) {
                      navRef.current.hideSpeechBubble()
                    } 
                  }} 
                  bottomOffset='60%'
                />
                  <div
                    css={css`
                      height: 300px;
                    `}
                  >
                  </div>
                <Waypoint 
                  onEnter={({ previousPosition, event }) => {
                    if (previousPosition === Waypoint.above) {
                      navRef.current.showSpeechBubble()
                    } 
                  }} 
                  onLeave={({ currentPosition, event }) => {
                    if (currentPosition === Waypoint.above) {
                      navRef.current.hideSpeechBubble()
                    } 
                  }} 
                  topOffset='50%'
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

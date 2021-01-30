import * as React from "react"
import { css } from '@emotion/react'
import { rhythm } from '../utils/typography'

// data
import { sections } from '../data/sections'
// styles
import Layout from '../components/layout'
import IndexSpacer from '../components/spacer'
import SectionItem from '../components/item'


const container = css({
  padding: rhythm(2)
})


// markup
const IndexPage = () => {
  return (
    <Layout>
        {sections.map((section, index) =>
          <div className="section" id="teaching"
            css={[
              container
            ]}
            key={index}
          >
            <IndexSpacer />
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
    </Layout>
  )
}

export default IndexPage

import * as React from "react"

import Layout from '../components/layout'
import IndexSpacer from '../components/spacer'
import SectionItem from '../components/item'

// styles

// data

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div className="section" id="teaching">
          <IndexSpacer />
          <SectionItem title="Making with Code" description="test description" list="list" />
        </div>
        <div className="section" id="programming">
          <IndexSpacer />
          <SectionItem title="Making with Code" description="test description" list="list" />
        </div>
        <div className="section" id="research">
          <IndexSpacer />
          <SectionItem title="Making with Code" description="test description" list="list" />
        </div>
        <div className="section" id="etc">
          <IndexSpacer />
          <SectionItem title="Making with Code" description="test description" list="list" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

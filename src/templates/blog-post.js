import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"


class BlogPage extends React.Component {
 
  render() {

    return (
      <Layout>
        <Helmet bodyAttributes={{ class: "home" }}>
          <title>TMRRW INC | A Creative Agency</title>
        </Helmet>
        <SEO
          description={"TMRRW INC is a creative agency in Sarnia Ontario."}
        />
        <h1>BLOGAROONI</h1>
      </Layout>
    )
  }
}



export default BlogPage;
import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Link from "gatsby-plugin-transition-link"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


class WorkPage extends React.Component {
  parallaxRef = React.createRef();
  componentDidMount() {
    // document.getElementsByTagName("body")[0].style.transform = null

  }

  render() {
    return (
      <ParallaxProvider ref={this.parallaxRef}>
        <div className="sky-gradient-half">
          <Helmet >
            <title>TMRRW INC | A Creative Agency</title>
          </Helmet>
          <SEO
            description={"TMRRW INC is a creative agency in Sarnia Ontario."}
          />
          <div className="container our-work-title">
            <div class="row">

              <div class="col-lg-6 col-md-6">
                <Parallax y={[20, -30]} >
                  <h1>Work</h1>
                </Parallax>
              </div>
            </div>
          </div>
          <section class="our-work-section">
            <div class="container">
              <div class="row">
                {this.props.projects.map(project => (
                  <div class="col-lg-6 col-md-6 work-main">
                    <Parallax y={[20, -30]} >
                      <Link
                        to={project.node.frontmatter.path}
                        title=""
                        class="work-bx"
                      >
                        {project.node.frontmatter.tile.extension === "jpg" ? (
                          <img
                            src={project.node.frontmatter.tile.publicURL}
                            alt=""
                          />
                        ) : (
                            <video
                              src={project.node.frontmatter.tile.publicURL}
                              autoplay="autoplay"
                              loop
                              ref="videoPlay"
                            ></video>
                          )}
                        <div class="work-info">
                          <h3> {project.node.frontmatter.title}</h3>
                          <span>{project.node.frontmatter.categories[0]}</span>
                        </div>
                      </Link>
                    </Parallax>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </ParallaxProvider>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
    query {
      allMdx(filter: {frontmatter: {posttype: {eq: "work"}}}, sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            frontmatter {
              title
              categories
              path
              tile {
                publicURL
                extension
              }
            }
          }
        }
      }
    }
    `}
    render={({ projects }) => (
      <WorkPage projects={props.data.allMdx.edges} {...props} />
    )}
  />
)

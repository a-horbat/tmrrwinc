import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import TransitionLink from "gatsby-plugin-transition-link"
import SEO from "../components/seo"
import NextProject from "../components/project/next-project"
import Splitting from "splitting"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import { gsap, Power2 } from "gsap"
import Footer from "../components/footer"
//import HeaderImageDelduca from "../images/work-projects/AltSpace/Rectangle-Background.png"
import Rectangle from "../images/work-projects/AltSpace/Rectangle-Background.png"
import RectangleMob from "../images/work-projects/AltSpace/Rectangle-BackgroundMob.png"
import Skull from "../images/work-projects/AltSpace/Skull.png"
import mobLogo from "../images/work-projects/AltSpace/Icon-PortfolioPage_1.png"
import deskLogo from "../images/work-projects/AltSpace/Icon-PortfolioPage_Mob.png"

class ProjectPage extends React.Component {
  componentDidMount() {
    Splitting()

    gsap.from(".white-header", 0.6, {
      y: -150,
      opacity: 0,
    })
    gsap.to(".banner .char", 1.3, {
      y: 0,
      stagger: 0.01,
      ease: Power2.easeInOut,
    })
    gsap.from(
      ".banner h4",
      0.9,
      {
        opacity: 0,
        ease: "Power2.easeInOut",
      },
      "-=0.5"
    )
  }

  render() {
    const exitItem = {
      trigger: ({ exit, node }) => {
        document.getElementsByClassName("next-project")[0].style.position =
          "fixed"
        const nextTL = gsap.timeline()
        nextTL
          .to(".sections", 0.3, {
            opacity: 0,
          })
          .to(".project-title", 0.2, {
            opacity: 0,
          })
          .to(".next-project", 0.6, {
            height: "100vh",
            ease: Power2.easeOut,
            onComplete: () => {
              window.scrollTo(0, 0)
            },
          })
      },
      length: 1.3,
      zIndex: 2,
    }

    const { data, pageContext } = this.props

    return (
      <div>
        <SEO
          title={`${data.mdx.frontmatter.title}`}
          description={"TMRRW INC is a creative agency in Sarnia Ontario."}
        />
        <div className="sections">
          <MDXProvider>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>

        {pageContext.next ? (
          <TransitionLink
            to={pageContext.next.node.frontmatter.path}
            exit={exitItem}
            entry={{
              delay: 1.1,
              state: {
                transitionImage:
                  pageContext.next.node.frontmatter.projectHeader.publicURL,
              },
              zIndex: 0,
            }}
          >
            <NextProject
              title={pageContext.next.node.frontmatter.title}
              subtitle={pageContext.next.node.frontmatter.subtitle}
              backgroundColor={
                pageContext.next.node.frontmatter.backgroundColor
              }
              image={pageContext.next.node.frontmatter.projectHeader.publicURL}
              mobLogo={mobLogo}
              deskLogo={deskLogo}
            />
          </TransitionLink>
        ) : (
          <TransitionLink
            to={"/work/los-puntos"}
            exit={exitItem}
            entry={{
              delay: 1.1,
              state: {
                transitionImage: Rectangle,
              },
              zIndex: 0,
            }}
          >
            <NextProject
              title={"Los Puntos Cantina"}
              subtitle={"Taco Tuesday...Everday"}
              backgroundColor="#FAD11B"
              image={RectangleMob}
              backgroundColorMob="#B3B3B3"
              skull={Skull}
            />
          </TransitionLink>
        )}
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query($path: String!) {
        mdx(frontmatter: { path: { eq: $path } }) {
          body
          frontmatter {
            title
            backgroundColor
            projectHeader {
              publicURL
            }
          }
        }
      }
    `}
    render={({ project }) => <ProjectPage projects={project} {...props} />}
  />
)

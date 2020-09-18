/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/blog-post.js")
  const projectTemplate = path.resolve("src/templates/project-post.js")

  return graphql(`
    query MyQuery {
      allMdx(
        filter: { frontmatter: { posttype: { eq: "work" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            frontmatter {
              path
              posttype
              title
              subtitle
              backgroundColor
              projectHeader {
                publicURL
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMdx.edges.forEach((edge, index) => {
      if (edge.node.frontmatter.posttype === "work") {
        createPage({
          path: edge.node.frontmatter.path,
          component: projectTemplate,
          context: {
            path: edge.node.frontmatter.path,
            prev: index === 0 ? null : result.data.allMdx.edges[index - 1],
            next:
              index === result.length - 1
                ? null
                : result.data.allMdx.edges[index + 1],
          },
        })
      } else {
        return
      }
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
          {
            test: /splitting/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

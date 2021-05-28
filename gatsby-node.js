/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

async function turnDestinationToPages({ graphql, actions }) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/destination/" }
          frontmatter: { role: { eq: "destination-detail" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/destination/${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/destination.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}

async function turnAccomodationsToPages({ graphql, actions }) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/accomodations/" }
          frontmatter: { role: { ne: "overview" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/accomodations/${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/accomodation.js"),
      context: {
        slug: node.frontmatter.slug,
        regex: `/${node.frontmatter.slug}/`,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    turnDestinationToPages({ graphql, actions }),
    turnAccomodationsToPages({ graphql, actions }),
  ])
}

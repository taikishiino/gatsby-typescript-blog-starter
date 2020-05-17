'use strict'
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  // MarkdownRemarkNodeの場合のみ処処
  if (node && node.internal && node.internal.type === 'MarkdownRemark') {

    // markdownのファイルパスを取得
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blogTemplate.tsx`)

  console.log("===> Start createPages")
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.fields.slug
    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug: slug
      }
    })
    console.log("[OK]", slug)
  })
  console.log("====>> End createPages")
}

/**
 * @PATHのalias
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  })
}
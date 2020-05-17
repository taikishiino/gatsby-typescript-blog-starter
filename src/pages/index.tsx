import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "@/components/layout"
import Image from "@/components/image"
import SEO from "@/components/seo"

interface Props {}
const IndexPage: React.FC<Props> = (): JSX.Element => {
  const data = useStaticQuery(graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
  `)

  const markdowns = data.allMarkdownRemark || {}
  const blogs = markdowns.edges.map((edge: any) => (
    <li key={edge.node.id}>
      <Link to={edge.node.fields.slug} className="blog-card-body">
        <div>{edge.node.frontmatter.title} | {edge.node.frontmatter.description}</div>
      </Link>
    </li>
  ))

  return (
    <Layout>
      <SEO
        title="トップページ"
        description="トップページです。"
      />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <ul>{blogs}</ul>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export default IndexPage
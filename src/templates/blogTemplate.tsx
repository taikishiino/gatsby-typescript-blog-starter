import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { BlogTemplateQueryQuery } from "@/types/graphql-types"

interface Props {
  data: BlogTemplateQueryQuery
}
const BlogTemplate: React.FC<Props> = (props): JSX.Element => {
  const markdown = {
    html: props.data.markdownRemark?.html || ``,
    title: props.data.markdownRemark?.frontmatter?.title || ``,
    description: props.data.markdownRemark?.frontmatter?.description || ``
  }
  return (
    <Layout>
      <SEO
        title={markdown.title}
        description={markdown.description}
      />
      <h1>{markdown.title}</h1>
      <h3>{markdown.description}</h3>
      <div className="html" dangerouslySetInnerHTML={{ __html: markdown.html }} />
    </Layout>
  )
}
export default BlogTemplate

export const query = graphql`
  query BlogTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        title
        description
      }
    }
  }
`;
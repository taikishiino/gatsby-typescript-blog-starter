import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Query } from "@/types/graphql-types"

interface Props {
  title: string
  description: string
}
const SEO: React.FC<Props> = (props): JSX.Element => {
  const data = useStaticQuery<Query>(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteDescription
            siteUrl
            siteLanguage
            twitterAuthor
          }
        }
      }
    `
  )

  const metadata = data.site?.siteMetadata || {}
  const seo = {
    title: props.title || metadata.siteTitle,
    description: props.description || metadata.siteDescription
  }

  return (
    <Helmet
      title={seo.title || ``}
      titleTemplate={`%s | ${metadata.siteTitle}`}
      meta={[
        {
          name: `description`,
          content: seo.description || ``,
        },
        {
          property: `og:title`,
          content: seo.title || ``,
        },
        {
          property: `og:description`,
          content: seo.description || ``,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metadata.twitterAuthor || ``,
        },
        {
          name: `twitter:title`,
          content: seo.title || ``,
        },
        {
          name: `twitter:description`,
          content: seo.description || ``,
        },
      ]}
    >
      <html lang={metadata.siteLanguage || ``} />
    </Helmet>
  )
}

export default SEO

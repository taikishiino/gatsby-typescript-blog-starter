import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

interface Props {
  children: JSX.Element | JSX.Element[]
}
const Layout: React.FC<Props> = (props): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteTitle
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.siteTitle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}
export default Layout

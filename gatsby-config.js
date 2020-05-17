const config = {
  siteTitle: `Gatsby Typescript Blog Starter`,
  siteDescription: `Gatsby×TypeScriptのテンプレート`,
  siteUrl: `https://www.taikishiino.com`,
  siteLanguage: `ja`,
  twitterAuthor: `@buena926`,
  social: {
    twitter: 'https://twitter.com/buena926',
    github: 'https://github.com/taikishiino'
  }
}

module.exports = {
  siteMetadata: config,
  plugins: [
    `gatsby-plugin-react-helmet`,
    /**
     * @markdownのパスを定義
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/markdown/blogs`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    /**
     * @Query型を自動生成する
     */
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `src/types/graphql-types.d.ts`
      }
    },
    `gatsby-plugin-typescript`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

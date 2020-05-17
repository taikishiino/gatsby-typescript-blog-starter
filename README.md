# Gatsby×TypeScriptのMarkdownブログテンプレート
このリポジトリは、 `gatsby new` したテンプレートをベースにTypeScript化・Markdownコンテンツ化したリポジトリになります。

## 🚀 Quick start

```shell
$ yarn install 
$ yarn develop
```

## このテンプレートでやっていること
**1. gatsbyでテンプレ作成**
```shell
$ npm install -g gatsby-cli
$ gatsby new [プロジェクト名]
```

**2. TypeScriptの導入**
- typescript
- ts-node
- @types/react-helmet

**3. graphqlの型定義自動出力**
- gatsby-plugin-graphql-codegen

**4. markdownブログの最小構成のベース作成**
- gatsby-transformer-remark
- gatsby-remark-prismjs
- prismjs

## このテンプレートでやっていないこと
- アーキテクチャの導入
- ESLint/stylelint導入&自動化（フォーマッタは導入済み）
- scss/styled-componentsのスタイリングライブラリの導入
- Contentfulの導入
など...

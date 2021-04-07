import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <pre css={css`float: right`} title={post.frontmatter.date}>Written: {post.frontmatter.ago}</pre>
        <pre title={post.wordCount.words}>Time to read: {post.timeToRead}</pre>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        ago: date(fromNow: true)
        date
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`

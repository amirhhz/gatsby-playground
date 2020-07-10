import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
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

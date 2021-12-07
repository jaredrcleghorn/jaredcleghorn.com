import { PageProps, graphql } from "gatsby"
import React from "react"
import { Card, Layout } from "../../components"
import * as styles from "./index.module.scss"

interface PostProps extends PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string
        title: string
      }
      html: string
    }
  }
}

export default function Post(props: PostProps) {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Card title={frontmatter.title}>
        <span className="text-muted">{frontmatter.date}</span>
        <div
          className="mt-1"
          dangerouslySetInnerHTML={{ __html: html }}
          id={styles.div}
        />
      </Card>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      html
    }
  }
`

import { PageProps, graphql } from "gatsby"
import React from "react"
import { Card, Layout, RecentPostCard } from "../components"

type Edge = {
  node: {
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      title: string
    }
    id: number
  }
}

interface HomeProps extends PageProps {
  data: {
    allMarkdownRemark: {
      edges: Edge[]
    }
  }
}

export default function Home(props: HomeProps) {
  return (
    <Layout>
      <Card title="About Me">
        <div className="mt-2">
          Hi! My name is Jared Cleghorn&mdash;welcome to my website! I studied
          physics, mathematics, and computer science at the University of
          Alabama, and I worked as a student web developer for the University
          Libraries.
        </div>
      </Card>
      <Card className="mt-3" title="Recent Posts">
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
          <RecentPostCard
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
          />
        ))}
      </Card>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
        }
      }
    }
  }
`

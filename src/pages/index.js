import React from "react"
import { graphql } from "gatsby"
import styles from "./index.module.scss"

export default function Home({ data }) {
  return (
    <>
      <h1 id={styles.header}>
        <span>&lt;</span>Jared Cleghorn&nbsp;<span>/&gt;</span>
      </h1>
      <main id={styles.main}>
        <section>
          <h2>About Me</h2>
          <p>
            Hi! My name is Jared Cleghorn&mdash;welcome to my website! I am a
            student at the University of Alabama pursuing a B.S. with majors in
            physics and mathematics and a minor in computer science. I also work
            as a student web developer for the University of Alabama Libraries.
          </p>
        </section>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <h3>{node.frontmatter.date}</h3>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </article>
        ))}
      </main>
      <p id={styles.footer}>
        Copyright &copy; 2021 Jared Cleghorn. All rights reserved.
      </p>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          html
        }
      }
    }
  }
`

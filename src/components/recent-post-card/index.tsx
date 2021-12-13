import { Link } from "gatsby"
import React from "react"
import { Card } from "react-bootstrap"
import * as styles from "./index.module.scss"

type RecentPostCardProps = {
  date: string
  excerpt: string
  slug: string
  title: string
}

export default function RecentPostCard(props: RecentPostCardProps) {
  return (
    <Card bg="dark" className="mt-3 p-3">
      <h3 className="mb-0">
        <Link className="text-danger" id={styles.link} to={props.slug}>
          {props.title}
        </Link>
      </h3>
      <span className="mt-1 text-muted">{props.date}</span>
      <div className="mt-2">{props.excerpt}&hellip;</div>
    </Card>
  )
}

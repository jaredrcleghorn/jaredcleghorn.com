import React from "react"
import { Card } from "react-bootstrap"

type RecentPostCardProps = {
  date: string
  excerpt: string
  title: string
}

export default function RecentPostCard(props: RecentPostCardProps) {
  return (
    <Card bg="dark" className="mt-3 p-3">
      <h3 className="text-danger text-decoration-underline">{props.title}</h3>
      <span className="text-muted">{props.date}</span>
      <div className="mt-2">{props.excerpt}&hellip;</div>
    </Card>
  )
}

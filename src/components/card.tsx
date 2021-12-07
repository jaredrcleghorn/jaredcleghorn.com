import React, { ReactNode } from "react"
import * as ReactBootstrap from "react-bootstrap"

type CardProps = {
  children?: ReactNode
  className?: string
  title: string
}

export default function Card(props: CardProps) {
  return (
    <ReactBootstrap.Card bg="black" className={`p-3 ${props.className}`}>
      <h2 className="mb-0">{props.title}</h2>
      {props.children}
    </ReactBootstrap.Card>
  )
}

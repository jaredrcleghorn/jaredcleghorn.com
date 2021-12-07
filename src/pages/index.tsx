import React from "react"
import { Card, Layout } from "../components"

export default function Home() {
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
    </Layout>
  )
}

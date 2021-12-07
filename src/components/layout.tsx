import React, { ReactNode } from "react"
import { Container } from "react-bootstrap"
import Footer from "./footer"
import Header from "./header"

type LayoutProps = { children: ReactNode }

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <Container className="bg-dark p-3">{props.children}</Container>
      <Footer />
    </>
  )
}

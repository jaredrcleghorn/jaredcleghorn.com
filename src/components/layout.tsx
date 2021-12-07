import React, { ReactNode } from "react"
import Header from "./header"

type LayoutProps = { children: ReactNode }

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

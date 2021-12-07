import React, { ReactNode } from "react"

type LayoutProps = { children: ReactNode }

export default function Layout(props: LayoutProps) {
  return <>{props.children}</>
}

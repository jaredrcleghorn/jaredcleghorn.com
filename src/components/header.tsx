import React from "react"
import { Navbar } from "react-bootstrap"
import Brand from "./brand"

export default function Header() {
  return (
    <Navbar className="justify-content-center">
      <Brand />
    </Navbar>
  )
}

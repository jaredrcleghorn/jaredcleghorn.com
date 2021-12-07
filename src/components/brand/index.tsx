import { Link } from "gatsby"
import React from "react"
import { Navbar } from "react-bootstrap"
import * as styles from "./index.module.scss"

export default function Brand() {
  return (
    <Navbar.Brand as="h1" className="fw-bold m-0" id={styles.brand}>
      <Link className="text-decoration-none text-white" id={styles.link} to="/">
        <span className="text-danger">&lt;</span>Jared Cleghorn{" "}
        <span className="text-danger">/&gt;</span>
      </Link>
    </Navbar.Brand>
  )
}

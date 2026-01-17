import React from "react"
import Link from "next/link"

export default function Header() {
  return (
    <header style={{ padding: "10px 40px", borderBottom: "1px solid #ccc" }}>
      <Link href="/">Energy & Logics</Link>
      <nav style={{ float: "right" }}>
        <Link href="/services" style={{ margin: "0 10px" }}>Services</Link>
        <Link href="/training" style={{ margin: "0 10px" }}>Training</Link>
        <Link href="/support" style={{ margin: "0 10px" }}>Support</Link>
      </nav>
    </header>
  )
}

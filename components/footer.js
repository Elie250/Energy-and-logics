import React from "react"

export default function Footer() {
  return (
    <footer style={{ padding: "20px", textAlign: "center", borderTop: "1px solid #ccc" }}>
      © {new Date().getFullYear()} Energy & Logics Ltd — Engineering Your Sustainability
    </footer>
  )
}

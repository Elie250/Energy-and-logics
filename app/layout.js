import React from "react"
import Header from "../components/header" // <- relative path
import Footer from "../components/footer" // <- relative path

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

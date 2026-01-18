import Link from "next/link"

export default function Header() {
  return (
    <header style={{ padding: 20, borderBottom: "1px solid #ddd" }}>
      <h2>Energy & Logics</h2>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/services">Services</Link> |{" "}
        <Link href="/training">Training</Link> |{" "}
        <Link href="/support">Support</Link>
      </nav>
    </header>
  )
}
